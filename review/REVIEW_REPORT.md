# Kronteq — zpráva z předávací kontroly webu

Datum: 3. srpna 2026
Rozsah: celý web kronteq.com (49 stran před opravou, 50 po opravě), česká i anglická verze
Stav nasazení: opraveno lokálně, ověřeno na http://127.0.0.1:4335, **NEnasazeno** (čeká na pokyn k pushi)

---

## Co se kontrolovalo

Kontrola proběhla v pěti fázích a záměrně z různých úhlů, aby se nálezy křížově ověřily:

- **Fáze 0 — automatická**: každá stránka projeta prohlížečem, měřeny délky meta popisků,
  hledány zbytky vývojářských poznámek, testován vodorovný overflow na 375 px a spuštěn
  přístupnostní audit (axe).
- **Fáze 1 — obsah a právo**: úplnost povinných údajů, GDPR, faktická konzistence čísel
  a tvrzení napříč jazyky.
- **Fáze 2 — pohled zákazníka**: průchod webem očima průmyslového technika, který má
  poruchu ve výrobě a hledá pomoc; a očima nákupčího, který schvaluje nového dodavatele.
- **Fáze 3 — UX a copywriting**: navigace, kontrasty, klikací plochy, jazyková
  správnost, odborná terminologie.
- **Fáze 4 — konkurence**: srovnání s Gluetec, Permabond, Sika ČR a dalšími hráči
  na českém i evropském trhu.

Celkem 59 nálezů. Kompletní tabulka se stavem je v `review/FINDINGS.md`.

---

## Co bylo opraveno

**Blokátory spuštění (11 nálezů)**

Nejzávažnější byl **mrtvý anglický kontaktní formulář**. Odesílal data přes Netlify —
službu, kterou web nepoužívá — a mířil na stránku, která neexistovala. Každá zahraniční
poptávka se tedy beze stopy ztratila. Formulář nyní používá stejnou funkční implementaci
jako česká verze (ochrana proti robotům, validace, anglické chybové hlášky) a po odeslání
vede na novou stránku `/en/thank-you/`.

Druhým blokátorem byla **chybějící ochrana osobních údajů**. Formulář sbírá jméno, e-mail,
telefon i firmu a server si zaznamenává IP adresu — bez informační stránky to je v rozporu
s GDPR. Vznikly stránky `/ochrana-osobnich-udaju/` a `/en/privacy/`, odkaz je v patičce
obou jazykových verzí a pod oběma formuláři je souhlasná věta. Web nepoužívá žádné cookies
třetích stran ani měření návštěvnosti, takže cookie lišta není potřeba — a text to říká.

Dále byly odstraněny **rozpory mezi jazyky**: anglická verze uváděla 25+ let praxe,
6 produktových kategorií a 4+ odvětví, česká 5+ let a 9 kategorií. Sjednoceno na české
hodnoty. V anglické verzi byl navíc v produkčním HTML viditelný vývojářský vzkaz
„TODO: Fill in real figures from presentation".

Opraven byl i **protimluv o certifikaci EAE**: FAQ tvrdilo, že ji vydává FEICA, stránka
O nás že EWF. Správně je EWF (European Federation for Welding, Joining and Cutting) — což
je zároveň hlavní argument důvěryhodnosti celého webu, takže rozpor tam byl obzvlášť
nešťastný. A homepage měla ve strukturovaných datech pro Google e-mail, který neexistuje.

**Struktura a nalezitelnost (14 nálezů)**

Adresa sekce Odvětví měla překlep — `/odvtvi/` místo `/odvetvi/`. Byla už publikovaná
v sitemapě, takže oprava proběhla teď, dokud web není živý; pro jistotu je nastaveno
trvalé přesměrování. Stejně tak byly opraveny dva překlepy v adresách článků znalostní báze.

Sitemapa obsahovala jen 10 z 49 adres — chyběly služby, produkty, technologie a všech
20 článků. Nyní se generuje automaticky ze zdroje dat a obsahuje 48 adres.

Stránka FAQ byla úplně osiřelá: vedl na ni nulový odkaz z celého webu. Je nově v hlavním
menu i v patičce. Naopak stránky `/reseni/` a `/en/solutions/` byly osiřelé duplikáty
Produktů a Služeb — dva nezávislí auditoři doporučili je zrušit, což se stalo (s trvalým
přesměrováním).

Značky pro jazykové verze (hreflang) i přepínač jazyka mířily vždy na úvodní stránku.
Kdo si na anglickém článku přepnul jazyk, přišel o kontext. Nyní existuje mapa
odpovídajících si stránek a přepínač vede na skutečný protějšek; články se párují
podle překladového klíče.

**Použitelnost a přístupnost (11 nálezů)**

