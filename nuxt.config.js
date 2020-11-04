export default {
  target: 'static',
  head: {
    title: 'Pdal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '000000' },
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
        content: 'summary_large_image',
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
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
      },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js',
      },
    ],
  },
  css: ['~/assets/styles/main.css', 'aos/dist/aos.css'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/google-fonts'],
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  plugins: [{ src: '@/plugins/aos.js', mode: 'client' }],
  content: {},
  build: {},
  googleFonts: {
    families: {
      'Open+Sans': [400, 700],
    },
  },
}