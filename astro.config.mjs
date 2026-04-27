import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [mdx()],
  adapter: node({ mode: 'standalone' }),
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
