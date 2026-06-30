# CLAUDE.md — Kronteq Web

Instrukce pro Claude Code a AI agenty pracující s tímto projektem.

---

## Projekt v kostce

**Kronteq** je B2B web pro specializovaného dodavatele průmyslových lepicích systémů.
Cílová skupina: průmysloví technici a nákupčí v automotive, elektronice, letectví a stavebnictví.

- **Doména:** kronteq.com (zatím nenasazeno)
- **GitHub:** github.com/kronteqcz/kronteq-web
- **Kontakt projektu:** Kristýna Ondráčková, European Adhesive Engineer (EAE) — tvář značky, autorka obsahu

---

## Stack

| Vrstva | Technologie |
|---|---|
| Framework | Astro 7.0.4, output: `static` (jen `api/contact` má `prerender = false`) |
| Adapter | `@astrojs/vercel` v11 (deploy na Vercel). `engines.node`=22.x, runtime `nodejs22.x` |
| Obsah | MDX content collections (`@astrojs/mdx`) |
| Fonty | Variable fonty přes `@fontsource-variable` (DM Sans, Inter, Outfit, Space Grotesk) |
| Email | nodemailer (kontaktní formulář → SMTP) |
| Jazyk | TypeScript |
| Build | `npm run build` → `.vercel/output/` |
| Spuštění | Vercel (auto deploy z GitHubu, `kronteq.vercel.app`) |

> ⚠️ Po přechodu na vercel adaptér se **`dist/` už negeneruje** — self-host přes
> `server.mjs` / `node dist/server/entry.mjs` / `npm start` proto **NEfunguje** (mrtvý kód).
> Pro návrat k self-hostu by se musel vrátit `@astrojs/node`.

---

## Spuštění lokálně

```bash
npm install
cp .env.example .env   # doplnit SMTP údaje
npm run dev            # dev server na localhost:4321
npm run build          # produkční build
node dist/server/entry.mjs  # spustit produkční build
```

### Env proměnné (`.env`)

