import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const kbCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/kb' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['cs', 'en']),
    translationKey: z.string(), // links CS ↔ EN equivalents
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum([
      'technologie',
      'produkty',
      'automotive',
      'letectvi',
      'elektronika',
      'stavebnictvi',
    ]),
    tags: z.array(z.string()).default([]),
    primaryKeyword: z.string(),
    readingTimeMinutes: z.number().optional(),
    heroImage: z.string().optional(), // in-article hero visual (SVG diagram, photo, etc.)
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  kb: kbCollection,
};
