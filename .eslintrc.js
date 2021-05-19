const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  extends: [
    'plugin:vue/recommended',
    // 'plugin:cypress/recommended',
    'standard'
  ],

  plugins: [
    'vue'
  ],

  globals: {
    ga: 'readonly',
    __statics: 'readonly',
    process: 'readonly',
    chrome: 'readonly'
    // If you are using a mobile development environment, uncomment these:
    // cordova: 'readonly',
    // Capacitor: 'readonly',
  },

  rules: {
    'arrow-parens': 'off',
    'generator-star-spacing': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': isProduction ? 'error' : 'warn',
    'no-debugger': isProduction ? 'error' : 'warn',
    'one-var': 'off',
    'prefer-promise-reject-errors': 'off',

    // Recommended
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',

    // Uncategorized
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/attributes-order': ['error', { alphabetical: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/no-reserved-component-names': ['error'],
    'vue/script-indent': ['error'],
    'vue/v-slot-style': ['error', 'shorthand']

    // Cypress
    // 'cypress/no-assigning-return-values': 'error',
    // 'cypress/no-unnecessary-waiting': 'error',
    // 'cypress/assertion-before-screenshot': 'warn',
    // 'cypress/no-force': 'warn',
    // 'cypress/no-async-tests': 'error'
  }
}
