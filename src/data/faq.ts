export interface FaqItem {
  id: string;
  category: 'technologie' | 'produkty' | 'spoluprace' | 'dodavky';
  categoryEn: 'technology' | 'products' | 'collaboration' | 'delivery';
  questionCs: string;
  questionEn: string;
  answerCs: string;
  answerEn: string;
}

export const faqItems: FaqItem[] = [
  // ── Technologie ──────────────────────────────────────────
  {
    id: 'faq-lepeni-vs-svarovani',
    category: 'technologie',
    categoryEn: 'technology',
    questionCs: 'Kdy použít lepení místo svařování?',
    questionEn: 'When should I use adhesive bonding instead of welding?',
    answerCs: `Lepení je vhodnou alternativou svařování všude tam, kde spojujete různé materiály (kov + plast, kompozit + hliník), kde nesmí dojít k tepelnému ovlivnění povrchu, nebo kde potřebujete rovnoměrné rozložení napětí po celé ploše spoje místo bodového pnutí. Lepení je také jediná metoda, která současně těsní, izoluje a tlumí vibrace. Svařování zůstává výhodnější pro těžké ocelové konstrukce s extrémním zatížením, kde je vyžadována snadná kontrola kvality (RTG, ultrazvuk).`,
    answerEn: `Adhesive bonding is a suitable alternative to welding wherever you join dissimilar materials (metal + plastic, composite + aluminium), wherever thermal damage to the surface is unacceptable, or wherever you need uniform stress distribution across the full bond area instead of point stress. Bonding is also the only method that simultaneously seals, insulates and damps vibration. Welding remains preferable for heavy steel structures with extreme loading where straightforward quality inspection (X-ray, ultrasound) is required.`,
  },
  {
    id: 'faq-priprava-povrchu-proc',
    category: 'technologie',
    categoryEn: 'technology',
    questionCs: 'Proč selhávají lepené spoje? Co způsobuje 90 % poruch?',
    questionEn: 'Why do adhesive bonds fail? What causes 90% of failures?',
    answerCs: `Devět z deseti selhání lepeného spoje má příčinu v nedostatečné přípravě povrchu — ne ve špatném lepidlu. Oleje a tuky z obrábění snižují smáčivost; oxidy kovu oslabují adhezi; nízká povrchová energie plastů zabrání lepidlu v dostatečném rozlití. Správná příprava zahrnuje mechanické čištění, chemické odmašťování a v případě nesnadno lepitelných materiálů (PP, PE, PTFE) aktivaci povrchu plazmatem nebo primerem.`,
    answerEn: `Nine out of ten adhesive bond failures are caused by inadequate surface preparation — not by the wrong adhesive. Machining oils and greases reduce wettability; metal oxides weaken adhesion; low surface energy of plastics prevents the adhesive from spreading sufficiently. Proper preparation involves mechanical cleaning, chemical degreasing and — for difficult-to-bond substrates (PP, PE, PTFE) — surface activation by plasma or primer.`,
  },
  {
    id: 'faq-teplota-limit',
    category: 'technologie',
    categoryEn: 'technology',
    questionCs: 'Jaká je maximální teplota pro lepené spoje?',
    questionEn: 'What is the maximum temperature for adhesive bonds?',
    answerCs: `Závisí na typu lepidla. Polyuretany a standardní epoxidy jsou obvykle limitovány na 120–150 °C pro dlouhodobé použití. Speciální vysokoteplotní epoxidy (typicky dvousložkové) zvládají až 200–300 °C. Silikony odolávají teplotám –60 až +300 °C. Pro motorový prostor nebo aplikace blízko výfuku je volba lepidla kritická — konzultujte vždy konkrétní aplikaci.`,
    answerEn: `This depends on the adhesive type. Polyurethanes and standard epoxies are typically limited to 120–150 °C for long-term use. Specialist high-temperature epoxies (usually two-component) withstand up to 200–300 °C. Silicones tolerate temperatures from −60 °C to +300 °C. For engine bay or exhaust-adjacent applications, adhesive selection is critical — always consult for your specific application.`,
  },
  {
    id: 'faq-ndt-kontrola',
    category: 'technologie',
    categoryEn: 'technology',
    questionCs: 'Jak se kontroluje kvalita lepeného spoje?',
    questionEn: 'How is the quality of an adhesive bond inspected?',
    answerCs: `Vizuální kontrola odhalí pouze vyteklé přebytky lepidla, ne vady uvnitř spoje. Pro nedestruktivní testování (NDT) se v průmyslu používá ultrazvukové skenování (detekce bublin, nedostatečné smočení plochy) nebo termografická analýza (vakuová stimulace + tepelné zobrazení). Zkouška penetranty a radiografie jsou méně obvyklé u lepidel. V sériové výrobě se nejčastěji kombinuje statistické vzorkování destruktivních tahových/odlupových zkoušek s procesní kontrolou (parametry přípravy, dávkování, vytvrzení).`,
    answerEn: `Visual inspection can only reveal excess adhesive squeeze-out, not internal joint defects. For non-destructive testing (NDT), industry uses ultrasonic scanning (detecting voids, insufficient wetting) or thermographic analysis (vacuum stimulation + thermal imaging). Dye penetrant and radiography are less common for adhesives. In series production the most common approach combines statistical sampling of destructive tensile/peel tests with in-process control (preparation parameters, dispensing, cure).`,
  },
  {
    id: 'faq-hybridni-spoj',
    category: 'technologie',
    categoryEn: 'technology',
    questionCs: 'Co je weld-bonding a kdy ho použít?',
    questionEn: 'What is weld-bonding and when should I use it?',
    answerCs: `Weld-bonding kombinuje bodové svařování s lepením. Postup: na povrchy se nanese lepidlo, díly se sestaví, provede se bodový svár (fixuje polohu a zajišťuje okamžitou pevnost) a lepidlo vytvrdne. Výsledkem je spoj výrazně tužší a korozně odolnější než pouhý svár — a pevnější než samotné lepení. Uplatnění: karoserie vozidel (zvýšení torzní tuhosti), letecké panely, průmyslové přepravky. Podmínkou je, aby lepidlo sneslo teplo sváru a nebylo příliš silné (max. ~0,3 mm vrstva pro bodový svár).`,
    answerEn: `Weld-bonding combines spot welding with adhesive bonding. The process: adhesive is applied to the surfaces, parts are assembled, a spot weld is made (fixing position and providing immediate strength) and the adhesive cures. The result is a joint significantly stiffer and more corrosion-resistant than welding alone — and stronger than bonding alone. Applications: vehicle body structures (increasing torsional stiffness), aerospace panels, industrial containers. The requirement is that the adhesive can withstand welding heat and is not too thick (max ~0.3 mm layer for spot welding).`,
  },
  // ── Produkty ──────────────────────────────────────────────
  {
    id: 'faq-rozdil-pur-epoxid',
    category: 'produkty',
    categoryEn: 'products',
    questionCs: 'Jaký je rozdíl mezi PUR a epoxidovým lepidlem?',
    questionEn: 'What is the difference between PUR and epoxy adhesive?',
    answerCs: `PUR (polyuretan) je pružný: po vytvrzení zůstává elastický, dobře absorbuje vibrace a rázy, odolává odlupování. Typická pevnost 20–40 MPa, tažnost 400–800 %. Vhodný pro spoje, které se pohybují nebo jsou vystaveny dynamickému zatížení. Epoxid je tuhý a křehčí: vysoká pevnost (70–90 MPa), vynikající teplotní a chemická odolnost, minimální tažnost (50–200 %). Ideální pro staticky zatížené konstrukční spoje s požadavkem na teplotní odolnost. Existují také elastifikované epoxidy, které kombinují oba přístupy.`,
    answerEn: `PUR (polyurethane) is flexible: after curing it remains elastic, absorbs vibration and impact well, and resists peel loads. Typical strength 20–40 MPa, elongation 400–800%. Suitable for joints that move or are subject to dynamic loading. Epoxy is rigid and more brittle: high strength (70–90 MPa), excellent thermal and chemical resistance, minimal elongation (50–200%). Ideal for statically loaded structural joints with a temperature resistance requirement. Toughened epoxies also exist that combine both characteristics.`,
  },
  {
    id: 'faq-co-je-mma',
    category: 'produkty',
    categoryEn: 'products',
    questionCs: 'Co jsou MMA akrylátová lepidla a kdy je použít?',
    questionEn: 'What are MMA acrylate adhesives and when should I use them?',
    answerCs: `MMA (methylmethakrylát) jsou dvousložková strukturální lepidla s extrémně rychlým vytvrzením (5–30 minut). Nevyžadují dokonale čistý povrch — snesou mírné znečištění olejem. Pevnost je srovnatelná s epoxidy (40–70 MPa), pružnost výrazně vyšší. Nelepí na PE a PP. Typické použití: přepravní vozidla, zemědělská technika, sendvičové panely, kryty strojů. Nevýhodou je silný zápach při aplikaci (metylester) a nutnost přesného míchacího poměru.`,
    answerEn: `MMA (methyl methacrylate) adhesives are two-component structural adhesives with extremely fast curing (5–30 minutes). They do not require a perfectly clean surface — they tolerate slight oil contamination. Strength is comparable to epoxies (40–70 MPa), elongation significantly higher. They do not bond PE or PP. Typical uses: transport vehicles, agricultural machinery, sandwich panels, machine covers. Drawbacks include strong odour during application (methyl ester) and the need for precise mixing ratio.`,
  },
  {
    id: 'faq-kyanoakrylat-aplikace',
    category: 'produkty',
    categoryEn: 'products',
    questionCs: 'Hodí se kyanoakrylát pro průmyslové konstrukce?',
    questionEn: 'Are cyanoacrylates suitable for industrial structural applications?',
    answerCs: `Kyanoakryláty (vteřinová lepidla) jsou ideální pro malé plochy, rychlou montáž, fixaci součástek nebo opravy — tam, kde je rychlost klíčová a spoj není trvale dynamicky zatížen. Pro konstrukční aplikace s velkými plochami, vibracemi nebo teplotními cykly nad 80 °C nejsou vhodné: jsou křehké, citlivé na vlhkost při dlouhodobém vystavení a odlupovací pevnost je nízká. V průmyslu se používají typicky pro fixaci ložisek, zálitkování elektroniky nebo zajišťování šroubů (kde je výhodná oproti anaerobním lepidlům jen v určitých případech).`,
    answerEn: `Cyanoacrylates (instant adhesives) are ideal for small areas, rapid assembly, component fixation or repairs — wherever speed is critical and the joint is not subject to sustained dynamic loading. For structural applications with large bond areas, vibration or thermal cycling above 80 °C they are not suitable: they are brittle, moisture-sensitive with prolonged exposure, and peel strength is low. Industrial uses include bearing fixation, electronic potting or thread locking (where they have an advantage over anaerobic adhesives only in specific cases).`,
  },
  {
    id: 'faq-primer-nutnost',
    category: 'produkty',
    categoryEn: 'products',
    questionCs: 'Musím vždy používat primer?',
    questionEn: 'Do I always need to use a primer?',
    answerCs: `Ne vždy, ale u určitých substrátů je primer výrazně zvýší spolehlivost spoje. Primer je nutný nebo silně doporučený pro: nesnadno lepitelné plasty (PP, PE, PTFE), lakované nebo práškově lakované povrchy, pokovené nebo anodizované kovy, a vždy tam kde prostředí zahrnuje vlhkost nebo immerzi. Na dobře odmašťovaném nerezovém nebo hliníkovém povrchu many lepidel funguje bez primeru. Vždy konzultujte konkrétní kombinaci substrátu a lepidla — správný primer je lepší prevencí selhání než dražší lepidlo.`,
    answerEn: `Not always, but for certain substrates a primer will significantly improve bond reliability. A primer is required or strongly recommended for: difficult-to-bond plastics (PP, PE, PTFE), painted or powder-coated surfaces, plated or anodised metals, and wherever the environment involves moisture or immersion. On well-degreased stainless steel or aluminium surfaces many adhesives work without a primer. Always consult the specific substrate and adhesive combination — the right primer is better defect prevention than a more expensive adhesive.`,
  },
  // ── Spolupráce ─────────────────────────────────────────────
  {
    id: 'faq-jak-zacit',
    category: 'spoluprace',
    categoryEn: 'collaboration',
    questionCs: 'Jak probíhá první konzultace?',
    questionEn: 'How does the first consultation work?',
    answerCs: `Poptáte nás přes kontaktní formulář nebo e-mailem — popište materiály, které chcete spojit, prostředí (teplota, chemikálie, vlhkost) a výrobní kontext. Do 24 hodin se ozveme s doplňujícími dotazy nebo rovnou s návrhem. První konzultace je bezplatná. Pro složitější aplikace doporučíme odeslat vzorky materiálů a provést orientační zkoušku přilnavosti.`,
    answerEn: `Contact us via the enquiry form or email — describe the substrates you want to bond, the service environment (temperature, chemicals, humidity) and the production context. We will respond within 24 hours with follow-up questions or a direct proposal. The first consultation is free of charge. For more complex applications we will recommend sending material samples and carrying out a preliminary adhesion test.`,
  },
  {
    id: 'faq-vzorky',
    category: 'spoluprace',
    categoryEn: 'collaboration',
    questionCs: 'Lze získat vzorky lepidel k testování?',
    questionEn: 'Can I obtain adhesive samples for testing?',
    answerCs: `Ano. Po technické konzultaci pošleme vzorky doporučených lepidel — typicky malé kazety nebo lahvičky pro orientační testy na vašich substrátech. U dvousložkových lepidel dodáme i ruční míchací kartuše. Vzorky jsou poskytovány bezplatně nebo za symbolický příspěvek na přepravu pro první testovací sadu.`,
    answerEn: `Yes. Following a technical consultation we will send samples of the recommended adhesives — typically small cartridges or bottles for preliminary testing on your substrates. For two-component adhesives we will supply manual mixing cartridges as well. Samples are provided free of charge or with a nominal shipping contribution for the first test kit.`,
  },
  {
    id: 'faq-reakcní-doba',
    category: 'spoluprace',
    categoryEn: 'collaboration',
    questionCs: 'Jak rychle odpovídáte na technické dotazy?',
    questionEn: 'How quickly do you respond to technical enquiries?',
    answerCs: `Na e-maily a formulářové poptávky odpovídáme do 24 hodin v pracovní dny. Pro urgentní technické otázky (reklamace v sérii, přerušení výroby) je k dispozici přímá telefonická linka Kristýny Ondráčkové.`,
    answerEn: `We respond to emails and form enquiries within 24 business hours. For urgent technical issues (in-series warranty claims, production stoppages) Kristýna Ondráčková's direct telephone line is available.`,
  },
  {
    id: 'faq-certifikat-eae',
    category: 'spoluprace',
    categoryEn: 'collaboration',
    questionCs: 'Co je European Adhesive Engineer (EAE)?',
    questionEn: 'What is a European Adhesive Engineer (EAE)?',
    answerCs: `European Adhesive Engineer (EAE) je nejvyšší profesní certifikace pro specialisty na lepicí technologie v Evropě. Vydává ji FEICA (Association of the European Adhesive & Sealant Industry) prostřednictvím akreditovaných technických universit. Certifikace pokrývá chemii lepidel, mechaniku spojů, přípravu povrchu, procesní technologie a normativní požadavky. Kristýna Ondráčková je certifikovanou EAE — garanc odborné kvality každého doporučení.`,
    answerEn: `European Adhesive Engineer (EAE) is the highest professional certification for bonding technology specialists in Europe. It is issued by FEICA (Association of the European Adhesive & Sealant Industry) through accredited technical universities. The certification covers adhesive chemistry, joint mechanics, surface preparation, process technology and normative requirements. Kristýna Ondráčková is a certified EAE — the professional quality guarantee behind every recommendation.`,
  },
  // ── Dodávky ────────────────────────────────────────────────
  {
    id: 'faq-dodaci-lhuta',
    category: 'dodavky',
    categoryEn: 'delivery',
    questionCs: 'Jaká je dodací lhůta průmyslových lepidel?',
    questionEn: 'What is the lead time for industrial adhesives?',
    answerCs: `Pro standardní produkty z dostupného skladového množství expedujeme do 2–3 pracovních dnů. Pro speciální produkty na objednávku nebo větší objemy se lhůta pohybuje v rozmezí 5–10 pracovních dnů v závislosti na výrobci a dostupnosti. Přesnou dostupnost a lhůtu vždy sdělíme při potvrzení objednávky.`,
    answerEn: `For standard products available from stock we despatch within 2–3 business days. For specialist made-to-order products or larger volumes the lead time is 5–10 business days depending on the manufacturer and availability. Exact availability and lead time are always confirmed at order confirmation.`,
  },
  {
    id: 'faq-minimalni-odber',
    category: 'dodavky',
    categoryEn: 'delivery',
    questionCs: 'Jaký je minimální odběr?',
    questionEn: 'What is the minimum order quantity?',
    answerCs: `Minimální odběr závisí na konkrétním produktu. Většinu lepidel dodáváme od jednotlivých kartuší (310 ml, 400 ml) nebo lahví pro testovací účely. Větší průmyslové balení (kbelíky, barely, 200litrové sudy) je dostupné při opakovaných objednávkách nebo dohodnutém rámcovém odběru. Pro přesné informace o konkrétním produktu nás kontaktujte.`,
    answerEn: `Minimum order quantity depends on the specific product. Most adhesives are available from individual cartridges (310 ml, 400 ml) or bottles for testing. Larger industrial packaging (pails, drums, 200-litre drums) is available for repeat orders or agreed framework purchasing. For precise information on a specific product please contact us.`,
  },
  {
    id: 'faq-tds-sds',
    category: 'dodavky',
    categoryEn: 'delivery',
    questionCs: 'Kde najdu technické datové listy (TDS) a bezpečnostní listy (SDS)?',
    questionEn: 'Where can I find technical data sheets (TDS) and safety data sheets (SDS)?',
    answerCs: `Technické datové listy a bezpečnostní listy poskytujeme ke každé dodávce. Na vyžádání je zašleme e-mailem před objednávkou — stačí uvést název nebo typ produktu. Pamatujte, že TDS slouží jako orientační technická dokumentace; závazné specifikace pro konkrétní aplikaci vycházejí z validačních testů v podmínkách zákazníka.`,
    answerEn: `Technical data sheets and safety data sheets are provided with every delivery. On request we will send them by email before ordering — simply state the product name or type. Please note that TDS documents serve as indicative technical documentation; binding specifications for a specific application are based on validation testing under customer conditions.`,
  },
];

export const faqCategories = {
  cs: {
    technologie: 'Technologie',
    produkty: 'Produkty',
    spoluprace: 'Spolupráce',
    dodavky: 'Dodávky',
  },
  en: {
    technology: 'Technology',
    products: 'Products',
    collaboration: 'Collaboration',
    delivery: 'Delivery',
  },
};
