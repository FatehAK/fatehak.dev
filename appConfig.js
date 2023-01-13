export const APP_CONFIG = {
  PROD_BASE_URL: 'https://fatehak.pages.dev',
  META: {
    name: 'fatehak.dev',
    author: 'FatehAK',
    description: 'Curious About Code',
    keywords: 'fatehak, developer, frontend developer, ui',
    banner: '',
    app: {
      background: '#26323b',
    },
    type: 'website',
    social: {
      twitter: '@Fateh_AK_',
    },
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
