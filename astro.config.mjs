import { defineConfig } from 'astro/config';
import AstroCompress from 'astro-compress';
import AstroTailwindPlugin from '@astrojs/tailwind';
import getTargetBrowsers from 'browserslist-to-esbuild';
import AstroPrefetch from '@astrojs/prefetch';
import AstroSitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import { APP_CONFIG, PWA_CONFIG, COMPRESSION_CONFIG } from './appConfig.js';

const isProd = process.env.BUILD === 'production';
export default defineConfig({
  site: APP_CONFIG.SITE_URL,
  integrations: [
    AstroTailwindPlugin({ config: { applyBaseStyles: false } }),
    AstroPrefetch({ throttle: 3 }),
    AstroSitemap(),
    AstroPWA(PWA_CONFIG),
    isProd && AstroCompress(COMPRESSION_CONFIG),
  ],
  server: ({ command }) => ({ port: command === 'dev' ? 3000 : 4000, host: true }),
  build: {
    format: 'file',
  },
  vite: {
    build: {
      target: getTargetBrowsers(),
      minify: isProd ? 'esbuild' : false,
      sourcemap: isProd ? 'hidden' : true,
    },
  },
});
