import tseslint from 'typescript-eslint';

import rootConfig from '../../eslint.config.mjs';

export default tseslint.config(rootConfig, {
  rules: {
    '@typescript-eslint/no-extraneous-class': 'off',
  },
});
