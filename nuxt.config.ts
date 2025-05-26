// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {enabled: true},
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@unocss/nuxt', '@nuxtjs/i18n', 'nuxt-shiki'],
  app: {
    head: {
      title: 'CSS Kit',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      ],
      link: [
        {rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.svg'},
      ]
    }
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/global.css'
  ],
  components: {
    dirs: [
      {
        path: '~/components/',
        pathPrefix: false
      }
    ]
  },
  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic', 'oblique']
    }
  },
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'ja',
    locales: [
      {code: 'ja', name: '🇯🇵 日本語', file: 'ja.json'},
      {code: 'en', name: '🇺🇸 English', file: 'en.json'},
      {code: 'ko', name: '🇰🇷 한국어', file: 'ko.json'},
    ],
    compilation: {
      strictMessage: false
    }
  },
  shiki: {
    defaultTheme: 'github-light-default',
    defaultLang: 'css'
  }
});