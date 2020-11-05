<template>
  <div
    class="button-float"
    data-aos="fade-up"
    data-aos-duration="250"
    data-aos-easing="ease-in-out"
    data-aos-delay="50"
    @click="handleClickWhatsapp"
  >
    <img
      src="img/ic-whats.svg"
      width="52"
      height="52"
      alt="Fale conosco no whatsapp"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    url:
      'https://api.whatsapp.com/send?phone=5521997298823&text=Olá, Tudo bem? Gostaria de mais informações.',
  }),
  methods: {
    handleMessageWhats() {
      window.open(this.url, '_blank')
    },
  },
}
</script>

<style>
.button-float {
  cursor: pointer;
  position: fixed;
  display: block;
  bottom: 20px;
  right: 20px;
  width: 52px;
  height: 52px;
  z-index: 1;
  transition: all 0.2s ease-in-out;
}
</style>
