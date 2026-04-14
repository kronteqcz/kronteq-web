import { defineCollection, z } from 'astro:content';

const kbCollection = defineCollection({
  type: 'content',
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
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  kb: kbCollection,
};
