import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  extends: ['prettier']
})
  .override('eslint-plugin-vue', {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/block-order': [
        'error',
        { order: ['docs', 'template', 'script', 'style', 'i18n:not([locale=en])', 'i18n[locale=en]'] }
      ],
      'vue/padding-line-between-blocks': ['error']
    }
  })
  .override('eslint-plugin-import', {
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          alphabetize: { order: 'asc' }
        }
      ]
    }
  })
