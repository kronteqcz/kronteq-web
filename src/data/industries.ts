export interface Industry {
  slug: string;
  icon: string;
  nameCs: string;
  nameEn: string;
  descCs: string;
  descEn: string;
  challengesCs: string[];
  challengesEn: string[];
}

export const industries: Industry[] = [
  {
    slug: 'automobilovy-prumysl',
    icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h2m6 0V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414A1 1 0 0121 11.414V16l-2 2h-2m-6 0h6',
    nameCs: 'Automobilový průmysl',
    nameEn: 'Automotive',
    descCs: 'Karosářské panely, lepení skel pro tuhost karoserie, spojování plast-kov. Lehké konstrukce pro EV a snížení spotřeby. Splňujeme požadavky OEM i Tier 1 dodavatelů.',
    descEn: 'Body panels, windscreen bonding for body stiffness, plastic-metal joining. Lightweight structures for EV and fuel reduction. Meeting OEM and Tier 1 supplier requirements.',
    challengesCs: [
      'Lehká konstrukce — spojení různorodých materiálů (kov, plast, kompozit)',
      'Vysokoteplotní odolnost v motorovém prostoru',
      'Vibrace, dynamické zatížení a NVH tlumení',
      'Soulad s normami VDA a IATF 16949',
    ],
    challengesEn: [
      'Lightweight design — bonding dissimilar materials (metal, plastic, composite)',
      'High-temperature resistance in the engine bay',
      'Vibration, dynamic loading and NVH damping',
      'Compliance with VDA and IATF 16949 standards',
    ],
  },
  {
    slug: 'letecky-prumysl',
    icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
    nameCs: 'Letecký průmysl',
    nameEn: 'Aerospace',
    descCs: 'Kompozitní křídla a trup, náhrada nýtů pro snížení hmotnosti. Lepení zajišťuje rovnoměrný přenos napětí a eliminuje koncentraci sil v bodových spojích.',
    descEn: 'Composite wings and fuselage, replacement of rivets for weight reduction. Bonding ensures uniform stress distribution and eliminates stress concentrations at point joints.',
    challengesCs: [
      'Extrémní teplotní cykly (−55 °C až +150 °C)',
      'Náhrada nýtů — snížení hmotnosti konstrukce',
      'Certifikace pro letecké aplikace',
      'Odolnost vůči vibracím a aeroelastickému zatížení',
    ],
    challengesEn: [
      'Extreme thermal cycles (−55 °C to +150 °C)',
      'Rivet replacement — structural weight reduction',
      'Certification for aerospace applications',
      'Resistance to vibration and aeroelastic loading',
    ],
  },
  {
    slug: 'elektronika',
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    nameCs: 'Elektronika',
    nameEn: 'Electronics',
    descCs: 'Displeje, fixace baterií, odvod tepla (teplovodivá lepidla). Zapouzdřovací systémy pro elektronické součástky a PCB. Odolnost vůči vlhkosti, vibracím a teplotním šokům.',
    descEn: 'Displays, battery fixation, heat dissipation (thermally conductive adhesives). Encapsulation systems for electronic components and PCBs. Resistance to moisture, vibration and thermal shock.',
    challengesCs: [
      'Tepelné vedení — odvod tepla z výkonových prvků',
      'Miniaturizace — přesná dávkovatelná aplikace',
      'Odolnost vůči vlhkosti a korozivním prostředím',
      'RoHS a halogen-free požadavky',
    ],
    challengesEn: [
      'Thermal management — heat dissipation from power components',
      'Miniaturisation — precise dispensable application',
      'Resistance to moisture and corrosive environments',
      'RoHS and halogen-free requirements',
    ],
  },
  {
    slug: 'stavebnictvi',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    nameCs: 'Stavebnictví',
    nameEn: 'Construction',
    descCs: 'Strukturální zasklívání, fasádní panely bez viditelných šroubů. Konstrukční tmeliva pro fasády, okna a průmyslové stavby. Trvalost desítky let v náročných klimatických podmínkách.',
    descEn: 'Structural glazing, facade panels without visible screws. Structural sealants for facades, windows and industrial buildings. Durability for decades in demanding climatic conditions.',
    challengesCs: [
      'UV odolnost a povětrnostní podmínky po celou životnost',
      'Pohyb a dilatace stavebních prvků',
      'Estetika — neviditelné spoje bez šroubů a nýtů',
      'Požadavky na požární odolnost',
    ],
    challengesEn: [
      'UV resistance and weather conditions throughout service life',
      'Movement and expansion of building elements',
      'Aesthetics — invisible joints without screws and rivets',
      'Fire resistance requirements',
    ],
  },
];
