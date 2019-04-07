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
    'key-spacing':'off',
    'indent':'off',
    'space-before-function-paren':'off',
    'space-infix-ops':'off',
    'comma-spacing':'off',
    'arrow-spacing':'off',
    'eol-last':'off',
    'no-trailing-spaces':'off',
    'object-curly-spacing':'off',
    'comma-dangle':'off',
    'space-before-blocks':'off'

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
