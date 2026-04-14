export interface Service {
  slug: string;
  icon: string;
  nameCs: string;
  nameEn: string;
  taglineCs: string;
  taglineEn: string;
  descCs: string;
  descEn: string;
  benefitsCs: string[];
  benefitsEn: string[];
  ctaCs: string;
  ctaEn: string;
}

export const services: Service[] = [
  {
    slug: 'vyber-lepici-technologie',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    nameCs: 'Výběr lepicí technologie',
    nameEn: 'Adhesive Technology Selection',
    taglineCs: 'Správné lepidlo pro vaši aplikaci — na první pokus.',
    taglineEn: 'The right adhesive for your application — first time.',
    descCs: `Výběr lepidla není otázka katalogu, ale znalosti aplikace. Analyzujeme materiály, které spojujete (kov, plast, kompozit, sklo, pryž), prostředí (teplota, vlhkost, UV, chemikálie), mechanické zatížení (smyk, odlup, tah) a výrobní podmínky (čas vytvrzení, způsob aplikace, teplotní okno).

Na základě těchto parametrů doporučíme konkrétní typ lepidla — polyuretan, epoxid, MMA akrylát, kyanoakrylát nebo silikon — a vysvětlíme proč. Žádné generické „vyzkušejte náš produkt".

Konzultace probíhá formou strukturovaného dotazníku nebo videohovoru. Výstupem je stručný písemný přehled doporučení s odůvodněním a odkazem na vzorky k otestování.`,
    descEn: `Choosing an adhesive is not a matter of browsing a catalogue — it requires understanding the application. We analyse the substrates being joined (metal, plastic, composite, glass, rubber), the service environment (temperature, humidity, UV, chemicals), mechanical loading (shear, peel, tensile) and production conditions (cure time, application method, processing window).

Based on these parameters we recommend a specific adhesive type — polyurethane, epoxy, MMA acrylate, cyanoacrylate or silicone — and explain the reasoning. No generic "try our product".

Consultations take the form of a structured questionnaire or video call. The output is a concise written recommendation with justification and reference samples for testing.`,
    benefitsCs: [
      'Strukturovaná analýza aplikace (materiály, prostředí, zatížení)',
      'Konkrétní typ lepidla s odůvodněním — žádné zkusíte-uvidíte',
      'Srovnání max. 3 kandidátů s klíčovými parametry',
      'Doporučení vzorků pro validační testy',
    ],
    benefitsEn: [
      'Structured application analysis (substrates, environment, loading)',
      'Specific adhesive type with justification — no trial and error',
      'Comparison of up to 3 candidates with key parameters',
      'Sample recommendations for validation testing',
    ],
    ctaCs: 'Poptejte konzultaci',
    ctaEn: 'Request a consultation',
  },
  {
    slug: 'priprava-povrchu-aplikacni-navrh',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    nameCs: 'Příprava povrchu a aplikační návrh',
    nameEn: 'Surface Preparation & Application Design',
    taglineCs: '90 % úspěchu lepenéhospoje leží v přípravě — ne v lepidlu.',
    taglineEn: '90% of bond success lies in surface preparation — not in the adhesive.',
    descCs: `Nejčastější příčina selhání lepeného spoje není špatné lepidlo — je to nedostatečně připravený povrch. Oleje, oxidy, nízká povrchová energie: lepidlo se může chovat perfektně v laboratoři a selhávat v sérii, protože povrch nebyl konzistentně připraven.

Analyzujeme stávající proces (jak čistíte, čím čistíte, jak rychle aplikujete po čištění) a identifikujeme rizika. Navrhujeme optimální postup: mechanické předúpravy (broušení, pískování), chemické odmašťování (výběr správného rozpouštědla nebo vodního čisticího prostředku) a aktivaci povrchu (primer, plazma, koróna).

Výstupem je aplikační karta — jednostránkový dokument s kroky přípravy, parametry a kontrolními body pro výrobní linku.`,
    descEn: `The most common cause of bond failure is not a poor adhesive — it is inadequately prepared surfaces. Oils, oxides, low surface energy: the adhesive can perform perfectly in the lab and fail in production because the surface was not prepared consistently.

We analyse your current process (how you clean, what you use, how quickly you apply after cleaning) and identify risks. We design the optimal procedure: mechanical pre-treatment (grinding, sandblasting), chemical degreasing (selecting the right solvent or water-based cleaner) and surface activation (primer, plasma, corona).

The output is an application card — a single-page document with preparation steps, parameters and quality checkpoints for the production line.`,
    benefitsCs: [
      'Audit stávajícího čistícího procesu a identifikace rizik',
      'Doporučení metody aktivace povrchu (plazma, primer, koróna)',
      'Aplikační karta pro výrobní linku',
      'Snížení počtu defektních spojů v sérii',
    ],
    benefitsEn: [
      'Audit of current cleaning process and risk identification',
      'Recommendation of surface activation method (plasma, primer, corona)',
      'Application card for the production line',
      'Reduction of defective bonds in series production',
    ],
    ctaCs: 'Poptejte analýzu povrchu',
    ctaEn: 'Request a surface analysis',
  },
  {
    slug: 'navrh-hybridnich-spoju',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    nameCs: 'Návrh hybridních spojů',
    nameEn: 'Hybrid Joint Design',
    taglineCs: 'Weld-bonding a rivet-bonding: nejlepší z obou světů.',
    taglineEn: 'Weld-bonding and rivet-bonding: the best of both worlds.',
    descCs: `Hybridní spoje kombinují chemickou vazbu lepidla s mechanickou fixací (svár nebo nýt). Výsledkem je spoj, který překonává obě metody samostatně: bodový svár fixuje polohu dílů ihned po sestavení, lepidlo zajišťuje těsnost, plošnou tuhost a antikorozní ochranu.

Rivet-bonding — kombinace nýtu a lepidla — je standardem v letectví a stále více i v automotive. Nýt nese špičkové dynamické zatížení, lepidlo tlumí vibrace a brání šíření únavových trhlin od otvoru nýtu.

Navrhujeme optimální kombinaci: určujeme, zda je prioritou okamžitá pevnost, tepelná odolnost, nebo korozní ochrana, a podle toho volíme typ lepidla a mechanické fixace. Zohledňujeme výrobní logistiku — pořadí kroků, čas vytvrzení a vybavenost linky.`,
    descEn: `Hybrid joints combine the chemical bond of an adhesive with mechanical fastening (weld or rivet). The result is a joint that outperforms either method alone: the spot weld fixes part position immediately after assembly, while the adhesive provides sealing, planar stiffness and anti-corrosion protection.

Rivet-bonding — combining rivets and adhesive — is standard in aerospace and increasingly in automotive. The rivet carries peak dynamic loads, while the adhesive damps vibration and prevents fatigue crack propagation from the rivet hole.

We design the optimal combination: determining whether the priority is immediate strength, thermal resistance or corrosion protection, and selecting adhesive type and mechanical fixation accordingly. We account for production logistics — sequence of steps, cure time and line equipment.`,
    benefitsCs: [
      'Analýza priorit spoje (pevnost, těsnost, koroze, vibrace)',
      'Výběr optimálního typu lepidla pro hybridní aplikaci',
      'Návrh pořadí výrobních kroků (kdy svářet, kdy lepit)',
      'Výpočet tuhosti a únosnosti hybridního spoje',
    ],
    benefitsEn: [
      'Analysis of joint priorities (strength, sealing, corrosion, vibration)',
      'Selection of optimal adhesive type for hybrid application',
      'Design of production step sequence (when to weld, when to bond)',
      'Stiffness and load capacity calculation of the hybrid joint',
    ],
    ctaCs: 'Konzultace návrhu spoje',
    ctaEn: 'Joint design consultation',
  },
  {
    slug: 'testovani-validace',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    nameCs: 'Testování a validace spoje',
    nameEn: 'Joint Testing & Validation',
    taglineCs: 'Pevnostní zkoušky, stárnutí, NDT — než spoj opustí linku.',
    taglineEn: 'Strength testing, ageing, NDT — before the bond leaves the line.',
    descCs: `Lepený spoj nelze otevřít a zkontrolovat vizuálně. Kvalita se skrývá uvnitř. Proto je validace klíčovou fází každé nové aplikace — ověřuje, že lepidlo, příprava povrchu a výrobní proces společně splňují požadavky.

Pomáháme navrhnout testovací plán: výběr normovaných zkoušek (tahová zkouška dle ISO 4587, odlupová zkouška, smyková zkouška, klimatické stárnutí), doporučení laboratoří nebo partnerů pro provedení zkoušek a interpretaci výsledků.

Tam kde je to vhodné, doporučujeme nedestruktivní testování (NDT) pro sériovou výrobu — ultrazvukové skenování nebo termografii — a pomáháme nastavit kontrolní procesy.`,
    descEn: `A bonded joint cannot be opened and visually inspected. Quality is hidden inside. That is why validation is a critical phase for every new application — verifying that the adhesive, surface preparation and production process together meet requirements.

We help design a test plan: selecting standardised tests (tensile test per ISO 4587, peel test, shear test, climate ageing), recommending laboratories or partners for testing and interpreting results.

Where appropriate, we recommend non-destructive testing (NDT) for series production — ultrasonic scanning or thermography — and help set up quality control processes.`,
    benefitsCs: [
      'Návrh testovacího plánu dle normy (ISO 4587, ASTM D1002)',
      'Interpretace výsledků a doporučení pro optimalizaci',
      'Doporučení NDT metod pro sériovou kontrolu kvality',
      'Podpora při klimatickém stárnutí (vlhko, teplo, UV)',
    ],
    benefitsEn: [
      'Test plan design per standard (ISO 4587, ASTM D1002)',
      'Results interpretation and optimisation recommendations',
      'NDT method recommendations for series quality control',
      'Support for climate ageing (humidity, heat, UV)',
    ],
    ctaCs: 'Poptejte validační podporu',
    ctaEn: 'Request validation support',
  },
  {
    slug: 'dodavky-lepidel-a-prislusenstvi',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7m0 10l-8-4V7',
    nameCs: 'Dodávky lepidel a příslušenství',
    nameEn: 'Adhesive & Accessory Supply',
    taglineCs: 'Kompletní dodavatelský řetězec — od lepidla po aplikátor.',
    taglineEn: 'Complete supply chain — from adhesive to applicator.',
    descCs: `Dodáváme průmyslová lepidla, tmeliva a příslušenství od předních evropských výrobců. Pokrýváme celé spektrum: polyuretany (PUR), epoxidy, MMA akryláty, kyanoakryláty, silikony, anaerobní lepidla, lepicí pásky a fólie.

Součástí dodávky jsou vždy primery a čisticí prostředky doporučené pro konkrétní aplikaci — ne jen lepidlo samotné. Zajišťujeme také aplikační systémy: ruční kartuše a pistole, poloautomatické dávkovače, robotické dispensingové hlavy pro automatizované linky.

Ke každé dodávce poskytujeme technické datové listy (TDS), bezpečnostní listy (SDS/MSDS) a doporučení pro skladování a manipulaci.`,
    descEn: `We supply industrial adhesives, sealants and accessories from leading European manufacturers. We cover the full spectrum: polyurethanes (PUR), epoxies, MMA acrylates, cyanoacrylates, silicones, anaerobic adhesives, bonding tapes and films.

Every delivery includes primers and cleaning agents recommended for the specific application — not just the adhesive alone. We also supply application systems: manual cartridges and guns, semi-automatic dispensers, robotic dispensing heads for automated lines.

Each delivery is accompanied by technical data sheets (TDS), safety data sheets (SDS/MSDS) and recommendations for storage and handling.`,
    benefitsCs: [
      'Celé spektrum průmyslových lepidel od ověřených výrobců',
      'Primery a čisticí prostředky jako součást dodávky',
      'Aplikační systémy od ručních po robotické',
      'TDS + SDS dokumentace ke každé dodávce',
    ],
    benefitsEn: [
      'Full spectrum of industrial adhesives from proven manufacturers',
      'Primers and cleaning agents included in the supply',
      'Application systems from manual to robotic',
      'TDS + SDS documentation with every delivery',
    ],
    ctaCs: 'Poptejte dodávku',
    ctaEn: 'Request a delivery',
  },
  {
    slug: 'skoleni-technicka-podpora',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    nameCs: 'Školení a technická podpora',
    nameEn: 'Training & Technical Support',
    taglineCs: 'Výrobní tým, který ví co dělá, vyrábí méně zmetků.',
    taglineEn: 'A production team that knows what it is doing produces fewer defects.',
    descCs: `Sebelepší technologie selže, pokud ji operátoři nerozumějí. Školíme výrobní týmy v principech lepicí technologie: proč na povrchu záleží, jak správně aplikovat, co sledovat jako kontrolní bod kvality a jak rozpoznat vadný spoj ještě na lince.

Školení probíhají on-site nebo ve formátu workshopu (half-day / full-day). Obsah přizpůsobujeme konkrétnímu výrobnímu procesu a produktovému spektru zákazníka — žádné obecné přednášky z učebnice.

Po spuštění série poskytujeme technickou podporu: odpovídáme na dotazy, analyzujeme reklamace, pomáháme s troubleshootingem defektů. Cílem je, aby zákazník byl co nejdříve soběstačný — ne závislý na naší přítomnosti.`,
    descEn: `Even the best technology fails if operators do not understand it. We train production teams in the principles of adhesive technology: why surface preparation matters, how to apply correctly, what to monitor as quality checkpoints, and how to spot a defective bond on the line.

Training takes place on-site or in workshop format (half-day / full-day). Content is tailored to the specific production process and product range of the customer — no generic textbook lectures.

After series launch we provide ongoing technical support: answering queries, analysing warranty claims, helping troubleshoot defects. The goal is for the customer to become self-sufficient as quickly as possible — not dependent on our presence.`,
    benefitsCs: [
      'On-site nebo workshop školení přizpůsobené konkrétnímu procesu',
      'Praktický nácvik přípravy povrchu a aplikace',
      'Troubleshooting defektů a analýza reklamací',
      'Dokumenty pro výrobní instrukce (pracovní postup, kontrolní karta)',
    ],
    benefitsEn: [
      'On-site or workshop training tailored to the specific process',
      'Hands-on practice of surface preparation and application',
      'Defect troubleshooting and warranty claim analysis',
      'Documents for production instructions (work procedure, inspection card)',
    ],
    ctaCs: 'Poptejte školení',
    ctaEn: 'Request training',
  },
];
