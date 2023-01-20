module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
  },
};
