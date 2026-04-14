import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.kronteq.com',
  integrations: [],
  output: 'static',
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
