# QUESTIONS — Kronteq obsah

## Otevřené otázky

### Q1 — EAE / Kristýna Ondráčková / Kronteq vztah
**Otázka:** Prezentace v záhlaví obsahuje „EAE" (European Adhesive Engineers). Je Kronteq jiný název pro EAE, nebo je EAE výrobce/asociace, pro které Kronteq distribuuje produkty?
**Aktuální předpoklad:** EAE je profesní certifikace/asociace; Kronteq je klientská firma; Kristýna je certifikovaná EAE. Prezentace ji vede jako garantku znalostní báze.
**Dopad:** Pokud EAE = firemní název, úpravit `strings.ts` heroTagline z "European Adhesive Engineers" na jiný claim.

### Q2 — Produktový katalog
**Otázka:** Existuje konkrétní SKU / ceník / výrobci, se kterými Kronteq spolupracuje (Sika, Henkel, 3M, Bostik, ...)?
**Aktuální předpoklad:** Nevytvářet smyšlené SKU; dodávám kategorie s obecnými parametry.
**Dopad:** Kategorie popsány genericky, CTA směřuje vždy na konzultaci.

### Q3 — Drive složka vizitka
**Otázka:** Drive složka `https://drive.google.com/drive/folders/1VSfeJtwBrsS20N4Te2PmlulhnYNJlEMa` — přístupná?
**Stav:** `gdown --folder` vyžaduje autentikaci nebo public link. V `/data/bot/kronteq/drive_files/` jsou `img1.png`, `img2.png`, `img3.png` (vizitka je pravděpodobně `img2.png`).
**Aktuální předpoklad:** Kontakty přebírám z existujícího `src/data/contact.ts` (Kristýna Ondráčková, +420 608 55 88 33, ondrackova@kronteq.com, Roháčova 145/14, Praha 3) — tyto údaje sedí s vizitkou z minulé session.

### Q4 — Pracovní doba
**Otázka:** Jaká je pracovní doba Kronteq? (pro `/kontakt/`)
**Aktuální předpoklad:** „Pondělí–Pátek, 8:00–17:00" — placeholder, k doplnění.

### Q5 — Certifikace a normy
**Otázka:** Splňuje Kronteq konkrétní certifikace (ISO 9001, IATF 16949, EN 1464...)?
**Aktuální předpoklad:** Zmiňuji jen EAE certifikaci Kristýny; ostatní ISO/IATF neuvádím bez potvrzení.

### Q6 — Case studies / reference
**Otázka:** Existují reference na konkrétní klienty/projekty?
**Aktuální předpoklad:** Ne. Stránky budou mít placeholder „Case study — připravujeme" nebo sekci vynecháme.

### Q7 — Jazyk EN pro web
**Otázka:** Jednotky v EN — jen °C, nebo i °F paralelně?
**Aktuální předpoklad:** Pouze °C (průmyslový evropský standard). Konzistentní obě verze.

---

## Vyřešené otázky

- **i18n mechanismus** — `getLang('cs'|'en')` + Astro `i18n.routing.prefixDefaultLocale: false`; CS = bez prefixu, EN = `/en/`
- **Kontaktní údaje** — `src/data/contact.ts` vyplněno
- **Content collections** — přidávám pro KB články; ostatní zůstávají v data files
