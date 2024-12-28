// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/icon', '@nuxt/eslint'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  eslint: {
    config: {
      standalone: true
    }
  }
})
