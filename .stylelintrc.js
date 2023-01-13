const propertyOrder = require('stylelint-config-clean-order');

// Overwrite empty line threshold
propertyOrder.rules['order/properties-order'][1].unspecified = 'bottom';
propertyOrder.rules['order/properties-order'][1].emptyLineMinimumPropertyThreshold = 25;

module.exports = {
  defaultSeverity: 'warning',
  reportDescriptionlessDisables: true,
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-declaration-block-no-ignored-properties', 'stylelint-order'],
  rules: {
    ...propertyOrder.rules,
    'plugin/declaration-block-no-ignored-properties': true,
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    'custom-property-empty-line-before': 'never',
  },
  overrides: [
    {
      files: '**/*.astro',
      customSyntax: 'postcss-html',
    },
    {
      files: '**/*.{styles.js,jsx}',
      customSyntax: '@stylelint/postcss-css-in-js',
      rules: {
        'function-url-quotes': 'never',
        'property-no-vendor-prefix': true,
        'string-no-newline': true,
        'value-no-vendor-prefix': true,
        'no-empty-source': null,
        'no-extra-semicolons': null,
        // /* pcss-lin */ placeholder comments are added during parsing
        'comment-empty-line-before': [
          'always',
          {
            except: ['first-nested'],
            ignore: ['stylelint-commands'],
            ignoreComments: [/pcss-lin/],
          },
        ],
        //  '//' comments create unknown word issues while linting. Force using /* */
        'no-invalid-double-slash-comments': true,
      },
    },
  ],
};
