# Handover Document — Kronteq Web

*Datum: 2026-04-14 | Stav: content MVP kompletní, build čistý*

---

## Co bylo vytvořeno

### Technologie a konfigurace

| Soubor | Změna |
|---|---|
| `astro.config.mjs` | Přidána `@astrojs/mdx` integrace (nutná pro content collections) |
| `src/content/config.ts` | Nová content collection `kb` s Zod schématem |
| `package.json` | `@astrojs/mdx@^3.1.9` přidáno jako závislost |
| `src/components/layout/Header.astro` | Navigace rozšířena o 3 nové položky (Služby, Produkty, Technologie, Znalostní báze) |

### Datové soubory (`src/data/`)

| Soubor | Obsah |
|---|---|
| `services.ts` | 6 služeb s plným CS+EN obsahem (slug, ikony, popis, benefity, CTA) |
| `faq.ts` | 17 FAQ položek ve 4 kategoriích (CS+EN) |
| `technologies.ts` | 4 technologická témata s metadaty (CS+EN) |
| `products.ts` | Rozšířeno o 3 nové kategorie produktů |
| `src/i18n/strings.ts` | +30 nových i18n klíčů pro nové sekce |

### Stránky

#### České stránky
| URL | Soubor | Popis |
|---|---|---|
| `/sluzby/` | `src/pages/sluzby/index.astro` | Přehled 6 služeb + schema.org ServiceCatalog |
| `/produkty/` | `src/pages/produkty/index.astro` | Přehled produktových kategorií |
| `/technologie/` | `src/pages/technologie/index.astro` | Přehled 4 tech článků |
| `/technologie/[slug]/` | `src/pages/technologie/[slug].astro` | 4 tech články (inline obsah) |
| `/faq/` | `src/pages/faq/index.astro` | 17 FAQ s JS category filter + schema.org FAQPage |
| `/znalostni-baze/` | `src/pages/znalostni-baze/index.astro` | KB index z MDX collection |
| `/znalostni-baze/[slug]/` | `src/pages/znalostni-baze/[slug].astro` | 10 KB článků z MDX |

#### Anglické stránky (`/en/`)
| URL | Soubor |
|---|---|
| `/en/services/` | `src/pages/en/services/index.astro` |
| `/en/products/` | `src/pages/en/products/index.astro` |
| `/en/technology/` | `src/pages/en/technology/index.astro` |
| `/en/technology/[slug]/` | `src/pages/en/technology/[slug].astro` |
| `/en/faq/` | `src/pages/en/faq/index.astro` |
| `/en/knowledge-base/` | `src/pages/en/knowledge-base/index.astro` |
| `/en/knowledge-base/[slug]/` | `src/pages/en/knowledge-base/[slug].astro` |

### Knowledge Base (MDX)

**10 českých článků** v `src/content/kb/cs/`:
- `nahradil-lepeni-svareni.mdx` — Nahradí lepení svařování?
- `anatomie-spoje-adheze-koheeze.mdx` — Anatomie lepeného spoje
- `priprava-povrchu-krok-za-krokem.mdx` — Příprava povrchu
- `jak-vybrat-lepidlo-pur-epoxid-mma.mdx` — Jak vybrat lepidlo
- `hybridni-spoje-weld-bonding-rivet-bonding.mdx` — Hybridní spoje
- `limity-lepenych-spoju.mdx` — Limity lepených spojů
- `lepeni-v-automotive.mdx` — Lepení v automotive
- `lepeni-v-letectvi.mdx` — Lepení v letectví
- `lepeni-v-elektronice.mdx` — Lepení v elektronice
- `strukturalni-zaskleni-stavebnictvi.mdx` — Strukturální zasklení

**10 anglických článků** v `src/content/kb/en/` (mirror překlady výše).

### SVG Ilustrace (`src/components/illustrations/`)

| Komponenta | Popis |
|---|---|
| `StressDistribution.astro` | Distribuce napětí: šroub vs. lepidlo |
| `AdhesionCohesion.astro` | Adheze a koheeze lepeného spoje |
| `AdhesiveSpectrum.astro` | Scatter diagram: pevnost × pružnost |
| `SurfacePrep3Steps.astro` | 3 kroky přípravy povrchu |
| `HybridJoint.astro` | Weld-bonding hybridní spoj |
| `WeldVsGlue.astro` | Srovnání svařování vs. lepení |
| `FourDrivers.astro` | 4 důvody průmyslu pro lepení |

