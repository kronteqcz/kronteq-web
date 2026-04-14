import type { APIContext } from 'astro';

export async function GET(_context: APIContext): Promise<Response> {
  const site = 'https://www.kronteq.com';

  const pages = [
    { url: `${site}/`, priority: '1.0', changefreq: 'weekly' },
    { url: `${site}/reseni/`, priority: '0.9', changefreq: 'monthly' },
    { url: `${site}/odvtvi/`, priority: '0.9', changefreq: 'monthly' },
    { url: `${site}/o-nas/`, priority: '0.8', changefreq: 'monthly' },
    { url: `${site}/kontakt/`, priority: '0.9', changefreq: 'monthly' },
    { url: `${site}/en/`, priority: '1.0', changefreq: 'weekly' },
    { url: `${site}/en/solutions/`, priority: '0.9', changefreq: 'monthly' },
    { url: `${site}/en/industries/`, priority: '0.9', changefreq: 'monthly' },
    { url: `${site}/en/about/`, priority: '0.8', changefreq: 'monthly' },
    { url: `${site}/en/contact/`, priority: '0.9', changefreq: 'monthly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
