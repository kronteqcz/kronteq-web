# Kronteq — nálezy fází 1, 2 a 4

Pozn.: kontaktní formulář CS (/api/contact, nodemailer→SMTP) lokálně netestovatelný — ověřit po nasazení na Vercel s SMTP env.

## P0
P0 | patička (46 stran) | Chybí § 435 NOZ údaje: firma, IČO, DIČ, sp. zn. (grep: 0 výskytů) | doplnit řádek do .footer-bottom, údaje od klienta | Footer.astro:69-76
P0 | celý web | Neexistuje stránka ochrany OÚ; formulář sbírá jméno/e-mail/telefon/firmu + API loguje IP → čl. 13 GDPR nesplněn | /ochrana-osobnich-udaju/ + /en/privacy/ + consent věta u formuláře | api/contact.ts:109, Footer.astro
P0 | /en/contact/ | EN formulář mrtvý: data-netlify (web běží na Vercelu), action /en/thank-you/ = 404, bez honeypotu/validace — poptávka se ztratí | převzít CS implementaci (/api/contact) + vytvořit /en/thank-you/ | en/contact/index.astro:26-54
P0 | /en/about/ vs /o-nas/ | Rozpor: EN „25+ years / 6 categories / 4+ industries" vs CS „5+ let / 9 kategorií" | sjednotit EN dle CS; OTÁZKA klientovi: kolik let praxe platí | en/about/index.astro:56-59
P0 | KB články mobil | Overflow +318px (jak-vybrat-lepidlo): 5sloupcová tabulka bez scroll-wrapperu roztáhne body; vzorec i limity-lepenych-spoju, nahradil-lepeni-svareni, priprava-povrchu + EN (+49px) | .kb-prose table{display:block;overflow-x:auto} | layout KB

