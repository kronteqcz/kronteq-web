# Kronteq — konsolidované nálezy předávací kontroly

Zdroje: fáze 0 (automat), fáze 1 (obsah/právo), fáze 2 (pohled zákazníka),
fáze 3 (UX + copy), fáze 4 (konkurence).
Datum opravné fáze: 3. 8. 2026. Build po opravách: 50 stran + 404, 0 chyb.

Legenda stavu:
  OPRAVENO   — vyřešeno v této dávce, ověřeno v buildu
  KLIENT     — čeká na podklad od klienta (viz QUESTIONS.md)
  PONECHÁNO  — vědomě nezměněno (mimo zadání / neověřená data)

---

## P0 — blokátory spuštění

ID     Oblast                Nález                                                          Stav        Řešení / soubor
-----  --------------------  -------------------------------------------------------------  ----------  ----------------------------------------------------
P0-1   /en/contact/          EN formulář mrtvý: data-netlify na Vercelu, action na 404,     OPRAVENO    action /api/contact, honeypot, pole lang=en,
                             bez honeypotu a validace → poptávka se ztratí                              klientská validace, JS handler, EN hlášky v API
P0-2   /en/thank-you/        Cíl EN formuláře neexistoval (404)                             OPRAVENO    nová stránka, mirror /dekujeme/, noindex
P0-3   celý web              Chybí stránka ochrany OÚ; formulář sbírá jméno, e-mail,        OPRAVENO    /ochrana-osobnich-udaju/ + /en/privacy/, odkaz
                             telefon, firmu, API loguje IP → čl. 13 GDPR nesplněn                       v patičce obou jazyků, consent věta u formulářů
P0-4   patička (50 stran)    Chybí § 435 NOZ údaje: firma, IČO, DIČ, spisová značka         ČÁSTEČNĚ    doplněn název + plná adresa + odkaz na GDPR;
                                                                                            + KLIENT    IČO/DIČ/sp. zn. čeká na klienta (Q8)
P0-5   /en/about/            Viditelné „TODO: Fill in real figures from presentation"       OPRAVENO    smazáno, tabulka čísel sjednocena dle CS
P0-6   /en/about/ × /o-nas/  Rozpor 25+ let / 6 kategorií / 4+ odvětví vs. CS 5+ / 9        OPRAVENO    sjednoceno na CS hodnoty (5+ let, 9 kategorií,
                                                                                            + KLIENT    EAE, 4 odvětví); rozpor 5 vs 25 → otázka Q9
P0-7   /faq/ × /o-nas/       Protimluv: FAQ „EAE vydává FEICA" vs o-nas „EWF"               OPRAVENO    obojí na EWF (CS i EN), /o-nas/ rozepsáno správně
P0-8   Hero (CS+EN)          „6 kategorií" vs. reálných 9 produktových kategorií            OPRAVENO    Hero.astro → 9
P0-9   homepage JSON-LD      E-mail kristyna@kronteq.com neexistuje                         OPRAVENO    importováno z data/contact.ts (ondrackova@)
P0-10  KB články mobil       Tabulky bez scroll-wrapperu: overflow +318 px (CS) / +49 px    OPRAVENO    .kb-prose table → display:block; overflow-x:auto
                             (EN) při šířce 375 px                                                      v CS i EN [slug].astro
P0-11  /odvtvi/              Překlep slugu site-wide (má být /odvetvi/), v publikované      OPRAVENO    přejmenován adresář, opraveno 6 míst odkazů
                             sitemap                                                                    + canonical + JSON-LD; 301 ve vercel.json

## P1 — vysoká priorita

ID     Oblast                Nález                                                          Stav        Řešení / soubor
-----  --------------------  -------------------------------------------------------------  ----------  ----------------------------------------------------
P1-1   50 stran              hreflang natvrdo na homepage pro všechny podstránky            OPRAVENO    src/i18n/routes.ts (mapa CS↔EN) + altPath prop;
                                                                                                        KB páruje přes translationKey
P1-2   50 stran              Přepínač jazyka vedl vždy na homepage                          OPRAVENO    Header dostává switchLangHref z BaseLayout,
                                                                                                        fallback homepage; /sluzby/ → /en/services/
P1-3   sitemap.xml           Jen 10 z 49 URL, navíc s překlepem /odvtvi/                    OPRAVENO    generováno z getCollection + výčtu → 48 URL
P1-4   /faq/, /en/faq/       Osiřelé — 0 odkazů z webu                                      OPRAVENO    přidáno do navItems Header i Footer + sitemap
P1-5   /reseni/,             Osiřelé duplikáty /produkty/ + /sluzby/                        OPRAVENO    stránky smazány, 301 na /produkty/ resp.
       /en/solutions/                                                                                   /en/products/ ve vercel.json, mimo sitemap
