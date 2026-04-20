import { defineConfig } from 'astro/config';

// GitHub Pages deployment: using the `metricmaker.github.io` repo, which
// serves from the root of https://metricmaker.github.io/ — no base path.
export default defineConfig({
  site: 'https://metricmaker.github.io',
  build: {
    assets: '_assets',
  },
  compressHTML: true,
});
