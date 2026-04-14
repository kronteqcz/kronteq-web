export interface Product {
  slug: string;
  icon: string; // SVG path data or emoji placeholder
  nameCs: string;
  nameEn: string;
  descCs: string;
  descEn: string;
  usesCs: string[];
  usesEn: string[];
  /** MPa range string, e.g. "20–40 MPa" */
  strengthRangeCs?: string;
  strengthRangeEn?: string;
  /** elongation range, e.g. "400–800 %" */
  elongationRange?: string;
  /** max continuous service temp */
  tempMaxC?: number;
}

export const products: Product[] = [
  {
    slug: 'strukturalni-lepidla',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    nameCs: 'Strukturální lepidla',
    nameEn: 'Structural Adhesives',
    descCs: 'Vysokopevnostní lepidla pro trvalé spoje kovů, plastů a kompozitů. Nahrazují svařování, nýtování a šroubování.',
    descEn: 'High-strength adhesives for permanent bonds of metals, plastics and composites. Replace welding, riveting and bolting.',
    usesCs: ['Karoserie vozidel', 'Konstrukce rámů', 'Sendvičové panely'],
    usesEn: ['Vehicle body panels', 'Frame structures', 'Sandwich panels'],
  },
  {
    slug: 'reaktivni-lepidla',
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    nameCs: 'Reaktivní lepidla',
    nameEn: 'Reactive Adhesives',
    descCs: 'Epoxidová, polyuretanová a MS polymerní lepidla s výjimečnou chemickou a tepelnou odolností.',
    descEn: 'Epoxy, polyurethane and MS polymer adhesives with exceptional chemical and thermal resistance.',
    usesCs: ['Elektronické sestaveení', 'Automobilové díly', 'Průmyslová výroba'],
    usesEn: ['Electronic assemblies', 'Automotive components', 'Industrial manufacturing'],
  },
  {
    slug: 'tavna-lepidla',
    icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
    nameCs: 'Tavná lepidla (Hot Melt)',
    nameEn: 'Hot Melt Adhesives',
    descCs: 'Termoplastická lepidla pro vysokorychlostní výrobní linky. Okamžitá pevnost bez čekání na vytvrzení.',
    descEn: 'Thermoplastic adhesives for high-speed production lines. Instant strength with no cure time.',
    usesCs: ['Obalový průmysl', 'Nábytkářství', 'Textilní výroba'],
    usesEn: ['Packaging industry', 'Furniture manufacturing', 'Textile production'],
  },
  {
    slug: 'kyanoakrylatova-lepidla',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    nameCs: 'Kyanoakrylátová lepidla',
    nameEn: 'Cyanoacrylate Adhesives',
    descCs: 'Okamžitá lepidla pro rychlé opravy a montáž. Vytvrzují sekundami při kontaktu s vlhkostí.',
    descEn: 'Instant adhesives for fast repairs and assembly. Cure in seconds upon contact with moisture.',
    usesCs: ['Montáž elektroniky', 'Medicínské pomůcky', 'Prototypy a opravy'],
    usesEn: ['Electronics assembly', 'Medical devices', 'Prototypes and repairs'],
  },
  {
    slug: 'anaerobi-lepidla',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    nameCs: 'Anaerobní lepidla',
    nameEn: 'Anaerobic Adhesives',
    descCs: 'Zajišťovače šroubů, nalisovací a těsnicí lepidla. Vytvrzují bez přístupu vzduchu v přítomnosti kovu.',
    descEn: 'Thread locking, retaining and sealing adhesives. Cure without air in the presence of metal.',
    usesCs: ['Zajišťování šroubů', 'Nalisovací spoje', 'Těsnění závitů'],
    usesEn: ['Thread locking', 'Retaining compounds', 'Thread sealing'],
  },
  {
    slug: 'tmeliva-a-utesnovace',
    icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
    nameCs: 'Tmeliva a utěsňovače',
    nameEn: 'Sealants',
    descCs: 'Polyuretanová, silikonová a MS polymerní tmeliva pro těsnění, vibrační tlumení a ochranu spár. Odolnost vůči UV, vlhkosti a chemikáliím — desítky let bez degradace.',
    descEn: 'Polyurethane, silicone and MS polymer sealants for sealing, vibration damping and joint protection. UV, moisture and chemical resistance — decades without degradation.',
    usesCs: ['Těsnění karoserií', 'Fasádní spáry', 'Průmyslová utěsnění', 'Strukturální zasklívání'],
    usesEn: ['Body sealing', 'Facade joints', 'Industrial sealing', 'Structural glazing'],
    tempMaxC: 300,
  },
  {
    slug: 'lepici-pasky-a-folie',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    nameCs: 'Lepicí pásky a fólie',
    nameEn: 'Bonding Tapes & Films',
    descCs: 'Oboustranné akrylátové a pěnové pásky pro montáž bez viditelných spojů. VHB (Very High Bond) pásky nahrazují šroubové spoje v automotive a elektronice — pevnost srovnatelná se strukturálními lepidly.',
    descEn: 'Double-sided acrylic and foam tapes for assembly without visible fasteners. VHB (Very High Bond) tapes replace mechanical fasteners in automotive and electronics — strength comparable to structural adhesives.',
    usesCs: ['Montáž plastových krytů', 'Přichycení displejů', 'Fasádní panely', 'Automobilové interiéry'],
    usesEn: ['Plastic cover assembly', 'Display attachment', 'Facade panels', 'Automotive interiors'],
    strengthRangeCs: '0,5–2,5 MPa (odlupová)',
    strengthRangeEn: '0.5–2.5 MPa (peel)',
    tempMaxC: 120,
  },
  {
    slug: 'primery-a-aktivatory',
    icon: 'M3 4a1 1 0 00-1 1v3a1 1 0 001 1h1v9a1 1 0 001 1h10a1 1 0 001-1V9h1a1 1 0 001-1V5a1 1 0 00-1-1H3zm2 4V5h10v3H5zm-1 2h12v8H4V10zm4 2a1 1 0 011-1h2a1 1 0 010 2H9a1 1 0 01-1-1z',
    nameCs: 'Primery a aktivátory',
    nameEn: 'Primers & Activators',
    descCs: 'Chemické prostředky pro zvýšení povrchové energie a zajištění adheze na nesnadno lepitelných substrátech (PP, PE, PTFE, lakované povrchy, korozivzdorná ocel). Primer je prevence selhání.',
    descEn: 'Chemical agents for increasing surface energy and ensuring adhesion on difficult-to-bond substrates (PP, PE, PTFE, coated surfaces, stainless steel). Primer is defect prevention.',
    usesCs: ['Plasty PP a PE', 'Lakované díly', 'Anodizovaný hliník', 'PTFE těsnění'],
    usesEn: ['PP and PE plastics', 'Coated parts', 'Anodised aluminium', 'PTFE seals'],
  },
  {
    slug: 'cistice-a-odmastovadla',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    nameCs: 'Čističe a odmašťovadla',
    nameEn: 'Cleaners & Degreasers',
    descCs: 'Průmyslová odmašťovadla na bázi IPA, acetonu, speciálních esterů nebo vodní báze. Bez správného odmaštění nemá žádné lepidlo šanci. Volba odmašťovadla závisí na substrátu a bezpečnostních požadavcích pracoviště.',
    descEn: 'Industrial degreasers based on IPA, acetone, specialist esters or water. Without proper degreasing no adhesive has a chance. Degreaser selection depends on the substrate and workplace safety requirements.',
    usesCs: ['Příprava kovových povrchů', 'Čištění plastů před lepením', 'Mezioperační čištění', 'Čistící prostředky pro optiku'],
    usesEn: ['Metal surface preparation', 'Plastic cleaning before bonding', 'Inter-process cleaning', 'Cleaning agents for optics'],
  },
];
