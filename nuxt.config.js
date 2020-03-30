import messages from './locales'
import getCauses from './services/getCauses'
import { MAIN_TITLE, MAIN_DESCRIPTION, SOCIAL_DESCRIPTION } from './config'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff">
   */
  head: {
    title: `${MAIN_TITLE} – ${MAIN_DESCRIPTION}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: MAIN_DESCRIPTION
      },

      { name: 'og:title', content: MAIN_TITLE },
      { name: 'og:description', content: SOCIAL_DESCRIPTION },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://softwaredonation.org/' },
      {
        name: 'og:image',
        content: 'https://softwaredonation.org/softwaredonation.png'
      },

      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:title',
        content: MAIN_TITLE
      },
      { name: 'twitter:description', content: SOCIAL_DESCRIPTION },
      {
        name: 'twitter:image',
        content: 'https://softwaredonation.org/softwaredonation.png'
      },
      { name: 'twitter:image:alt', content: MAIN_TITLE },

      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#3183c8' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        rel: 'icon',
        type: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'mask-icon', color: '#3183c8', href: '/safari-pinned-tab.svg' },
      {
        rel: 'stylesheet',
        href: '//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css',
        type: 'text/css'
      }
    ],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '../assets/styles/main.scss', lang: 'scss' }],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue2-smooth-scroll', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-159943888-1'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-i18n'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  styleResources: {
    scss: ['assets/styles/_variables.scss']
  },

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages
    }
  },

  generate: {
    routes: () => {
      return getCauses().map((item) => {
        return `/${item.id}`
      })
    }
  }
}