Urgentní volající neměl telefon kde vzít — v hlavičce žádný nebyl a na stránce Kontakt
byl až pod formulářem. Telefon je teď klikatelný v hlavičce (na mobilu jako ikona vedle
menu) a na stránce Kontakt je blok s přímými kontakty nad formulářem.

Články znalostní báze se na mobilu rozpadaly: široké tabulky roztahovaly celou stránku
(u jednoho článku o 318 px). Tabulky mají nově vlastní vodorovné posouvání.

Opraveny byly kontrasty, které neprošly WCAG AA (drobečková navigace, štítky kategorií,
metadata článků), dekorativní pořadová čísla se skryla čtečkám obrazovky a odkazy uvnitř
odstavců dostaly podtržení.

**Texty (5 nálezů, uvnitř desítky konkrétních míst)**

26 překlepů a gramatických chyb (`lepenéhospoje`, `Kataloget`, `sestaveení`, `garanc`,
`znečistění`, `reoxyidace` a další). Slovo „svár" bylo na 50 místech nahrazeno správným
„svar". Opraveny byly i tři **věcné** chyby, které by odborník poznal: tvrzení o únavě
říkalo pravý opak toho, co mělo; teplota svaru byla nadsazená přibližně dvojnásobně;
a definice frettingu byla popsána nepřesně. 26 meta popisků bylo přepsáno do doporučeného
rozsahu 120–160 znaků.

**Ostatní**

Náhledový obrázek pro sdílení na sociálních sítích neexistoval (vracel chybu 404) — byl
vygenerován. Soubor `llms.txt`, který se představuje jazykovým modelům, popisoval úplně
jiný web (blog agentury První pozice) — přepsán na Kronteq.

---

## Otevřené otázky pro klienta

Tyto body nelze doplnit bez podkladů. Jsou zapsané i v `QUESTIONS.md` (Q8–Q14).

1. **Právní údaje — blokuje spuštění.** Přesná obchodní firma, IČO, DIČ a spisová značka.
   Na webu podnikatele jsou povinné (§ 435 NOZ) a bez nich web neprojde interním
   schvalováním dodavatele u korporátního zákazníka. Patička je připravená, stačí doplnit.

2. **Roky praxe: 5+ nebo 25+?** Verze si odporovaly, sjednoceno na 5+. Pokud jde o osobní
   praxi (25 let) versus stáří firmy, je třeba to formulovat odděleně.

3. **Historie firmy.** Milníky 2019 / 2021 / 2022 / 2024 na stránce O nás pocházejí
   z konkurenčního výzkumu, ne od klienta. Zatím ponechány. Buď je potvrdit, nebo blok
   před spuštěním odstranit — nepotvrzená historie je zbytečné riziko.

4. **Kolik lidí má certifikaci EAE?** Web střídá plurál „European Adhesive Engineers"
   s jednou jmenovanou specialistkou. Podle odpovědi se sjednotí.

5. **Provozní doba telefonu.** Údaj „Po–Pá 8:00–17:00" byl v návrhu, ale nikdy nebyl
   potvrzen — proto na webu záměrně není. Po potvrzení se doplní k telefonu.

6. **Case studies.** 2–3 anonymizované případovky („výrobce X, spoj hliník–kompozit,
   úspora Y %"). Viz verdikt níže — je to jediná mezera proti konkurenci.

7. **Fotografie.** Web běží na SVG ilustracích, žádná fotografie provozu ani portrét.

8. **Doména.** kronteq.com zatím nenasazena; běží jen `kronteq.vercel.app`.

---

## Verdikt fáze 4 — jak si web stojí proti konkurenci

Ověřeni čeští i evropští hráči: Gluetec (nemá českou verzi, mělčí odborný obsah),
Permabond (bez češtiny, žádné případovky), Sika ČR (má e-shop, reference i akademii,
ale lepení je utopené ve stavební chemii). Chemikol zanikl.

**Kronteq je měřitelně první ve čtyřech věcech:** hloubka znalostní báze (10 + 10 článků
psaných jazykem inženýra, ne marketéra), jmenovaná certifikace EAE u konkrétní osoby,
plná dvojjazyčnost CZ/EN a poradenský positioning místo prodeje z katalogu.

**Jediná změna, která by pozici zlepšila, jsou case studies.** Ne kvůli obsahu — ten je
silnější než u konkurence — ale kvůli nákupčímu, který schvaluje nového dodavatele
a hledá důkaz, že už to někdo použil. Stačí 2–3 anonymizované případy. Vše ostatní
už web má.

---

## Stav po opravě

Build prochází bez chyb, 50 stran (2 zrušené duplicity, 3 nové stránky).
Automatická kontrola po opravách: 0 stran s meta popiskem mimo rozsah (bylo 33),
0 zbytků vývojářských poznámek (byly 3), 0 nefunkčních vnitřních adres.

Zbývá doplnit údaje od klienta (body 1–7 výše) a rozhodnout o nasazení.
