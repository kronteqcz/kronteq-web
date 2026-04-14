export interface Product {
  slug: string;
  icon: string; // SVG path data or emoji placeholder
  nameCs: string;
  nameEn: string;
  descCs: string;
  descEn: string;
  usesCs: string[];
  usesEn: string[];
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
    descCs: 'Polyuretanová, silikonová a MS polymerní tmeliva pro těsnění, vibrační tlumení a ochranu spár.',
    descEn: 'Polyurethane, silicone and MS polymer sealants for sealing, vibration damping and joint protection.',
    usesCs: ['Těsnění karoserií', 'Fasádní spáry', 'Průmyslová utěsnění'],
    usesEn: ['Body sealing', 'Facade joints', 'Industrial sealing'],
  },
];
