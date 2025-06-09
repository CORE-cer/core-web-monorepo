import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

import baseConfig from '../../eslint.config.mjs';

export default tseslint.config(
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.recommended,
  baseConfig,
  {
    languageOptions: { ...reactPlugin.configs.flat.recommended.languageOptions },
    rules: {
      'react/prop-types': 'off',
    },
  }
);
