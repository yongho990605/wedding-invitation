// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    rootId: 'wedding-invitation',
    head: {
      title: '장용호 💗 최원비',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '장용호 그리고 최원비, 우리 결혼합니다' },
        { name: 'og:title', content: '장용호 💗 최원비' },
        { name: 'og:description', content: '장용호 그리고 최원비, 우리 결혼합니다' },
        { name: 'og:image', content: '/concept4/image5.jpg' }
      ],
      script: [
        {
          src: 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=rm6dda6xag',
          defer: true
        }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/icon', '@vueuse/nuxt'],
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  icon: {
    customCollections: [
      {
        prefix: 'shared',
        dir: './assets/icons'
      }
    ]
  }
})
