require('dotenv').config()
export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'pt-br',
    },
    title: 'Pdal',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Pdal - Aulas de Cycling pelo celular com os melhores professores.',
      },
      { hid: 'og:title', name: 'og:title', content: 'Pdal' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Pdal - Aulas de Cycling pelo celular com os melhores professores.',
      },
      { hid: 'og:url', name: 'og:url', content: 'https://pdal.com.br' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://pdal.com.br/img/Pdal-FB.jpg',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Pdal - Aulas de Cycling pelo celular com os melhores professores.. Conheça nossas iniciativas e baixe o nosso aplicativo!',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content:
          'Pdal - Aulas de Cycling pelo celular com os melhores professores.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://pdal.com.br/img/Pdal-FB.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://ajax.googleapis.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://assets.pdal.com.br',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://yt3.ggpht.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://i.ytimg.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://googleads.g.doubleclick.net',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://www.google.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://static.doubleclick.net',
      },
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
      },
      { src: 'https://code.jquery.com/jquery-3.5.1.min.js' },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js',
      },
    ],
  },
  loading: { color: '#f35062' },
  css: ['~/assets/styles/main.css', 'aos/dist/aos.css'],
  components: true,
  buildModules: [
    '@nuxtjs/dotenv',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    'nuxt-robots-module',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/gtm',
    '@nuxt/content',
    [
      'nuxt-lazy-load',
      {
        defaultImage: false,
        directiveOnly: true,
      },
    ],
  ],
  axios: {
    // proxy: true
  },
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/vuelidate.js' },
  ],
  content: {},
  build: {},
  optimizedImages: {
    optimizeImages: true,
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://pdal.com.br',
    cacheTime: 1000 * 60 * 15,
    routes: [
      '/',
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2020-11-04T13:30:00.000Z',
      },
    ],
  },
  gtm: {
    id: 'GTM-PML7NMN',
    pageTracking: true,
  },
  pwa: {
    manifest: {
      name: 'Pdal',
      theme_color: '#0f161d',
    },
    workbox: {
      enabled: false,
      cacheAssets: false,
      offline: false,
    },
  },
  googleFonts: {
    families: {
      'Open+Sans': [400, 700],
    },
  },
}