Viz `.env.example`. Klíčové:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` — SMTP server
- `SMTP_USER`, `SMTP_PASS` — přihlašovací údaje
- `SMTP_FROM` — odesílatel (zobrazí se příjemci)
- `SMTP_TO` — příjemce poptávek (Kristýna Ondráčková)

---

## Architektura

### i18n routing

```
cs (výchozí): /cesta/           → prefixDefaultLocale: false
en:           /en/path/
```

Konfigurace v `astro.config.mjs`:
```js
i18n: {
  defaultLocale: 'cs',
  locales: ['cs', 'en'],
  routing: { prefixDefaultLocale: false }
}
```

Texty jsou v `src/i18n/strings.ts` — jeden objekt s klíči `cs` a `en`. Použití v komponentách:
```ts
import { strings } from '../i18n/strings';
const t = strings[lang];  // lang: 'cs' | 'en'
```

### Data vs. Content Collections

**TypeScript data soubory** (`src/data/*.ts`) — strukturovaná data s pevnou typovou definicí:
- `services.ts` — 6 služeb (slug, ikony, popis, benefity, CTA) v CS+EN
- `products.ts` — produktové kategorie
- `faq.ts` — 17 FAQ položek ve 4 kategoriích
- `technologies.ts` — 4 technologická témata
- `industries.ts` — odvětvové stránky
- `contact.ts` — kontaktní údaje

**Content Collections** (`src/content/kb/`) — dlouhé MDX články:
- `src/content/kb/cs/` — 10 českých článků
- `src/content/kb/en/` — 10 anglických článků (mirror překlady)
- Schéma v `src/content.config.ts` — **Content Layer** (`glob()` loader, base `./src/content/kb`), Zod validace frontmatter. (Astro 7 zrušil legacy collections.)

### Slug handling v MDX

Content Layer: entry má **`.id`** (ne `.slug`), pro `cs/nazev-clanku.mdx` = `cs/nazev-clanku`.
Routovací soubory prefix odstraňují, render je přes `render()` z `astro:content`:
```ts
import { getCollection, render } from 'astro:content';
article.id.replace(/^cs\//, '')        // nebo /^en\//
const { Content } = await render(article);  // ne article.render()
```

### MDX gotcha — JSX escaping

Znak `<` bezprostředně před číslem musí být escapován, jinak MDX parser selže:
```
❌  <10 %        ✓  &lt;10 %
❌  <30 mN/m     ✓  &lt;30 mN/m
```

---

## Struktura souborů

```
src/
├── assets/            ← obrázky (hero, footer) — součást Astro image pipeline
├── components/
│   ├── home/          ← sekce homepage (Hero, DriversSection, IndustriesSection, ...)
│   ├── illustrations/ ← 7 SVG ilustrací jako Astro komponenty
│   └── layout/        ← Header.astro, Footer.astro
├── content/
│   └── kb/
│       ├── cs/        ← 10 CZ KB článků (MDX)
│       └── en/        ← 10 EN KB článků (MDX)
├── data/              ← TypeScript datové soubory
├── i18n/
│   └── strings.ts     ← všechny překlady
├── layouts/
│   ├── BaseLayout.astro
│   └── BlogLayout.astro
└── pages/
    ├── index.astro            ← homepage CS
    ├── sluzby/index.astro
    ├── produkty/index.astro
    ├── technologie/index.astro + [slug].astro
    ├── faq/index.astro
    ├── znalostni-baze/index.astro + [slug].astro
    ├── odvtvi/index.astro
    ├── o-nas/index.astro
    ├── reseni/index.astro
    ├── kontakt/index.astro
    ├── dekujeme/index.astro   ← děkovací stránka po odeslání formuláře
    ├── api/contact.ts         ← API endpoint pro kontaktní formulář
    ├── sitemap.xml.ts
    ├── 404.astro
    └── en/                    ← mirror všech CS stránek v angličtině

public/
├── assets/
│   ├── kb/            ← SVG ilustrace pro KB články (10 souborů)
│   ├── logo-monogram.webp
│   └── logo-monogram-nav.webp
```

---

## SVG ilustrace

V `src/components/illustrations/` jsou Astro komponenty s inline SVG:

| Komponenta | Použití |
|---|---|
| `StressDistribution.astro` | Distribuce napětí: šroub vs. lepidlo |
| `AdhesionCohesion.astro` | Adheze a koheeze |
| `AdhesiveSpectrum.astro` | Scatter: pevnost × pružnost |
| `SurfacePrep3Steps.astro` | 3 kroky přípravy povrchu |
| `HybridJoint.astro` | Weld-bonding hybridní spoj |
| `WeldVsGlue.astro` | Srovnání svařování vs. lepení |
| `FourDrivers.astro` | 4 důvody průmyslu pro lepení |

Statické SVG pro KB články jsou v `public/assets/kb/`.

---

## Kontaktní formulář

- Stránka: `/kontakt/` → `src/pages/kontakt/index.astro`
- API endpoint: `src/pages/api/contact.ts` (POST, nodemailer)
- Děkovací stránka: `/dekujeme/` → `src/pages/dekujeme/index.astro`
- Konfigurace přes env proměnné (viz výše)

---

## Co je hotové (MVP stav — duben 2026)

- ✅ 49 stránek (CS + EN), build 0 chyb
- ✅ Kompletní i18n (CS výchozí, EN prefix `/en/`)
- ✅ 10 + 10 KB článků v MDX
- ✅ 6 služeb, produkty, FAQ (17 položek), technologie, odvětví
- ✅ 7 SVG ilustrací jako Astro komponenty
- ✅ Kontaktní formulář + SMTP + děkovací stránka
- ✅ Schema.org (ServiceCatalog, FAQPage)
- ✅ Sitemap

---

## Co chybí / otevřené úkoly

Detaily viz jednotlivé soubory:

- **`QUESTIONS.md`** — 7 otevřených otázek pro klienta (case studies, doména, fotky, obsah...)
- **`BLOCKERS.md`** — co blokuje nasazení
- **`CONTENT-PLAN.md`** — plán obsahu s task mapou, co je hotové a co zbývá
- **`IMAGE-PROMPTS.md`** — 18 prompts pro chybějící fotografie (hero, produkty, team)
- **`research/`** — konkurenční analýza (CZ + EN trh), IA návrh

**Stručný přehled nedodělků:**
1. **Fotografie** — `src/assets/` a `public/assets/` mají jen loga a SVG. Hero images a product images jsou placeholder. Viz `IMAGE-PROMPTS.md`.
2. **Detail stránky** — `/sluzby/[slug]/`, `/odvtvi/[slug]/` a `/en/` ekvivalenty neexistují. Index stránky zobrazují vše inline.
3. **Case studies** — chybí. Zákazník musí dodat anonymizované reference.
4. **Homepage enrichment** — nebyla v scope: Weld vs. Bond comparison table, technology teaser, KB preview.
5. **Nasazení** — doména kronteq.com, Vercel nebo Coolify — nerozhodnuto.

---

## Deploy

**Nasazeno na Vercel:** `kronteq.vercel.app` (repo `kronteqcz/kronteq-web`, větev `main`, auto deploy z GitHubu).

**Klíčové pro Vercel (jinak 404 / invalid runtime):**
- Adaptér **musí** být `@astrojs/vercel`, NE `@astrojs/node`. Node adaptér vyrábí
  `dist/client` + `dist/server` bez root `index.html` → Vercel preset vrací 404 na všem.
- `package.json` → `"engines": { "node": "22.x" }` — sjednocené s Astro 7 (vyžaduje ≥22.12)
  a runtime `nodejs22.x`. Bez pinu hrozí build na neznámém Node → invalid runtime.
- Env proměnné (SMTP) nastavit ve Vercel dashboardu (Project Settings → Environment Variables).
- `.vercel/` je v `.gitignore` — build output se necommituje (Vercel si ho staví sám).

**Self-host (Coolify / Docker / PM2):** aktuálně NEpodporováno — vyžadovalo by návrat
`@astrojs/node` adaptéru (viz poznámka ve Stacku). `nginx.conf` v rootu je z té doby.
