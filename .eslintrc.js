// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 0,
        'no-unused-vars': 0,
        'no-trailing-spaces': 0,
        'comma-dangle': 0,
        'spaced-comment': 0,
        'no-multi-spaces': 0,
        'no-multiple-empty-lines': 0,
        'camelcase': 0,
        'space-before-function-paren': 0,
        'func-call-spacing': 0,
        'padded-blocks': 0,
        'eqeqeq': 0,
        'comma-spacing': 0,
        'space-before-blocks': 0,
        'key-spacing': 0,
        'no-unneeded-ternary': 0,
        'no-tabs': 0
    }
}
