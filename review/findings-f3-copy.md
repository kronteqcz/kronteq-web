# Kronteq — fáze 3 copywriting (cesty relativní ke /data/bot/kronteq/)

P0 | /en/contact/ | mrtvý formulář (duplikát F1/F2) | action /api/contact + honeypot + JS + /en/thank-you/ („Thank you for your message! Kristýna Ondráčková will get back to you within 24 hours. For urgent matters call +420 608 558 833 directly.") | en/contact/index.astro:26
P0 | /en/about/ | TODO text + smyšlená čísla 25+/6 | smazat TODO; sjednotit dle CS 5+/9 | en/about/index.astro:56-61
P0 | /o-nas/ vs /faq/ | Protimluv EAE: FAQ „vydává FEICA" vs o-nas „EWF" — správně EWF | FAQ: „Uděluje ji Evropská federace pro svařování a lepení (EWF) prostřednictvím akreditovaných školicích center." EN: „…awarded by the European Federation for Welding, Joining and Cutting (EWF)…" | data/faq.ts:129-130
P0 | Hero | „6 kategorií" vs 9 | 9 (CS i EN) | components/home/Hero.astro:65
P0 | homepage JSON-LD | e-mail „kristyna@kronteq.com" neexistuje (správně ondrackova@) | importovat z data/contact.ts | pages/index.astro:43
P1 | služby | „lepenéhospoje" slitá slova | „90 % úspěchu lepeného spoje leží v přípravě — ne v lepidlu." | data/services.ts:54
P1 | /reseni/ | H1 „Komplexní řešení od A do Z" vata | „Lepidla, služby i podpora na jednom místě" | reseni/index.astro:17
P1 | homepage | „Služby, které jdou za pouhý prodej" kalk | „Víc než prodej lepidel" | pages/index.astro:56
P1 | produkty | „Elektronické sestaveení" | „Elektronické sestavy" | data/products.ts:37
P1 | faq:92 | „many lepidel", „immerzi" | „mnoho lepidel", „trvalý ponor" | data/faq.ts:92
P1 | faq:129 | „garanc" | „garance" | data/faq.ts:129
P1 | KB jak-vybrat:17 | „Kataloget obsahuje" | „Katalogy obsahují stovky produktů." | kb/cs/jak-vybrat-lepidlo-pur-epoxid-mma.mdx:17
P1 | KB anatomie:42 + priprava:73 | „nesmaží"/garbled triáda | „nesmáčí — „kuličkuje" jako voda na mastném plechu."; „Lepidlo se nerozlije a povrch nesmáčí — adheze je minimální." | kb/cs
P1 | technologie lepeni-prehled:38 | „Vyšší únava — nepropaguje trhliny" (opak) | „Vyšší únavová životnost — lepený spoj nešíří trhliny z koncentrací napětí." | technologie/[slug].astro:38 (data v technologies.ts)
P1 | technologie hybridni-spoje:180 | „Zvyšuje rivet-bonding únavu?" | „…únavovou životnost konstrukce?" | technologie/[slug].astro:180
P1 | technologie priprava:209 | „ruší odvod práce" | „znehodnotí celou předchozí práci" | technologie/[slug].astro:209
P1 | KB limity:3 | „jak to předcházet" | „jak tomu předcházet" + nová meta | kb/cs/limity-lepenych-spoju.mdx:3
P1 | celý web | 0 nbsp | remark/rehype plugin + strings | systémové
P1 | CS texty | smíšené uvozovky 6+5 míst | sjednotit „…" | dle reportu (priprava:29, zaskleni:24, services.ts:26, anatomie:42, [slug].astro:166,194, DriversSection:38, automotive:52,78, letectvi:54)
P1 | strings:112 | „kupce" | „nákupčí" | i18n/strings.ts:112
P1 | /odvtvi/ + KB koheeze | překlepy ve sluzích | přejmenovat odvetvi + anatomie-spoje-adheze-koheze (+ aria-label) | pages/odvtvi/, kb/cs/anatomie…mdx, AdhesionCohesion.astro:17
P2 | kontakt komentář; telefon formát (contact.ts „608 55 88 33" vs dekujeme „608 558 833" → sjednotit trojice); „rárazové"→„rázové" ([slug]:163); „Letecká průmysl"→„Letecký" (:168); „universálnost/znečistění/je to sekund" (:93,123,129); „molekulami pohromadě"/„adhesivních" (:30,20); „residua/znečistěn" (:220,222,240 + priprava:59); „reoxyidace" (priprava:88); „odmaštit"/„s statickým" (jak-vybrat:65,136); „čistícího/Čistící"→„čisticí" (services:67, products:111); „zálitkování"→„zalévání (potting)" (faq:83); EN „24 business hours" (faq:121); o-nas vata (:85); „průtok"→„takt výroby" (Drivers:48); svár→svar (50× globálně); H1 sluzby volitelně; EN 404; fakticky: 6000°C→1500–2500°C + fretting definice ([slug]:157,166); slug anaerobi (products:61)

## Meta descriptions — finální CS (viz plné texty v reportu agenta, klíč: soubor → nová meta 120–160):
/ (index.astro:30), /sluzby/ (:11), /o-nas/ (:36), /kontakt/ (:11), /reseni/ (:11), /produkty/ (:68), /znalostni-baze/ (:22), technologies.ts:45, KB: hybridni-spoje, jak-vybrat, elektronika, zaskleni, priprava, limity (frontmatter :3). Vzorec: [keyword] : [2–3 podtémata] + [úhel], bez „Kronteq", bez CTA. EN meta zkrátit týmž vzorcem.

Test přepsání: homepage H1 a /o-nas/ H1 PONECHAT. EN angličtina idiomatická (kromě P0 míst).
