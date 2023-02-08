import themeJSON from './src/theme/syntax-highlight.json';

export const APP_CONFIG = {
  SITE_URL: 'https://fatehak.pages.dev',
  META: {
    title: 'FatehAK - Front-End Engineer, Open Sourcerer',
    description: 'Software Engineer. Love engineering clean and performant web applications',
    appName: 'fatehak.dev',
    appBackground: '#101822',
  },
  USER: {
    name: 'FatehAK',
    shortName: 'Fateh',
    social: {
      twitter: '@Fateh_AK_',
      email: 'fa7ehak@gmail@@com',
      linkedin: 'https://linkedin.com/in/fatehak',
      github: 'https://github.com/fatehak',
      behance: 'https://www.behance.net/fateh_ak_/projects',
    },
  },
  CLOUDFLARE_ANALYTICS_TOKEN: '7f556488383a4b9fb52323be73ba0485',
};

export const COMPRESSION_CONFIG = {
  js: false,
  html: {
    removeAttributeQuotes: false,
  },
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

export const REHYPE_PRETTY_COFIG = {
  keepBackground: false,
  theme: themeJSON,
  tokensMap: {
    // for inline code blocks
    fn: 'entity.name.function',
  },
  onVisitLine(node) {
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    // each word node has no className by default.
    node.properties.className = ['word'];
  },
};
