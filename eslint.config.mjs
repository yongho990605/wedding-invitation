import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default await createConfigForNuxt({
  files: ['**/*.{js,ts,vue}'],
  extends: ['prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/block-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/padding-line-between-blocks': ['error'],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 1,
        ignores: []
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  },
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  }
})
