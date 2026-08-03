# Kronteq — fáze 3 UX audit

Ověřeno: /odvetvi/ = 404 (překlep potvrzený); fonty reálně jen 2 (Outfit+DM Sans), Inter+Space Grotesk mrtvé závislosti + fantom v 7 SVG; menu 7 položek; „Co zahrnuje" contrast hit = artefakt reveal animace (neopravovat).
Pozitiva: skip-link, :focus-visible, aria-current, hover, škála a spacing konzistentní, formulář honeypot + /api/contact.

P0 | všechny | /odvtvi/ překlep v publikované sitemap | přejmenovat na odvetvi + opravit Header:17, Footer:19, sitemap:9, reseni:70, IndustriesSection:45, canonical odvtvi/index.astro:39,44 + 301 vercel.json
P0 | /en/about/:61 | viditelné TODO | smazat
P0 | /faq/ + /en/faq/ | úplně osiřelé (0 odkazů, ani sitemap) | do navItems Header+Footer (t.navFaq) + sitemap
P0 | /reseni/ + /en/solutions/ | orphan duplikující /produkty/ | smazat + 301 na /produkty/ + vyřadit ze sitemap (doporučení)
P1 | o-nas vs en/about | 5+ vs 25+ let (duplikát F1) | sjednotit | o-nas:117, en/about:56, Hero.astro:60
P1 | KB jak-vybrat + EN | overflow tabulek +318/+49px | .kb-prose :global(table){display:block;overflow-x:auto;-webkit-overflow-scrolling:touch} | znalostni-baze/[slug].astro:185, en/knowledge-base/[slug].astro:157
P1 | 20 článků | breadcrumb+meta rgba(255,255,255,0.4) = 3,76:1 | var(--text-dark-muted) #9D8FC0 | znalostni-baze/[slug].astro:165,172; technologie/[slug].astro:382,386; EN ekvivalenty
P1 | KB články | .category-badge #7C3AED na #1E103F 3,06:1 | var(--accent-light) #A78BFA | znalostni-baze/[slug].astro:170, en/…:147
P1 | /sluzby/ | .service-num rgba(...,0.3) 1,59:1 | rgba(124,58,237,0.7) nebo aria-hidden | sluzby/index.astro:136, en/services:98
P1 | /odvetvi/ | .industry-num 1,46:1 | dtto | odvtvi/index.astro:174, en/industries:69
P1 | články | breadcrumb odkazy bez podtržení, 1,91:1 vs text | underline + offset | 4 soubory [slug].astro
P1 | všechny | přepínač jazyka → homepage (duplikát F1) | mapa slugů CS↔EN | Header.astro:60,98, strings.ts:8,140
P2 | všechny | „Astro" v patičce link-in-text-block | underline | Footer.astro:191
P2 | všechny | hreflang na homepage (duplikát F1) | altUrl prop | BaseLayout.astro:50-52
P2 | / | btn-primary na „Naše služby", poptávka jako sekundární | prohodit | Hero.astro
P2 | / | „Naše řešení"/„Všechna řešení" → /produkty/ (nav „Produkty") | „Všechny produkty" | ProductsGrid.astro:46
P2 | IA | Technologie × Znalostní báze překryv | cross-linky s vysvětlením | obě indexové
P2 | DS | Inter/Space Grotesk fantom v 7 SVG + package.json | 'DM Sans Variable' + odebrat balíčky | illustrations/*.astro
P2 | mikro-labely 12px | zvětšit na 0.8125rem | sluzby:159, o-nas:206,219
P2 | mobil | klikací plochy 20-39px (footer, mobilní nav, lang-switch, breadcrumb) | padding dle reportu | Footer.astro:159-170, Header.astro:296,234
P2 | header hide-on-scroll | zvážit | Header.astro:116
P2 | /kontakt/ | HTML komentář Formspree (duplikát) | smazat :27-34 + EN
P2 | reveal | print/screenshot prázdné | @media print override + 2s fallback | BaseLayout:133-137, motion JS
P2 | CS/EN mix | „Built with Astro" | „Postaveno na Astro" | Footer
P2 | dead code | BlogLayout.astro 490 řádků s cizím brandingem (1P, blog.prvni-pozice.com) | navrhnout smazání (nepoužívaný)
