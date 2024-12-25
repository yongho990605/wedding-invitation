import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  extends: ['prettier']
}).overrideRules({
  'vue/multi-word-component-names': 'off',
  'vue/block-order': [
    'error',
    {
      order: ['docs', 'template', 'script', 'style', 'i18n:not([locale=en])', 'i18n[locale=en]']
    }
  ],
  'vue/padding-line-between-blocks': ['error'],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal'],
      alphabetize: {
        order: 'asc'
      }
    }
  ]
})
