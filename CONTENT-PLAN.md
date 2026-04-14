# CONTENT-PLAN — Kronteq

> Auditováno: 2026-04-14. Veškerý obsah CZ + EN.

## Architektura

| Typ obsahu | Kde leží | Mechanismus |
|---|---|---|
| UI popisky, nadpisy | `src/i18n/strings.ts` | `getLang('cs\|en')` |
| Strukturovaná data (produkty, služby, odvětví, FAQ) | `src/data/*.ts` | import v `.astro` |
| Dlouhé články (znalostní báze) | `src/content/kb/cs/*.mdx` + `src/content/kb/en/*.mdx` | content collections |
| Stránky | `src/pages/**/*.astro` (CS bez prefixu, EN pod `/en/`) | statické routy |
| SVG ilustrace | `src/components/illustrations/*.astro` | komponenty |

---

## Stav existujícího obsahu

| Stránka | CS | EN | Poznámka |
|---|---|---|---|
| `/` | ✅ existe | ✅ existe | Chybí sekce: svař vs. lepení, 90% banner, KB preview |
| `/reseni/` | ✅ existe | ✅ existe | Zobrazuje products.ts — 6 kategorií, rozšířit na 9 |
| `/odvtvi/` | ✅ existe | ✅ existe | Přehledová stránka; chybí detail sub-pages |
| `/o-nas/` | ✅ existe | ✅ existe | Obsah OK, doplnit hodnoty a přístup |
| `/kontakt/` | ✅ existe | ✅ existe | Kontakty OK (contact.ts vyplněno) |

---

## Task list — co vyrobit

### T1 — Rozšíření datových souborů

- [ ] `src/data/products.ts` — rozšířit z 6 na 9 kategorií (přidat: lepicí pásky, primery/aktivátory, čističe, aplikační systémy)
- [ ] `src/data/services.ts` — NEW: 6 služeb poradce
- [ ] `src/data/technologies.ts` — NEW: 4 technologické přehledy (metadata + perex; obsah bude v MDX)
- [ ] `src/data/faq.ts` — NEW: 15+ otázek ve 4 kategoriích
- [ ] `src/data/industries.ts` — rozšířit stávající o detailní obsah (sub-page content)

### T2 — Content collections pro znalostní bázi

- [ ] Aktualizovat `src/content/config.ts` — přidat schema pro `kb` collection
- [ ] 10 CS článků v `src/content/kb/cs/*.mdx`
- [ ] 10 EN článků v `src/content/kb/en/*.mdx`

**Slugy:**
| # | CS slug | EN slug |
|---|---|---|
| 1 | `nahradí-lepení-sváření` | `will-adhesive-bonding-replace-welding` |
| 2 | `anatomie-spoje-adheze-koheeze` | `joint-anatomy-adhesion-cohesion` |
| 3 | `priprava-povrchu-krok-za-krokem` | `surface-preparation-step-by-step` |
| 4 | `jak-vybrat-lepidlo-pur-epoxid-mma` | `how-to-choose-adhesive-pur-epoxy-mma` |
| 5 | `hybridni-spoje-weld-bonding-rivet-bonding` | `hybrid-joints-weld-bonding-rivet-bonding` |
| 6 | `limity-lepenych-spoju` | `limits-of-adhesive-bonds` |
| 7 | `lepeni-v-automotive` | `adhesive-bonding-in-automotive` |
| 8 | `lepeni-v-letectvi` | `adhesive-bonding-in-aerospace` |
| 9 | `lepeni-v-elektronice` | `adhesive-bonding-in-electronics` |
| 10 | `strukturalni-zasklení-stavebnictvi` | `structural-glazing-construction` |

### T3 — Nové stránky

- [ ] `/sluzby/` + `/en/services/` — Přehled 6 služeb
- [ ] `/produkty/` + `/en/products/` — 9 produktových kategorií (rozšířeno)
- [ ] `/technologie/` + `/en/technology/` — Přehledová stránka
- [ ] `/technologie/[slug].astro` + `/en/technology/[slug].astro` — 4 technologické stránky
- [ ] `/znalostni-baze/` + `/en/knowledge-base/` — Přehled KB
- [ ] `/znalostni-baze/[slug].astro` + `/en/knowledge-base/[slug].astro` — 10 článků
- [ ] `/faq/` + `/en/faq/`
- [ ] `/odvtvi/[slug].astro` + `/en/industries/[slug].astro` — detail 4 odvětví

### T4 — Rozšíření navigace + strings

- [ ] `src/i18n/strings.ts` — nové klíče pro všechny nové stránky
- [ ] `src/components/layout/Header.astro` — přidat Služby, Produkty, Technologie, Znalostní báze do nav

### T5 — SVG ilustrace

- [ ] `src/components/illustrations/StressDistribution.astro`
- [ ] `src/components/illustrations/AdhesionCohesion.astro`
- [ ] `src/components/illustrations/AdhesiveSpectrum.astro`
- [ ] `src/components/illustrations/SurfacePrep3Steps.astro`
- [ ] `src/components/illustrations/HybridJoint.astro`
- [ ] `src/components/illustrations/WeldVsGlue.astro`
- [ ] `src/components/illustrations/FourDrivers.astro`

### T6 — Homepage rozšíření

- [ ] Sekce „Svařování vs. lepení" (tabulka) — přidat do index.astro
- [ ] Banner „90 % selhání = příprava povrchu"
- [ ] Sekce Technologie teaser
- [ ] Preview 3 KB článků

### T7 — IMAGE-PROMPTS.md + SEO

- [ ] `IMAGE-PROMPTS.md` — 15-20 promptů
- [ ] Schema.org pro nové stránky
- [ ] Meta title/description pro všechny nové stránky

### T8 — Build + dokumentace

- [ ] `npm run build` bez chyb
- [ ] Aktualizovat `README.md` sekci Content model
- [ ] `HANDOVER.md` checklist

---

## Mapování: stránka → primární keyword (CZ/EN)

| Stránka | CZ keyword | EN keyword |
|---|---|---|
| `/sluzby/` | průmyslová lepidla poradenství | industrial adhesive consulting |
| `/produkty/pur-lepidla/` | PUR lepidlo konstrukční | PUR adhesive structural |
| `/produkty/epoxidova-lepidla/` | epoxidové lepidlo průmysl | epoxy adhesive industrial |
| `/produkty/mma-lepidla/` | MMA akrylátové lepidlo | MMA acrylate adhesive |
| `/technologie/lepeni-prehled/` | konstrukční lepení průmysl | structural bonding industry |
| `/technologie/priprava-povrchu/` | příprava povrchu pro lepení | surface preparation adhesive bonding |
| `/technologie/hybridni-spoje/` | hybridní spoje weld-bonding | hybrid joints weld-bonding |
| `/technologie/typy-lepidel/` | typy lepidel výběr | types of adhesives selection |
| `/znalostni-baze/nahradí-lepení-sváření/` | lepení místo svařování | adhesive bonding vs welding |
| `/znalostni-baze/priprava-povrchu-krok-za-krokem/` | příprava povrchu lepení krok | surface preparation bonding step |
| `/faq/` | FAQ průmyslová lepidla | FAQ industrial adhesives |
| `/odvtvi/automobilovy-prumysl/` | lepení karoserie automotive | automotive bonding car body |

---

## Otázky → viz QUESTIONS.md
