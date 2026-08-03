import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { technologies } from '../data/technologies';

/**
 * Kompletní sitemap — všechny statické stránky (CS+EN), detailní stránky
 * technologií a všechny publikované články znalostní báze.
 *
 * Vynechané záměrně: /dekujeme/, /en/thank-you/ (noindex) a 404.
 */
export async function GET(_context: APIContext): Promise<Response> {
  const site = 'https://www.kronteq.com';

  type Entry = { path: string; priority: string; changefreq: string };

  const staticPages: Entry[] = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/sluzby/', priority: '0.9', changefreq: 'monthly' },
    { path: '/produkty/', priority: '0.9', changefreq: 'monthly' },
    { path: '/technologie/', priority: '0.8', changefreq: 'monthly' },
    { path: '/znalostni-baze/', priority: '0.8', changefreq: 'weekly' },
    { path: '/odvetvi/', priority: '0.9', changefreq: 'monthly' },
    { path: '/faq/', priority: '0.7', changefreq: 'monthly' },
    { path: '/o-nas/', priority: '0.7', changefreq: 'monthly' },
    { path: '/kontakt/', priority: '0.9', changefreq: 'monthly' },
    { path: '/ochrana-osobnich-udaju/', priority: '0.3', changefreq: 'yearly' },

    { path: '/en/', priority: '1.0', changefreq: 'weekly' },
    { path: '/en/services/', priority: '0.9', changefreq: 'monthly' },
    { path: '/en/products/', priority: '0.9', changefreq: 'monthly' },
    { path: '/en/technology/', priority: '0.8', changefreq: 'monthly' },
    { path: '/en/knowledge-base/', priority: '0.8', changefreq: 'weekly' },
    { path: '/en/industries/', priority: '0.9', changefreq: 'monthly' },
    { path: '/en/faq/', priority: '0.7', changefreq: 'monthly' },
    { path: '/en/about/', priority: '0.7', changefreq: 'monthly' },
    { path: '/en/contact/', priority: '0.9', changefreq: 'monthly' },
    { path: '/en/privacy/', priority: '0.3', changefreq: 'yearly' },
  ];

  const technologyPages: Entry[] = technologies.flatMap(tech => [
    { path: `/technologie/${tech.slug}/`, priority: '0.7', changefreq: 'monthly' },
    { path: `/en/technology/${tech.slugEn}/`, priority: '0.7', changefreq: 'monthly' },
  ]);

  const articles = await getCollection('kb', ({ data }) => !data.draft);
  const kbPages: Entry[] = articles.map(article => {
    const slug = article.id.replace(/^(cs|en)\//, '');
    return {
      path: article.data.lang === 'en'
        ? `/en/knowledge-base/${slug}/`
        : `/znalostni-baze/${slug}/`,
      priority: '0.6',
      changefreq: 'monthly',
    };
  });

  const pages = [...staticPages, ...technologyPages, ...kbPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${site}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