P1-6   50 stran              og:image /og-default.png neexistoval → 404 při sdílení         OPRAVENO    vygenerováno 1200×630 (sharp, barvy DS)
P1-7   public/llms.txt       Soubor z cizího projektu — popisoval blog První pozice         OPRAVENO    přepsáno na Kronteq (sekce, KB, EN, kontakt)
P1-8   KB slug               anatomie-spoje-adheze-koheeze (překlep)                        OPRAVENO    → …-koheze, 301 redirect, routing ověřen
P1-9   KB slug               nahradil-lepeni-svareni × titulek „Nahradí…?"                  OPRAVENO    → nahradi-lepeni-svareni, 301 redirect
P1-10  data/products.ts      Slug anaerobi-lepidla                                          OPRAVENO    → anaerobni-lepidla (+ CS i EN detailní data)
P1-11  20 článků             Breadcrumb a meta rgba(255,255,255,0.4) = 3,76:1               OPRAVENO    → var(--text-dark-muted) ve 4 souborech
P1-12  KB články             .category-badge #7C3AED na #1E103F = 3,06:1                    OPRAVENO    → var(--accent-light) #A78BFA
P1-13  /sluzby/, /odvetvi/   .service-num 1,59:1, .industry-num 1,46:1 (dekorativní čísla)  OPRAVENO    aria-hidden="true" (CS i EN)
P1-14  články                Breadcrumb odkazy bez podtržení, 1,91:1 vs. okolní text        OPRAVENO    underline + offset, světlejší barva
P1-15  hlavička + kontakt    Žádný tel: odkaz v hlavičce; telefon až pod formulářem         OPRAVENO    telefon v hlavičce (desktop text, mobil ikona
                                                                                                        44×44) + blok „Přímý kontakt" nad formulářem
P1-16  telefon               Provozní doba u telefonu neověřena                             KLIENT      záměrně neuvedeno, otázka Q12
P1-17  meta descriptions     33 stran mimo pásmo 120–160 znaků                              OPRAVENO    přepsáno 26 metas (CS i EN); po opravě 0 mimo
P1-18  překlepy CS           lepenéhospoje, Kataloget, sestaveení, garanc, many, immerzi,   OPRAVENO    26 oprav v datech, MDX a šablonách
                             rárazové, universálnost, znečistění, residua, reoxyidace,
                             odmaštit, s statickým, čistící, Letecká průmysl
P1-19  terminologie          „svár" (50×) → „svar"; „kupce" → „nákupčí";                    OPRAVENO    globální náhrada, svářet/svařování ponecháno
                             „zálitkování" → „zalévání (potting)"
P1-20  věcné chyby           „Vyšší únava — nepropaguje trhliny" (opačný význam);           OPRAVENO    → únavová životnost; teplota svaru
                             „ruší odvod práce"; teplota svaru 6 000 °C; definice frettingu             → 1 500–2 500 °C; fretting = mikropohyb
                                                                                                        stykových ploch (CS i EN)
P1-21  uvozovky              Smíšené "…" a „…" v českých textech                            OPRAVENO    sjednoceno na „…" (6 míst)
P1-22  EN copy               „within 24 business hours" (nesmysl)                           OPRAVENO    → „within 24 hours on business days"
P1-23  homepage              H2 „Služby, které jdou za pouhý prodej" (kalk)                 OPRAVENO    → „Víc než prodej lepidel"
P1-24  KB automotive         CS chyběla věta o gap fillers, kterou EN má                    OPRAVENO    doplněno (silikonové/PUR pěny, 1–5 W/(m·K))
P1-25  /o-nas/ timeline      Milníky 2019–2024 nepotvrzené klientem                         PONECHÁNO   mimo zadání dávky; otázka Q10
                                                                                            + KLIENT
P1-26  EAE plurál            „European Adhesive Engineers" vs. jedna specialistka           KLIENT      otázka Q11
P1-27  důvěra                Nulové reference / case studies / loga                         KLIENT      otázka Q13 — jediná měřitelná mezera
P1-28  typografie            0 nedělitelných mezer v celém webu                             PONECHÁNO   systémová změna (remark plugin), mimo dávku

## P2 — levné opravy a odložené

