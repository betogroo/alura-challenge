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
    'vue/order-in-components': 'warn',
    'vue/prop-name-casing': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/require-prop-types': 'warn',
    'vue/v-bind-style': 'warn',
    'vue/v-on-style': 'warn',
    'vue/match-component-file-name': 'warn',
    'vue/require-name-property': 'warn'
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier']
}
