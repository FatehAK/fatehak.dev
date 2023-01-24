export const APP_CONFIG = {
  SITE_URL: 'https://fatehak.pages.dev',
  META: {
    title: 'FatehAK - Front-End Engineer, Open Sourcerer',
    description: 'Front-End Engineer, Open Sourcerer',
    keywords: 'fatehak, developer, front-end engineer, ui',
    banner: 'banner.png',
    appName: 'fatehak.dev',
    appBackground: '#101822',
  },
  USER: {
    name: 'FatehAK',
    shortName: 'Fateh',
    social: {
      twitter: '@Fateh_AK_',
      email: 'fa7ehak@gmail.com',
      linkedin: 'https://linkedin.com/in/fatehak',
      github: 'https://github.com/fatehak',
    },
  },
  CLOUDFLARE_ANALYTICS_TOKEN: '7f556488383a4b9fb52323be73ba0485',
};

export const PWA_CONFIG = {
  manifest: {
    name: APP_CONFIG.META.appName,
    short_name: APP_CONFIG.META.appName,
    description: APP_CONFIG.META.description,
    background_color: APP_CONFIG.META.appBackground,
    theme_color: APP_CONFIG.META.appBackground,
    start_url: '.',
    orientation: 'any',
    display: 'standalone',
    includeAssets: ['favicon.ico', 'robots.txt', 'icons/*.png', 'icons/*.svg'],
    icons: [
      {
        src: '/icons/icon-512-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icons/logo.svg',
        sizes: '48x48 72x72 96x96 128x128 256x256 512x512',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
    ],
  },
  registerType: 'prompt',
  workbox: {
    sourcemap: false,
    cleanupOutdatedCaches: true,
    maximumFileSizeToCacheInBytes: 4194304,
  },
};

export const COMPRESSION_CONFIG = {
  js: false,
  img: {
    png: { quality: 100 },
    jpeg: { quality: 100 },
    jpg: { quality: 100 },
    gif: { animated: true },
  },
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false, // https://github.com/svg/svgo/issues/1128
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
        },
      },
    ],
  },
  logger: 0,
};
