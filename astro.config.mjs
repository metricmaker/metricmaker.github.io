import { defineConfig } from 'astro/config';

// Production site: served at www.metricandmaker.com via GitHub Pages
// with a custom domain. The CNAME file in /public/ tells Pages which
// domain to use; this `site` setting drives canonical URLs in <head>,
// sitemaps, and any internal absolute links.
export default defineConfig({
  site: 'https://www.metricandmaker.com',
  build: {
    assets: '_assets',
  },
  compressHTML: true,
});
