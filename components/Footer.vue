<template>
  <section
    id="footer-section"
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-duration="250"
    data-aos-easing="ease-in-out"
    data-aos-delay="50"
  >
    <img
      src="img/img-watermark.svg"
      alt="Marca dágua da logo"
      class="watermark d-none d-lg-block"
    />
    <footer>
      <div class="container mb-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="footer-brand">
              <img
                class="footer-brand__logo"
                src="img/logo-pdal-black.svg"
                alt="Logo do Pdal"
              />
              <p class="mt-4 footer-brand__text">
                Assista as lives diárias pelo
                <a
                  href="https://www.instagram.com/pdaloficial/"
                  title="Assista no Instagram"
                  target="_blank"
                  >Instagram</a
                >
                e vamos suar juntos com muita música boa!
              </p>
              <a
                class="insta-button"
                href="https://instagram.com/pdaloficial"
                target="_blank"
                title="Siga no Instagram"
              >
                <img
                  src="img/img-instagram-logo.png"
                  width="24"
                  alt="Ícone Instagram"
                />
                Siga no Instagram
              </a>
            </div>
          </div>
          <div class="col-lg-3">
            <p class="footer-menu__title">Menu</p>
            <ul class="footer-menu__list">
              <li>
                <a href="#features-section" title="Funcionalidades"
                  >Funcionalidades</a
                >
              </li>
              <li>
                <a href="#testimonials-section" title="Depoimentos"
                  >Depoimentos</a
                >
              </li>
              <li>
                <a href="#cta-section" title="Baixe o aplicativo"
                  >Baixe o aplicativo</a
                >
              </li>
              <li>
                <a href="#newsletter-section" title="Fique por dentro"
                  >Fique por dentro</a
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <p class="footer-menu__title">Outros</p>
            <ul class="footer-menu__list">
              <li>
                <a
                  href="#"
                  title="Termos de uso"
                  data-toggle="modal"
                  data-target="#termsModal"
                  >Termos de uso</a
                >
              </li>
              <li>
                <a
                  href="#"
                  title="Política de privacidade"
                  data-toggle="modal"
                  data-target="#privacityPoliceModal"
                  >Política de privacidade</a
                >
              </li>
            </ul>
            <ul class="footer-menu__social">
              <!-- <li class="mr-4">
                <a href="#"
                  ><img src="img/ic-facebook.svg" alt="Ícone Facebook"
                /></a>
              </li>
              <li class="mr-4">
                <a href="#"
                  ><img src="img/ic-twitter.svg" alt="Ícone Twitter"
                /></a>
              </li>
              <li class="mr-4">
                <a href="#"
                  ><img src="img/ic-linkedin.svg" alt="Ícone Linkedin"
                /></a>
              </li>
              <li class="mr-4">
                <a href="https://instagram.com/pdaloficial"
                  ><img src="img/ic-instagram.svg" alt="Ícone Linkedin"
                /></a>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col px-0">
            <div class="copyright">
              <p class="text-center mb-0">
                Copyright © 2020 · Pdal · Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<style>
.insta-button {
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  padding: 8px 14px;
  color: #2b292d;
  margin-bottom: 20px;
  display: block;
  font-size: 16px;
  font-weight: 600;
  max-width: 360px;
  text-align: center;
}
.insta-button:hover {
  border-color: #b1b1b1;
  color: #2b292d;
}
.insta-button:hover {
  text-decoration: none;
}
.insta-button img {
  margin-right: 5px;
}
</style>
