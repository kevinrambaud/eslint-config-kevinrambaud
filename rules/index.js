module.exports = {
  env: {
    es6: true,
    jest: true,
    mocha: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }]
  }
};
