module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attributes-order': 'warn',
    'vue/order-in-components': 'warn'
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier']
}
