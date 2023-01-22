export const APP_CONFIG = {
  SITE_URL: 'https://fatehak.pages.dev',
  META: {
    title: 'Fateh • Hello World!',
    description: 'Front-End Engineer, Open Sourcerer',
    keywords: 'fatehak, developer, front-end engineer, ui',
    banner: '',
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
