export interface Technology {
  slug: string;
  slugEn: string;
  icon: string;
  nameCs: string;
  nameEn: string;
  perexCs: string;
  perexEn: string;
  keywordsCs: string[];
  keywordsEn: string[];
  readingTimeMinutes: number;
}

export const technologies: Technology[] = [
  {
    slug: 'lepeni-prehled',
    slugEn: 'bonding-overview',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    nameCs: 'Konstrukční lepení — přehled',
    nameEn: 'Structural Bonding — Overview',
    perexCs: 'Anatomie lepeného spoje, princip adheze a koheze, jak lepidlo přenáší zátěž a proč rovnoměrné rozložení napětí mění pravidla konstrukčního spojování.',
    perexEn: 'Anatomy of an adhesive bond, the principle of adhesion and cohesion, how an adhesive transfers load, and why uniform stress distribution changes the rules of structural joining.',
    keywordsCs: ['konstrukční lepení', 'adheze', 'koheze', 'pevnost spoje', 'přenos napětí'],
    keywordsEn: ['structural bonding', 'adhesion', 'cohesion', 'joint strength', 'stress transfer'],
    readingTimeMinutes: 7,
  },
  {
    slug: 'typy-lepidel',
    slugEn: 'adhesive-types',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    nameCs: 'Typy lepidel: PUR, epoxid, MMA, CA, silikon',
    nameEn: 'Adhesive Types: PUR, Epoxy, MMA, CA, Silicone',
    perexCs: 'Scatter diagram pevnost × pružnost, rozhodovací strom a klíčové parametry pro výběr správného lepidla pro konkrétní substráty, prostředí a výrobní podmínky.',
    perexEn: 'Strength × elongation scatter diagram, decision tree and key parameters for selecting the right adhesive for specific substrates, environment and production conditions.',
    keywordsCs: ['PUR lepidlo', 'epoxidové lepidlo', 'MMA akrylát', 'výběr lepidla', 'spektrum lepidel'],
    keywordsEn: ['PUR adhesive', 'epoxy adhesive', 'MMA acrylate', 'adhesive selection', 'adhesive spectrum'],
    readingTimeMinutes: 9,
  },
  {
    slug: 'hybridni-spoje',
    slugEn: 'hybrid-joints',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    nameCs: 'Hybridní spoje: weld-bonding a rivet-bonding',
    nameEn: 'Hybrid Joints: Weld-Bonding & Rivet-Bonding',
    perexCs: 'Kombinace chemické vazby a mechanické fixace překonává obě metody samostatně. Jak navrhovat weld-bonding a rivet-bonding pro automotive, letectví a průmyslové aplikace.',
    perexEn: 'Combining chemical bonding with mechanical fastening outperforms either method alone. How to design weld-bonding and rivet-bonding for automotive, aerospace and industrial applications.',
    keywordsCs: ['hybridní spoje', 'weld-bonding', 'rivet-bonding', 'svár a lepení', 'nýt a lepení'],
    keywordsEn: ['hybrid joints', 'weld-bonding', 'rivet-bonding', 'weld and bond', 'rivet and bond'],
    readingTimeMinutes: 7,
  },
  {
    slug: 'priprava-povrchu',
    slugEn: 'surface-preparation',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    nameCs: 'Příprava povrchu pro lepení',
    nameEn: 'Surface Preparation for Bonding',
    perexCs: '90 % selhání lepeného spoje způsobuje příprava povrchu — ne lepidlo. Tři kroky od mechanického čištění přes odmašťování až po aktivaci plazmou nebo primerem.',
    perexEn: '90% of adhesive bond failures are caused by surface preparation — not the adhesive. Three steps from mechanical cleaning through degreasing to activation by plasma or primer.',
    keywordsCs: ['příprava povrchu lepení', 'odmašťování', 'plazma aktivace', 'primer pro lepení', 'povrchová energie'],
    keywordsEn: ['surface preparation bonding', 'degreasing', 'plasma activation', 'adhesive primer', 'surface energy'],
    readingTimeMinutes: 8,
  },
];
