import { defineConfig } from 'astro/config';
import AstroCompress from 'astro-compress';
import AstroTailwindPlugin from '@astrojs/tailwind';
import getTargetBrowsers from 'browserslist-to-esbuild';
import AstroPrefetch from '@astrojs/prefetch';
import AstroSitemap from '@astrojs/sitemap';
import AstroMdx from '@astrojs/mdx';
import AstroImage from '@astrojs/image';
import prettyCode from 'rehype-pretty-code';
import remarkEmoji from 'remark-emoji';
import remarkReadingTime from './scripts/remark-reading-time.js';
import { APP_CONFIG, COMPRESSION_CONFIG, REHYPE_PRETTY_COFIG } from './appConfig.js';

// use localhost url as the base when running dev server
const DEV_SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${DEV_SERVER_PORT}`;
const SCRIPT = process.env.npm_lifecycle_script || '';

const isProd = process.env.BUILD === 'production';
export default defineConfig({
  site: SCRIPT.includes('astro build') ? APP_CONFIG.SITE_URL : LOCALHOST_URL,
  integrations: [
    AstroTailwindPlugin({ config: { applyBaseStyles: false } }),
    AstroMdx({
      syntaxHighlight: false,
      extendDefaultPlugins: true,
      remarkPlugins: [remarkReadingTime, [remarkEmoji, { accessible: true }]],
      rehypePlugins: [[prettyCode, REHYPE_PRETTY_COFIG]],
    }),
    AstroImage({ serviceEntryPoint: '@astrojs/image/sharp', cacheDir: './node_modules/.cache' }),
    AstroPrefetch({ throttle: 3 }),
    AstroSitemap(),
    isProd && AstroCompress(COMPRESSION_CONFIG),
  ],
  server: ({ command }) => ({
    port: command === 'dev' ? DEV_SERVER_PORT : 4000,
    host: true,
  }),
  vite: {
    build: {
      target: getTargetBrowsers(),
      minify: isProd ? 'esbuild' : false,
    },
  },
});
