/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  printWidth: 160,
  importOrder: ['^@src/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'decorators-legacy', 'jsx'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};

module.exports = config;
