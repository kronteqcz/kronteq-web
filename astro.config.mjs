import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [mdx()],
  adapter: vercel(),
  site: 'https://www.kronteq.com',
  output: 'hybrid',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
