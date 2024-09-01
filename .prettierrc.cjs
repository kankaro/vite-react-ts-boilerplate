module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  importOrder: [
    '^(^react$|@react|react)',
    '^@reduxjs/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^@assets/(.*)$',
    '^@components/(.*)$',
    '^@store/(.*)$',
    '^@utils/(.*)$',
    '^@services/(.*)$',
    '^@features/(.*)$',
    '^@views/(.*)$',
    '^@styles/(.*)$',
    '^[./]',
  ],
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  overrides: [
    {
      files: ['*.json', '*.yml'],
      options: {
        tabWidth: 4,
      },
    },
  ],
};
