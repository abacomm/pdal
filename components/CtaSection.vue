<template>
  <section id="cta-section">
    <img
      v-lazy-load
      src="~/assets/img/img-dots.svg"
      alt="Ilustração para composição do layout"
      class="cta-dots d-none d-lg-block"
    />
    <div class="container">
      <div class="row align-items-start">
        <div
          class="col-lg-7"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="250"
          data-aos-easing="ease-in-out"
        >
          <img
            v-lazy-load
            src="~/assets/img/img-cta.png"
            srcset="img/img-cta.png 2x"
            alt="Pessoas com fone de ouvido pedalando"
            class="img-cta d-block d-lg-none mb-4 mb-lg-0"
          />
          <h1 class="cta-title">
            E aí, <span style="color: #f35062">pronto para suar?</span>Comece a
            treinar hoje mesmo!
          </h1>
          <p class="mb-5 cta-subtitle">
            Baixe o app e venha suar com muita música boa sendo orientadas por
            professores registrados no CREF.
          </p>
          <a href="#" target="_blank" rel="noopener" class="coming-soon"
            ><img
              v-lazy-load
              class="btn-apple"
              src="~/assets/img/img-btn-apple.svg"
              alt="Botão para download na AppStore"
          /></a>
          <a href="#" target="_blank" rel="noopener" class="coming-soon"
            ><img
              v-lazy-load
              class="btn-google"
              src="~/assets/img/img-btn-google.svg"
              alt="Botão para download no Google Play"
          /></a>
          <p class="mt-5 cta-disclaimer d-none d-lg-block">
            Créditos disponíveis para aulas gratuitas no aplicativo.
          </p>
        </div>
        <div
          class="col-lg-5"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="250"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
        >
          <img
            v-lazy-load
            src="~/assets/img/img-cta.png"
            srcset="img/img-cta.png 2x"
            alt="Pessoas com fone de ouvido pedalando"
            class="img-cta d-none d-lg-block"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.coming-soon {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  &:before {
    position: absolute;
    left: 99px;
    top: 15px;
    width: 100%;
    padding: 2px 0;
    text-align: center;
    background: #db2c3b;
    z-index: 9;
    color: #fff;
    content: 'Em breve';
    transform: rotateZ(42deg);
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -0.03em;
  }
  img {
    &:hover {
      transform: translateY(0) !important;
      transition: all 0.2s ease-in-out;
      cursor: default;
    }
  }
}
</style>
