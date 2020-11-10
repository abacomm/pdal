<template>
  <div>
    <nav id="fixed-nav" class="fixed-nav">
      <div class="container">
        <a class="navbar-brand" href="#" title="Voltar ao início"
          ><img
            class="img-logo-pdal"
            src="~/assets/img/logo-pdal-black.svg"
            alt="Pdal logo"
            width="110"
        /></a>
        <button
          id="navbar-toggle-fixed"
          class="navbar-toggler-dark"
          type="button"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="submenu" class="submenu">
          <a
            class="nav-item nav-link anchor"
            title="Funcionalidades"
            href="#features-section"
            >Funcionalidades</a
          >
          <a
            class="nav-item nav-link anchor"
            title="Depoimentos"
            href="#testimonials-section"
            >Depoimentos</a
          >
          <a
            class="nav-item nav-link anchor"
            title="Baixe o aplicativo"
            href="#cta-section"
            >Baixe o aplicativo</a
          >
          <a
            class="nav-item nav-link anchor"
            title="Fique por dentro"
            href="#newsletter-section"
            >Fique por dentro</a
          >
        </div>
      </div>
    </nav>
    <header class="header">
      <div class="container">
        <!-- NAVBAR -->
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="#" title="Voltar ao início"
            ><img
              class="img-logo-pdal"
              src="~/assets/img/logo-pdal.svg"
              alt="Pdal logo"
              width="110"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            id="navbarNavAltMarkup"
            class="navbar-collapse justify-content-md-end"
          >
            <div class="navbar-nav mt-4 mt-lg-0">
              <a class="nav-item nav-link anchor" href="#features-section"
                >Funcionalidades</a
              >
              <a class="nav-item nav-link anchor" href="#testimonials-section"
                >Depoimentos</a
              >
              <a class="nav-item nav-link anchor" href="#cta-section"
                >Baixe o aplicativo</a
              >
              <a class="nav-item nav-link anchor" href="#newsletter-section"
                >Fique por dentro</a
              >
            </div>
          </div>
        </nav>
      </div>

      <div class="container">
        <!-- HERO SECTION -->
        <div class="row align-items-start mt-5">
          <div class="col-md-12 col-lg-7">
            <img
              v-lazy-load
              class="d-block mb-5 mb-lg-none d-lg-none iphone-device iphone-1"
              src="~/assets/img/img-iphone-mock-mobile.png"
              alt="Imagem do aplicativo no iPhone"
            />
            <h1 class="hero-title mt-5 text-center text-md-left">
              Você acaba de encontrar as melhores aulas de bike indoor do
              Brasil!
            </h1>
            <p class="hero-subtitle mt-4 mb-5 text-center text-md-left">
              Está procurando aulas orientadas com profissionais de alta
              qualidade? Baixe o app e escolha seu treino.
            </p>
            <a href="#" target="_blank" rel="noopener"
              ><img
                v-lazy-load
                class="btn-apple"
                src="~/assets/img/img-btn-apple.svg"
                alt="Botão para download na AppStore"
            /></a>
            <a href="#" target="_blank" rel="noopener"
              ><img
                v-lazy-load
                class="btn-google"
                src="~/assets/img/img-btn-google.svg"
                alt="Botão para download no Google Play"
            /></a>
          </div>
          <div class="col-md-12 col-lg-5 mt-5 mt-lg-0 d-none d-lg-block">
            <img
              v-lazy-load
              class="iphone-device iphone-2"
              src="~/assets/img/img-iphone-mock-mobile.png"
              alt="Imagem do aplicativo no iPhone"
            />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import jQuery from 'jquery'
export default {
  mounted() {
    window.onscroll = (event) => {
      const scroll = window.pageYOffset
      if (scroll > 100) {
        document.querySelector('#fixed-nav').classList.add('active')
      } else {
        document.querySelector('#fixed-nav').classList.remove('active')
      }
    }
    // Handler when the DOM is fully loaded
    const navbarToggle = document.querySelector('#navbar-toggle-fixed')
    navbarToggle.addEventListener('click', (event) => {
      const submenu = document.getElementById('submenu')
      submenu.classList.toggle('active')
    })

    const heroToggle = document.querySelector('.navbar-toggler')
    heroToggle.addEventListener('click', (event) => {
      const submenu = document.getElementById('navbarNavAltMarkup')
      submenu.classList.toggle('active')
    })

    const submenuLinks = document.querySelectorAll('#submenu a')
    for (const link of submenuLinks) {
      link.addEventListener('click', (event) => {
        event.preventDefault()
        const submenu = document.getElementById('submenu')
        submenu.classList.remove('active')
        this.scrollTo(document.querySelector(event.target.hash))
      })
    }

    const heroLinks = document.querySelectorAll('#navbarNavAltMarkup a')
    for (const link of heroLinks) {
      link.addEventListener('click', (event) => {
        event.preventDefault()
        const submenu = document.getElementById('navbarNavAltMarkup')
        submenu.classList.remove('active')
        this.scrollTo(document.querySelector(event.target.hash))
      })
    }

    jQuery('.anchor').on('click', function (event) {
      const target = jQuery(jQuery(this).attr('href'))
      if (target.length) {
        event.preventDefault()
        jQuery('html, body').animate(
          {
            scrollTop: target.offset().top - 60,
          },
          1000
        )
      }
    })
  },
  methods: {
    scrollTo(element) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top:
          element.offsetTop - document.getElementById('fixed-nav').clientHeight,
      })
    },
  },
}
</script>
