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
    descCs: 'Lepicí systémy pro výrobu vozidel, karoserií, interiérů a pohonných systémů. Splňujeme požadavky OEM i Tier 1 dodavatelů.',
    descEn: 'Adhesive systems for vehicle manufacturing, bodywork, interiors and powertrain. Meeting OEM and Tier 1 supplier requirements.',
    challengesCs: [
      'Vysokoteplotní odolnost (motorový prostor)',
      'Vibrace a dynamické zatížení',
      'Lehká konstrukce — spojení různorodých materiálů',
      'Soulad s normami VDA a IATF 16949',
    ],
    challengesEn: [
      'High-temperature resistance (engine bay)',
      'Vibration and dynamic loading',
      'Lightweight design — bonding dissimilar materials',
      'Compliance with VDA and IATF 16949 standards',
    ],
  },
  {
    slug: 'elektronika',
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    nameCs: 'Elektronika',
    nameEn: 'Electronics',
    descCs: 'Lepicí a zapouzdřovací systémy pro elektronické součástky, PCB a senzory. Odolnost vůči vlhkosti, vibracím a teplotě.',
    descEn: 'Adhesive and encapsulation systems for electronic components, PCBs and sensors. Resistance to moisture, vibration and temperature.',
    challengesCs: [
      'Tepelné vedení a izolace',
      'Miniaturizace — přesná aplikace',
      'Odolnost vůči vlhkosti a korozivním prostředím',
      'RoHS a halogen-free požadavky',
    ],
    challengesEn: [
      'Thermal conductivity and insulation',
      'Miniaturisation — precise application',
      'Resistance to moisture and corrosive environments',
      'RoHS and halogen-free requirements',
    ],
  },
  {
    slug: 'stavebnictvi',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    nameCs: 'Stavebnictví',
    nameEn: 'Construction',
    descCs: 'Konstrukční tmeliva a lepidla pro fasády, okna, podlahy a průmyslové stavby. Trvalost desítky let.',
    descEn: 'Structural sealants and adhesives for facades, windows, floors and industrial buildings. Durability for decades.',
    challengesCs: [
      'UV odolnost a povětrnostní podmínky',
      'Pohyb a dilatace stavebních prvků',
      'Lepení na různé stavební materiály',
      'Požadavky na požární odolnost',
    ],
    challengesEn: [
      'UV resistance and weather conditions',
      'Movement and expansion of building elements',
      'Bonding to various construction materials',
      'Fire resistance requirements',
    ],
  },
  {
    slug: 'prumyslova-vyroba',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    nameCs: 'Průmyslová výroba',
    nameEn: 'Industrial Manufacturing',
    descCs: 'Lepicí systémy pro výrobní linky, montáž strojů a průmyslovou automatizaci. Optimalizace pro rychlost a spolehlivost.',
    descEn: 'Adhesive systems for production lines, machine assembly and industrial automation. Optimised for speed and reliability.',
    challengesCs: [
      'Vysoká produktivita — krátké časy vytvrzení',
      'Automatizovaná aplikace (robot, dispensing)',
      'Konzistentní kvalita v sériové výrobě',
      'Chemická odolnost provozního prostředí',
    ],
    challengesEn: [
      'High productivity — short cure times',
      'Automated application (robot, dispensing)',
      'Consistent quality in series production',
      'Chemical resistance in operating environment',
    ],
  },
];
