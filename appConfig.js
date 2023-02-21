import remarkEmoji from 'remark-emoji';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeHeadingsAutoLink from 'rehype-autolink-headings';
import rehypeSectionize from '@hbsnow/rehype-sectionize';
import rehypeExternalLinks from 'rehype-external-links';
import themeJSON from './src/theme/syntax-highlight.json';
import remarkReadingTime from './scripts/remark-reading-time.js';

export const APP_CONFIG = {
  SITE_URL: 'https://fatehak.dev',
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
      email: 'me@fatehak@@dev',
      linkedin: 'https://linkedin.com/in/fatehak',
      github: 'https://github.com/fatehak',
      behance: 'https://www.behance.net/fateh_ak_/projects',
    },
  },
  CLOUDFLARE_ANALYTICS_TOKEN: '829042926c0f40708468a2bfaddf496e',
};

export const COMPRESSION_CONFIG = {
  js: false,
  html: {
    removeAttributeQuotes: false,
  },
  img: false,
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

export const MDX_CONFIG = {
  syntaxHighlight: false,
  extendDefaultPlugins: true,
  remarkPlugins: [remarkReadingTime, [remarkEmoji, { accessible: true }]],
  rehypePlugins: [
    rehypeSlug,
    [rehypeHeadingsAutoLink, { test: ['h2', 'h3'] }],
    [
      rehypePrettyCode,
      {
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
      },
    ],
    [rehypeExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }],
    rehypeSectionize,
  ],
};