## P1
P1 | /en/about/ | Viditelné „TODO: Fill in real figures from presentation" v produkčním HTML | smazat .facts-note | en/about/index.astro:61
P1 | 46 stran | hreflang natvrdo homepage pro všechny podstránky | generovat z aktuální cesty | BaseLayout.astro:50-52
P1 | 46 stran | Přepínač jazyka vede vždy na homepage (statický string) | počítat z aktuální URL | i18n/strings.ts:8,140; Header.astro:60,98
P1 | sitemap.xml | Jen 10 ze 46 URL (chybí sluzby, produkty, technologie, KB 20 článků, EN) | generovat z getCollection + výčtu | sitemap.xml.ts:6-17
P1 | /faq/, /en/faq/ | Osiřelé — 0 odkazů z webu (navFaq string existuje, v navItems chybí) | přidat do nav + footer + sitemap | Header.astro:12-20, Footer.astro:14-22
P1 | /reseni/, /en/solutions/ | Osiřelé, duplikují /produkty/+/sluzby/; „backward compatibility" u nikdy nespuštěného webu | odstranit nebo 301 | reseni/index.astro, sitemap.xml.ts:8,13
P1 | 46 stran | og:image /og-default.png neexistuje → 404 při sdílení | vyrobit 1200×630 | BaseLayout.astro:26
P1 | public/llms.txt | Soubor z cizího projektu — popisuje blog První pozice! | přepsat na Kronteq nebo smazat | public/llms.txt:3
P1 | /odvtvi/ | Překlep slugu site-wide (správně /odvetvi/) — teď oprava zadarmo | přejmenovat dir + odkazy + sitemap | pages/odvtvi/, Header.astro:17
P1 | /o-nas/ | Timeline 2019/2021/2022/2024 nepotvrzená klientem (z konkurenčního výzkumu) | OTÁZKA klientovi; do potvrzení skrýt | o-nas/index.astro:8-13
P1 | homepage+EN about | Plurál „European Adhesive Engineers" vs jinde jedna specialistka | OTÁZKA: kolik osob má EAE; pak sjednotit | strings.ts:18,150; en/about:11
P1 | hlavička+kontakt | Žádný tel: v hlavičce; na /kontakt/ telefon až pod formulářem (~2 obrazovky; urgentní zákazník 15-25 s) | tel ikona v hlavičce + „Přímý kontakt" NAD formulář | Header, kontakt/index.astro
P1 | důvěra | Nulové reference/case studies/loga (slabina #1 vlastní analýzy; Sika/Gluetec/Araldite mají) | 2–3 anonymizované případovky | nová sekce/stránka
P2 | /kontakt/ | HTML komentář s návodem Formspree/n8n („XXX") renderovaný do HTML | smazat komentář ř. 27-33 | kontakt/index.astro:27-33
P2 | KB priprava-povrchu:88 | „todo" = false positive („metodou"); ale překlep „reoxyidace" → „reoxidace" | oprava | kb/cs/priprava-povrchu-krok-za-krokem.mdx:88
P2 | KB lepeni-v-automotive | CS chybí věta o gap fillers (EN má) | doplnit „Měkké silikonové nebo PUR pěny, tepelná vodivost 1–5 W/(m·K)." | kb/cs/lepeni-v-automotive.mdx:74
P2 | /produkty/ | Slug „anaerobi-lepidla" → „anaerobni-lepidla"; překlep „sestaveení" → „sestavení" | oprava | data/products.ts:61
P2 | KB | Slug „nahradil-lepeni-svareni" vs titulek „Nahradí…?" | přejmenovat na nahradi-… | kb/cs/nahradil-lepeni-svareni.mdx
P2 | /en/contact/ | Placeholder telefonu „+44 000 000 0000" | „+420 000 000 000" | en/contact/index.astro:43
P2 | /en/* 404 | 404 jen česky i pro EN URL | detekce /en/ prefixu + EN texty | 404.astro:6-8
P2 | JSON-LD | Organization bez PSČ a legalName | doplnit postalCode 130 00 + po dodání legalName/vatID | BaseLayout.astro:86-91
P2 | /o-nas/:75 | EWF špatně rozepsáno (= European Federation for Welding, Joining and Cutting) | přeformulovat | o-nas/index.astro:75
P2 | /dekujeme/ | bez noindex | přidat robots noindex | dekujeme/index.astro
P2 | / a /en/ | Hero „6 kategorií" vs realita 9 | sjednotit na 9 | strings.ts
P2 | /kontakt/ | Chybí „co připravit" (výkres/vzorky) + kroky procesu + provozní doba u telefonu | blok vedle formuláře + „Po–Pá 8:00–17:00" | kontakt/index.astro
P2 | /sluzby/ | Materiálové dvojice (hliník–kompozit) nikde explicitně | příklady do „Výběr lepicí technologie" | data/services.ts
P2 | produktová data (F4) | 0 PDF/TDS ke stažení (konkurence standard) | 1 PDF lead magnet z KB rozhodovací matice | public/
P2 | research | competitors-notes.md odkazuje na mrtvý chemikol.cz | aktualizovat + datum revize | research/

## Fáze 4 verdikt
Konkurence ověřena: Gluetec (bez CZ, mělčí KB), Permabond (bez CZ, žádné case studies), Sika ČR (e-shop+reference+akademie, ale lepení utopené ve stavební chemii). Chemikol zanikl, Indes za Cloudflare, Würth blokuje. Měřitelně první: hloubka KB (10+10 článků), jmenovaná EAE certifikace, plná CZ/EN dvojjazyčnost, poradenský positioning. JEDINÁ změna: 2–3 case studies (i anonymizované).

## Klíčové otázky pro klienta
1. Obchodní firma + IČO + DIČ + spisová značka.
2. Roky praxe (5 vs 25) a milníky historie 2019–2024.
3. Počet EAE certifikovaných osob.
4. (trvající z QUESTIONS.md: case studies, doména, fotky)

## Fáze 2 verdikt zákazníka
Obsahově imponuje (jazyk inženýra, EAE, KB) — ale urgentní volající hledá telefon dlouho, EN poptávka končí na 404, KB článek se na mobilu rozpadá, bez IČO/referencí neprojde interním schválením dodavatele. Po opravě P0 + právního minima důvěryhodný web.


> **Upřesnění (4. 8. 2026):** § 435 NOZ vyžaduje na webu jméno a sídlo podnikatele. Údaj o zápisu v rejstříku včetně oddílu a vložky (spisová značka) zákon váže na **obchodní listiny** — faktury, smlouvy, objednávky — nikoli výslovně na web. Doporučení „doplnit spisovou značku do patičky" bylo v původním znění reportu přeceněné; do patičky patří jméno, sídlo a IČO.
