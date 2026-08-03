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

### Q8 — Právní údaje firmy (§ 435 NOZ) — BLOKUJE SPUŠTĚNÍ
**Otázka:** Přesná obchodní firma, IČO, DIČ a spisová značka (soud + oddíl/vložka), případně údaj o zápisu v živnostenském rejstříku.
**Stav:** Patička teď obsahuje jen název, adresu a odkaz na ochranu osobních údajů. IČO/DIČ/sp. zn. chybí — na webu podnikatele jsou povinné.
**Dopad:** Doplnit do `Footer.astro` (`.footer-legal-line`) a do stránky `/ochrana-osobnich-udaju/` + `/en/privacy/` (identifikace správce). Bez toho web neprojde interním schválením dodavatele u korporátního zákazníka.

### Q9 — Roky praxe: 5+ nebo 25+?
**Otázka:** Kolik let praxe uvádět? CS verze měla „5+ let", EN „25+ years" — přímý rozpor.
**Aktuální řešení:** Sjednoceno na **5+ let** (hodnota z CS verze) v `Hero.astro`, `/o-nas/` i `/en/about/`.
**Dopad:** Pokud platí 25+ (osobní praxe Kristýny vs. stáří firmy), je třeba rozlišit formulaci — např. „25 let praxe v oboru, firma od roku 20XX".

### Q10 — Timeline historie firmy (2019 / 2021 / 2022 / 2024)
**Otázka:** Jsou milníky v timeline na `/o-nas/` reálné? Pocházejí z konkurenčního výzkumu, ne od klienta.
**Stav:** Timeline zatím na webu **ponechána** (nebyla součástí opravné dávky).
**Dopad:** Buď potvrdit skutečná data, nebo blok před spuštěním odstranit — nepotvrzená historie firmy je reputační riziko.

### Q11 — Kolik osob má certifikaci EAE?
**Otázka:** Homepage a EN texty používají plurál „European Adhesive Engineers", zbytek webu mluví o jedné specialistce.
**Dopad:** Pokud je certifikovaná jen Kristýna, sjednotit na singulár (`strings.ts` → `heroTagline`, `/en/about/`).

### Q12 — Provozní doba telefonní linky
**Otázka:** Lze u telefonu v hlavičce a na `/kontakt/` uvést „Po–Pá 8:00–17:00"?
**Stav:** Údaj **záměrně neuveden** — nebyl ověřen (souvisí s Q4). Telefon je nově klikatelný v hlavičce i nad formulářem, ale bez provozní doby.
**Dopad:** Po potvrzení doplnit k telefonu na `/kontakt/` a `/en/contact/`.

### Q13 — Case studies / reference (trvá, viz Q6)
**Stav:** Jediná měřitelná mezera proti konkurenci. Stačí 2–3 anonymizované případovky („výrobce X, spoj hliník–kompozit, úspora Y %").

### Q14 — Fotografie a doména (trvá)
**Stav:** Web běží na placeholderech (SVG ilustrace, žádné fotografie provozu ani portrét). Doména kronteq.com zatím nenasazena.

---

## Vyřešené otázky

- **i18n mechanismus** — `getLang('cs'|'en')` + Astro `i18n.routing.prefixDefaultLocale: false`; CS = bez prefixu, EN = `/en/`
- **Kontaktní údaje** — `src/data/contact.ts` vyplněno
- **Content collections** — přidávám pro KB články; ostatní zůstávají v data files
