const getImportGroups = () => {
  const external = ['react', '@linaria/+(core|react)'];
  const internal = [
    'layouts/**',
    'pages/**',
    'components/**',
    'context/**',
    'utils/**',
    'theme/**',
    'constants/**',
    'assets/**',
  ];
  return external
    .map(pattern => ({ pattern, group: 'external', position: 'before' }))
    .concat(
      internal.map(pattern => ({
        pattern,
        group: 'internal',
        position: 'before',
      }))
    );
};

module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    'semistandard',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'global-require': 'off',
    'no-restricted-exports': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
    'sort-imports': 'off', // turned off in favour of import/order rule
    'import/order': [
      'error',
      {
        'newlines-between': 'ignore',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: getImportGroups(),
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['^virtual:', '^astro:'] }],
    'promise/always-return': ['error', { ignoreLastCallback: true }],
  },
  plugins: ['only-warn'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: false,
      },
      alias: {
        map: [
          ['layout', './src/layouts'],
          ['pages', './src/pages'],
          ['components', './src/components'],
          ['utils', './src/utils'],
          ['theme', './src/theme'],
          ['constants', './src/constants'],
          ['assets', './src/assets'],
          ['appConfig', './appConfig'],
        ],
        extensions: ['.js', '.jsx', '.json', '.astro'],
      },
    },
  },
};
