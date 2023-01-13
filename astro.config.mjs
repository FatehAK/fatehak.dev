import { defineConfig } from 'astro/config';
import { paramCase } from 'change-case';
import AstroReactPlugin from '@astrojs/react';
import AstroCompress from 'astro-compress';
import ViteLinariaPlugin from '@linaria/vite';
import getTargetBrowsers from 'browserslist-to-esbuild';
import { APP_CONFIG, COMPRESSION_CONFIG } from './appConfig';

export default defineConfig({
  site: APP_CONFIG.PROD_BASE_URL,
  integrations: [AstroReactPlugin(), AstroCompress(COMPRESSION_CONFIG)],
  server: { port: 3000, host: true },
  vite: {
    plugins: [
      ViteLinariaPlugin({
        include: ['**/*.styles.js', '**/*.jsx'],
        classNameSlug: (hash, title) => `${paramCase(title)}_${hash}`,
      }),
    ],
    build: {
      target: getTargetBrowsers(),
      rollupOptions: {
        output: {
          entryFileNames: '[name].[hash].js',
          chunkFileNames: file => `chunks/${paramCase(file.name)}.[hash].js`,
          assetFileNames: file => `assets/${paramCase(file.name.split('.')[0])}.[hash].[ext]`,
        },
      },
    },
  },
});
