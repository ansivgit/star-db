module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-body-style': ['off', 'as-needed'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': ['off', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-one-expression-per-line': ['off', { allow: 'literal' }],
    'react/destructuring-assignment': ['off', 'always'],
    // quotes: ['off', 'single'],
  },
};