### Ostatní soubory

| Soubor | Popis |
|---|---|
| `CONTENT-PLAN.md` | Kompletní plán obsahu s task mapou |
| `QUESTIONS.md` | Otevřené otázky pro klienta (7 bodů) |
| `IMAGE-PROMPTS.md` | 18 prompts pro chybějící fotografie |
| `research/competitors-notes.md` | Konkurenční analýza (CZ + EN trh) |

---

## Build

```bash
cd /data/bot/kronteq
npm run build
# → 49 pages built, 0 errors, 0 warnings
```

### Věci k případnému řešení

Toto jsou _vědomé kompromisy_ tohoto MVP — věci, které nechybí ale mohou být vylepšeny:

1. **Fotografie**: `public/assets/` obsahuje pouze `logo-monogram.png`. Všechny hero images a product images jsou placeholder — viz `IMAGE-PROMPTS.md` pro seznam toho, co objednat.

2. **Industry detail sub-pages**: `/odvtvi/[slug]/` a `/en/industries/[slug]/` zatím neexistují. Index stránky jsou hotové, detail stránky nebyly součástí tohoto scope.

3. **Service detail sub-pages**: `/sluzby/[slug]/` — index stránka zobrazuje vše inline. Dedikované URL pro každou službu nebyly vytvořeny.

4. **Homepage enrichment**: Domovská stránka nebyla v tomto scope upravována — zde je seznam dalšího:
   - Sekce "Weld vs. Bond comparison table"
   - "90% všech průmyslových materiálů lze lepit" banner
   - Technology teaser sekce
   - KB preview (poslední články)

5. **Case studies**: Chybí. Zákazník musí dodat anonymizované reference. Viz `QUESTIONS.md` bod 6.

6. **Git**: Změny zatím nejsou commitnuty. Spustit konvenční commity:
   ```bash
   git add src/content/config.ts astro.config.mjs package.json package-lock.json
   git commit -m "feat: add @astrojs/mdx integration and kb content collection schema"
   
   git add src/content/kb/ 
   git commit -m "feat(kb): add 20 MDX knowledge base articles (10 CS + 10 EN)"
   
   git add src/data/ src/i18n/
   git commit -m "feat(data): add services, faq, technologies data + i18n strings"
   
   git add src/pages/
   git commit -m "feat(pages): add sluzby, produkty, technologie, faq, znalostni-baze (CS+EN)"
   
   git add src/components/
   git commit -m "feat(components): add 7 SVG illustration components + update header nav"
   
   git add IMAGE-PROMPTS.md research/ CONTENT-PLAN.md QUESTIONS.md HANDOVER.md
   git commit -m "docs: add image prompts, competitor research, content plan and handover"
   ```

7. **Sitemap**: `sitemap.xml.ts` je přítomno — zkontrolovat zda generuje URLs pro nové stránky po deployi.

---

## Architektura — klíčové konvence

### i18n routing
- CS: `/cesta/` (bez prefixu, `prefixDefaultLocale: false`)
- EN: `/en/path/`

### Data vs Content Collections
- **TypeScript data files** (`src/data/*.ts`): strukturovaná data s pevnými poli (services, products, faq, technologies)
- **Content Collections** (`src/content/kb/`): dlouhé MDX články s frontmatter dle `config.ts` schema

### Slug sanitization
Content collection soubory v podsložkách (`cs/`, `en/`) generují `article.slug` s prefixem (`cs/nazev-clanku`). Všechna `.astro` routovací místa odstraňují prefix pomocí:
```ts
article.slug.replace(/^cs\//, '')  // nebo /^en\//
```

### MDX gotcha: JSX escaping
V MDX souborech nesmí být `<` bezprostředně před číslem (MDX parser to interpretuje jako JSX element). Použít `&lt;`:
- `<10 %` → `&lt;10 %`
- `<30 mN/m` → `&lt;30 mN/m`

---

## Kontakty projektu

- **Kristýna Ondráčková** — European Adhesive Engineer, author, face of brand
- Web: kronteq.com (zatím bez domény — Vercel/Coolify deploy dle volby klienta)
- Kód: `/data/bot/kronteq/` (local git, bez remote)
