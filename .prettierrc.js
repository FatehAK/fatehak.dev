module.exports = {
  plugins: ['./node_modules/prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        astroAllowShorthand: false,
      },
    },
  ],
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
};
