module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // custom rules
    'eol-last': 'off',
    'space-before-function-paren': 'off',
    'semi': 'off',
    'quotes': 'off',
    'no-unused-vars': 'off',
    'indent': 'off',
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'block-spacing': 'off',
    'space-before-blocks': 'off',
    'spaced-comment': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
