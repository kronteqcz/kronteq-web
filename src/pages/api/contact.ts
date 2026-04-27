import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

// Rate limiting — jednoduchý in-memory store (reset při restartu serveru)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;       // max 3 odeslání
const RATE_WINDOW = 60_000; // za 60 sekund z jedné IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export const POST: APIRoute = async ({ request }) => {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('cf-connecting-ip') ??
    '0.0.0.0';

  // Rate limit
  if (!checkRateLimit(ip)) {
    return new Response(JSON.stringify({ error: 'Příliš mnoho pokusů. Zkuste to za chvíli.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: Record<string, string>;
  try {
    const ct = request.headers.get('content-type') ?? '';
    if (ct.includes('application/json')) {
      body = await request.json();
    } else {
      const fd = await request.formData();
      body = Object.fromEntries(
        [...fd.entries()].map(([k, v]) => [k, String(v)])
      );
    }
  } catch {
    return new Response(JSON.stringify({ error: 'Neplatná data.' }), { status: 400 });
  }

  // Honeypot — _gotcha nesmí být vyplněno
  if (body._gotcha && body._gotcha.trim() !== '') {
    // Tiše přijmout (bot si myslí, že odeslal)
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  // Validace povinných polí
  const { name, email, message, company = '', phone = '' } = body;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(JSON.stringify({ error: 'Vyplňte všechna povinná pole.' }), { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Neplatný formát e-mailu.' }), { status: 422 });
  }

  // SMTP config z env proměnných
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO,
    SMTP_SECURE,
  } = import.meta.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_TO) {
    console.error('[contact] SMTP není nakonfigurováno');
    return new Response(JSON.stringify({ error: 'Chyba konfigurace serveru.' }), { status: 500 });
  }

  const port = parseInt(SMTP_PORT ?? '587', 10);
  const secure = SMTP_SECURE === 'true' || port === 465;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subject = `[Kronteq] Nová poptávka od ${name}${company ? ` (${company})` : ''}`;

  const html = `
<table style="font-family:sans-serif;font-size:15px;color:#2C2040;max-width:600px">
  <tr><td style="padding:24px 0 8px;border-bottom:2px solid #7C3AED">
    <strong style="font-size:18px">Nová poptávka z webu Kronteq.com</strong>
  </td></tr>
  <tr><td style="padding:16px 0 4px"><strong>Jméno:</strong> ${escHtml(name)}</td></tr>
  ${company ? `<tr><td style="padding:4px 0"><strong>Firma:</strong> ${escHtml(company)}</td></tr>` : ''}
  <tr><td style="padding:4px 0"><strong>E-mail:</strong> <a href="mailto:${escHtml(email)}">${escHtml(email)}</a></td></tr>
  ${phone ? `<tr><td style="padding:4px 0"><strong>Telefon:</strong> ${escHtml(phone)}</td></tr>` : ''}
  <tr><td style="padding:16px 0 4px;border-top:1px solid #EDE9F8">
    <strong>Zpráva:</strong><br/>
    <p style="white-space:pre-wrap;margin:8px 0 0;color:#6B5F80">${escHtml(message)}</p>
  </td></tr>
  <tr><td style="padding:16px 0 0;font-size:12px;color:#9D90B0">
    IP: ${ip} · ${new Date().toLocaleString('cs-CZ', { timeZone: 'Europe/Prague' })}
  </td></tr>
</table>`;

  try {
    await transporter.sendMail({
      from: SMTP_FROM ?? SMTP_USER,
      to: SMTP_TO,
      replyTo: email,
      subject,
      html,
      text: `Jméno: ${name}\nFirma: ${company}\nE-mail: ${email}\nTelefon: ${phone}\n\nZpráva:\n${message}`,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[contact] SMTP error:', err);
    return new Response(JSON.stringify({ error: 'Odeslání selhalo. Zkuste to znovu.' }), { status: 500 });
  }
};

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
