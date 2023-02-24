const prettierCmd = `prettier --loglevel warn --plugin-search-dir=. --cache --cache-strategy content --cache-location ./node_modules/.cache/.prettiercache --write`;
const stylelintCmd = `stylelint --max-warnings=0 --custom-formatter=node_modules/stylelint-formatter-pretty --aei --cache --cache-strategy content --cache-location ./node_modules/.cache/.stylelintcache --fix`;
const eslintCmd = `eslint --max-warnings=0 --format=pretty --cache --cache-strategy content --cache-location ./node_modules/.cache/.eslintcache`;

module.exports = {
  '**/*.{js,ts,mjs}': [eslintCmd, prettierCmd],
  '**/*.astro': [eslintCmd, stylelintCmd, prettierCmd],
  '**/*.css': [stylelintCmd, prettierCmd],
  '**/*.json': [prettierCmd],
  '**/!(*README).{md,mdx}': [eslintCmd, 'node ./scripts/last-mod-updater.js'],
};