ID     Oblast                Nález                                                          Stav        Řešení / soubor
-----  --------------------  -------------------------------------------------------------  ----------  ----------------------------------------------------
P2-1   /kontakt/             HTML komentář s návodem Formspree/n8n renderovaný do HTML      OPRAVENO    smazán (EN verze komentář neměla)
P2-2   /en/contact/          Placeholder telefonu „+44 000 000 0000"                        OPRAVENO    → „+420 000 000 000"
P2-3   data/contact.ts       Telefon „+420 608 55 88 33" × jinde „608 558 833"              OPRAVENO    sjednoceno na „+420 608 558 833"
P2-4   404                   Jen česky i pro /en/ URL                                       OPRAVENO    bilingvní blok + noindex
P2-5   JSON-LD               Organization bez PSČ                                           OPRAVENO    postalCode 130 00 (legalName/vatID čeká na Q8)
P2-6   /dekujeme/            Bez noindex                                                    OPRAVENO    noindex prop v BaseLayout (i /en/thank-you/, 404)
P2-7   ProductsGrid          „Všechna řešení" vede na /produkty/ (nav „Produkty")           OPRAVENO    → „Všechny produkty" / „View all products"
P2-8   Hero CTA              btn-primary na „Naše služby", poptávka sekundární               OPRAVENO    prohozeno — primary = poptávka, se šipkou
P2-9   7 SVG ilustrací       font-family Inter / Space Grotesk (fonty se nenačítají)        OPRAVENO    → 'DM Sans Variable'
P2-10  patička               „Built with Astro" v české verzi                               OPRAVENO    → „Postaveno na Astro" (EN ponecháno) + underline
P2-11  reveal animace        Print a screenshoty vycházejí prázdné                          OPRAVENO    @media print override v BaseLayout
P2-12  mikro-labely          12px popisky pod hranicí čitelnosti                            OPRAVENO    0,75rem → 0,8125rem (sluzby, o-nas ×2)
P2-13  mobil                 Klikací plochy 20–39 px (patička, lang-switch)                 OPRAVENO    padding ve Footer + Header, tel ikona 44×44
P2-14  package.json          Mrtvé závislosti @fontsource Inter + Space Grotesk             PONECHÁNO   jen zmíněno — odebrání vyžaduje reinstall
P2-15  BlogLayout.astro      490 řádků mrtvého kódu s cizím brandingem (blog.prvni-pozice)  PONECHÁNO   nepoužívaný, k smazání samostatným commitem
P2-16  header                Hide-on-scroll chování                                         PONECHÁNO   dle zadání ponecháno
P2-17  /kontakt/             Chybí blok „co připravit" (výkres, vzorky) + kroky procesu     ODLOŽENO    obsahové rozšíření, ne oprava
P2-18  produktová data       0 PDF / TDS ke stažení                                         ODLOŽENO    lead magnet z KB rozhodovací matice
P2-19  IA                    Překryv /technologie/ × /znalostni-baze/                       ODLOŽENO    cross-linky s vysvětlením rozdílu
P2-20  research/             competitors-notes.md odkazuje na zaniklý chemikol.cz           ODLOŽENO    interní poznámky, ne produkční obsah

---

## Ověření po opravách (curl na http://127.0.0.1:4335)

  /odvetvi/                                      200
  /faq/, /en/faq/                                200  (+ 3× odkaz v HTML homepage)
  /en/thank-you/                                 200  (noindex)
  /ochrana-osobnich-udaju/, /en/privacy/         200  (odkaz v patičce obou jazyků)
  /znalostni-baze/anatomie-spoje-adheze-koheze/  200
  /znalostni-baze/nahradi-lepeni-svareni/        200
  /reseni/, /en/solutions/, /odvtvi/             404  (301 řeší vercel.json v produkci)
  sitemap.xml                                    48 URL
  hreflang /sluzby/                              → /en/services/ (i přepínač jazyka)
  hreflang KB článku                             → EN dvojče přes translationKey
  og-default.png                                 200, 1200×630
  meta descriptions mimo 120–160                 0 (z 33)
  zbytky TODO / XXX / Formspree / data-netlify   0


> **Upřesnění (4. 8. 2026):** § 435 NOZ vyžaduje na webu jméno a sídlo podnikatele. Údaj o zápisu v rejstříku včetně oddílu a vložky (spisová značka) zákon váže na **obchodní listiny** — faktury, smlouvy, objednávky — nikoli výslovně na web. Doporučení „doplnit spisovou značku do patičky" bylo v původním znění reportu přeceněné; do patičky patří jméno, sídlo a IČO.
