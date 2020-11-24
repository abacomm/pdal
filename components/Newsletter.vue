<template>
  <section
    id="newsletter-section"
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-duration="250"
    data-aos-easing="ease-in-out"
    data-aos-delay="50"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img
            v-lazy-load
            src="~/assets/img/img-newsletter.png"
            srcset="img/img-newsletter.png 2x"
            alt="Mulheres pedalando"
            class="img-newsletter d-none d-lg-block"
          />
        </div>
        <div v-if="!successResult" class="col-lg-6 px-0 px-md-1 mt-5 mt-lg-0">
          <div class="newsletter-box">
            <h1 class="newsletter-box__title">Fique por dentro!</h1>
            <label for="input-box" class="newsletter-box__description">
              Receba novidades e anúncios de aulas gratuitas direto na sua caixa
              de e-mail:
            </label>
            <input
              id="input-box"
              v-model.trim="$v.email.$model"
              name="email"
              type="email"
              placeholder="Digite seu melhor e-mail"
              class="newsletter-box__input mb-2 mb-lg-0"
              :class="errorClass($v.email)"
            /><button class="newsletter-box__button" @click="postLead">
              Enviar
            </button>
            <p v-if="$v.email.email" class="newsletter-box__disclaimer">
              Mantemos o sigilo dos seus dados. Leia nossa
              <a
                href="#"
                title="Política de privacidade"
                data-toggle="modal"
                data-target="#privacityPoliceModal"
                >política de privacidade.</a
              >
            </p>
            <p v-else class="newsletter-box__disclaimer">
              Por favor preencha o campo de email
            </p>
          </div>
        </div>
        <div v-if="successResult" class="col-lg-6 px-0 px-md-1 mt-5 mt-lg-0">
          <div class="newsletter-box">
            <h1 class="newsletter-box__title">Email cadastrado!</h1>
            <p class="newsletter-box__text">
              Você receberá novidades no seu e-mail
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      email: '',
      successResult: false,
    }
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    async postLead() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const query = `email=${this.email}&conversion_identifier=Formulário do Site Pdal&traffic_source=Site&traffic_medium=Site&traffic_campaign=site-pdal&traffic_value=Site Pdal`
        const url = `https://api.pdal.abcdev.net/create-lead?${query}`
        const lead = await this.$axios.$post(url)
        if (lead) {
          this.email = ''
          this.successResult = true
        }
      }
    },
    errorClass(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty,
      }
    },
  },
}
</script>

<style>
.error {
  border-color: #e11c09 !important;
  background-color: #ffe9e7 !important;
}
</style>
