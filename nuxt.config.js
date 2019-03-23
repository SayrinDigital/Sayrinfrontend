const pkg = require('./package')


module.exports = {
  mode: 'universal',
  server: {
    port: 3500, // default: 3000
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "Sayrin - Agencia Digital",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "La mezcla perfecta para hacer de tu marca algo increíble e innovador, trabajando con nuestras herramientas para impulsarte y diferenciarte de tu competencia." },
      { hid: 'og-title', property: 'og:title', content: 'Sayrin - Agencia Digital' },
      { hid: 'og-sitename', property: 'og:site_name', content: 'Sayrin - Agencia Digital' },
      { hid: 'og-description', property: 'og:description', content: 'La mezcla perfecta para hacer de tu marca algo increíble e innovador, trabajando con nuestras herramientas para impulsarte y diferenciarte de tu competencia.' },
      { hid: 'og-url', name: 'og:url', content: 'https://sayrin.cl/'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,900' }
    ],
    script: [
      { src: '/js/salesiq.js', body: true },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fa5951' },

  /*
  ** Global CSS
  */
  css: [
    'uikit/dist/css/uikit.css', '@/assets/style.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/uikit.js', ssr: false },
    {src: '~/plugins/waypoints.js', ssr: false },
    {src: '~/plugins/smoothscroll.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
     id: 'UA-115640865-2'
   }],
   '@nuxtjs/sitemap'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

    extend(config, ctx) {

    }
  }
}
