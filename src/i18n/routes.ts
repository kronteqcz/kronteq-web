import { technologies } from '../data/technologies';

/**
 * Mapa ekvivalentních cest CS ↔ EN.
 * Používá se pro hreflang alternates (BaseLayout), přepínač jazyka (Header)
 * a generování sitemapy.
 *
 * Detailní stránky (technologie, KB články) si alternativu předávají
 * explicitně přes prop `altPath` — jejich páry vycházejí z dat
 * (`technologies.slug/slugEn`, resp. `translationKey` u KB kolekce).
 */
export const staticRoutePairs: ReadonlyArray<readonly [string, string]> = [
  ['/', '/en/'],
  ['/sluzby/', '/en/services/'],
  ['/produkty/', '/en/products/'],
  ['/technologie/', '/en/technology/'],
  ['/znalostni-baze/', '/en/knowledge-base/'],
  ['/odvetvi/', '/en/industries/'],
  ['/o-nas/', '/en/about/'],
  ['/kontakt/', '/en/contact/'],
  ['/faq/', '/en/faq/'],
  ['/ochrana-osobnich-udaju/', '/en/privacy/'],
] as const;

/** Páry detailních stránek technologií, odvozené z dat. */
export const technologyRoutePairs: ReadonlyArray<readonly [string, string]> = technologies.map(
  t => [`/technologie/${t.slug}/`, `/en/technology/${t.slugEn}/`] as const,
);

const allPairs = [...staticRoutePairs, ...technologyRoutePairs];

const csToEn = new Map(allPairs.map(([cs, en]) => [cs, en]));
const enToCs = new Map(allPairs.map(([cs, en]) => [en, cs]));

function normalize(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

/**
 * Vrátí ekvivalentní cestu v druhém jazyce, nebo `undefined`,
 * pokud pro danou cestu ekvivalent neznáme.
 */
export function alternatePath(pathname: string, lang: 'cs' | 'en'): string | undefined {
  const p = normalize(pathname);
  return lang === 'en' ? enToCs.get(p) : csToEn.get(p);
}

/** Fallback pro přepínač jazyka — homepage druhé jazykové verze. */
export function languageHomeHref(lang: 'cs' | 'en'): string {
  return lang === 'en' ? '/' : '/en/';
}
