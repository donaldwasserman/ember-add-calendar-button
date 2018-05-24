module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: ['ember'],
  extends: ['eslint:recommended', 'prettier', 'plugin:ember/recommended'],
  env: {
    browser: true
  },
  rules: {}
};
