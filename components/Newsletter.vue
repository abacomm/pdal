<template>
  <section id="newsletter-section">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="250"
          data-aos-easing="ease-in-out"
        >
          <picture>
            <source
              srcset="~/assets/img/img-newsletter.webp"
              type="image/webp"
            />
            <source srcset="~/assets/img/img-newsletter.png" type="image/png" />
            <img
              v-lazy-load
              src="~/assets/img/img-newsletter.png"
              alt="Mulheres pedalando"
              class="img-newsletter d-none d-lg-block"
            />
          </picture>
        </div>
        <div
          class="col-lg-6 px-0 px-md-1 mt-5 mt-lg-0"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="250"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
        >
          <div class="newsletter-box">
            <h1 class="newsletter-box__title">Fique por dentro!</h1>
            <label for="input-box" class="newsletter-box__description">
              Receba novidades e anúncios de aulas gratuitas direto na sua caixa
              de e-mail:
            </label>
            <input
              id="input-box"
              type="text"
              placeholder="Digite seu melhor e-mail"
              class="newsletter-box__input mb-2 mb-lg-0"
            /><button class="newsletter-box__button">Enviar</button>
            <p class="newsletter-box__disclaimer">
              Mantemos o sigilo dos seus dados. Leia nossa
              <a
                href="#"
                title="Política de privacidade"
                data-toggle="modal"
                data-target="#privacityPoliceModal"
                >política de privacidade.</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
