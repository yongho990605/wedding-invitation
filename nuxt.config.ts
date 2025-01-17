// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  app: {
    rootId: 'wedding-invitation',
    head: {
      title: '장용호 💗 최원비',
      meta: [
        { charset: 'utf-8' },
        { name: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '장용호 그리고 최원비, 우리 결혼합니다' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '장용호 💗 최원비' },
        { property: 'og:description', content: '장용호 그리고 최원비, 우리 결혼합니다' },
        { property: 'og:image', content: import.meta.env.NUXT_APP_BASE_URL + 'images/concept4/image5.jpg' },
        { property: 'og:url', content: import.meta.env.NUXT_APP_BASE_URL }
      ],
      script: [
        {
          src: 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=rm6dda6xag',
          defer: true
        }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/icon', '@vueuse/nuxt', '@nuxtjs/i18n'],
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  icon: {
    customCollections: [{ prefix: 'shared', dir: './assets/icons' }]
  },
  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    locales: [
      { code: 'ko', file: 'ko.json' },
      { code: 'en', file: 'en.json' },
      { code: 'ja', file: 'ja.json' }
    ],
    lazy: true,
    defaultLocale: 'ko'
  }
})
