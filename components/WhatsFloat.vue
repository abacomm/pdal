<template>
  <div
    class="button-float"
    data-aos="fade-up"
    data-aos-duration="250"
    data-aos-easing="ease-in-out"
    data-aos-delay="50"
    @click="handleMessageWhats"
  >
    <img
      src="~/assets/img/ic-whats.svg"
      width="52"
      height="52"
      alt="Fale conosco no whatsapp"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    url: 'https://api.whatsapp.com/send?phone=5516991659291&text=',
    message: 'Olá, Tudo bem? Gostaria de mais informações.',
  }),
  methods: {
    handleMessageWhats() {
      window.open(this.url + this.message, '_blank')
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
