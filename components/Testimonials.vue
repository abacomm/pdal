<template>
  <section
    id="testimonials-section"
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-duration="250"
    data-aos-easing="ease-in-out"
    data-aos-delay="50"
  >
    <img
      v-lazy-load
      src="~/assets/img/img-dots.svg"
      alt="Ilustração para composição do layout"
      class="testimonials-dots d-none d-lg-block"
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 text-center">
          <div class="video-overview">
            <div
              id="2afCCPSZseI"
              class="youtube-player"
              data-id="2afCCPSZseI"
              @click="loadVideo('2afCCPSZseI')"
            ></div>
          </div>
          <h3 class="testimonial-title">
            100% aprovado por quem usa - profissionais ou amadores
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="testimonial-card">
            <img
              v-lazy-load
              src="~/assets/img/img-card-1.jpg"
              alt="Foto da Luciana Raab"
              class="testimonial-card__image"
            />
            <div class="testimonial-card__detail">
              <img
                v-lazy-load
                src="~/assets/img/img-instagram-logo.png"
                alt="Logo do Instagram"
                class="testimonial-card__icon"
              />
              <p class="testimonial-card__text">
                Amei, não mudaria nada! A voz e a condução são excelentes e a
                aula nem se fala! E o melhor de tudo é que dá para fazer em
                qualquer lugar. Perfect!
              </p>
              <div class="testimonial-card__author">
                <p class="testimonial-card__name">Luciana Raab</p>
                <p class="testimonial-card__jobtitle">@lmasiniraab</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="testimonial-card">
            <img
              v-lazy-load
              src="~/assets/img/img-card-2.jpg"
              alt="Foto da Gabriela S. Ribeiro"
              class="testimonial-card__image"
            />
            <div class="testimonial-card__detail">
              <img
                v-lazy-load
                src="~/assets/img/img-instagram-logo.png"
                alt="Logo do Instagram"
                class="testimonial-card__icon"
              />
              <p class="testimonial-card__text">
                Aula incrivel!! Seleção musical super animada, motivadora e o
                treino em si me surpreendeu. Consegui sair exausta em apenas 30'
                de aula, parabéns!!
              </p>
              <div class="testimonial-card__author">
                <p class="testimonial-card__name">Gabriela S. Ribeiro</p>
                <p class="testimonial-card__jobtitle">@gabrielaseveriano</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="testimonial-card">
            <img
              v-lazy-load
              src="~/assets/img/img-card-3.jpg"
              srcset="img/img-card-3.jpg 2x"
              alt="Foto da Patricia Godinho"
              class="testimonial-card__image"
            />
            <div class="testimonial-card__detail">
              <img
                v-lazy-load
                src="~/assets/img/img-instagram-logo.png"
                alt="Logo do Instagram"
                class="testimonial-card__icon"
              />
              <p class="testimonial-card__text">
                A aula é inovadora e prática. Possibilita praticar em qualquer
                lugar do mundo, com perfeição! Recomendando para meus amigos
                amantes de bike :-)
              </p>
              <div class="testimonial-card__author">
                <p class="testimonial-card__name">Patricia Godinho</p>
                <p class="testimonial-card__jobtitle">@patriciagodinho</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="testimonial-card">
            <img
              v-lazy-load
              src="~/assets/img/img-card-4.jpg"
              srcset="img/img-card-4.jpg 2x"
              alt="Foto da Flávia Nigri"
              class="testimonial-card__image"
            />
            <div class="testimonial-card__detail">
              <img
                v-lazy-load
                src="~/assets/img/img-instagram-logo.png"
                alt="Logo do Instagram"
                class="testimonial-card__icon"
              />
              <p class="testimonial-card__text">
                Aula maravilhosaaa como sempre! Voltando depois de muitos meses
                com tanta intensidade e FELICIDADE! Gratidão pelo presente!!!
              </p>
              <div class="testimonial-card__author">
                <p class="testimonial-card__name">Flávia Nigri</p>
                <p class="testimonial-card__jobtitle">@flavia_nigri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.contentLoaded()
  },
  methods: {
    contentLoaded() {
      if (process.browser) {
        // eslint-disable-next-line one-var
        let div,
          index,
          // eslint-disable-next-line prefer-const
          element = document.getElementsByClassName('youtube-player')
        for (index = 0; index < element.length; index++) {
          div = document.createElement('div')
          div.setAttribute('data-id', element[index].dataset.id)
          div.innerHTML = this.labnolThumb(element[index].dataset.id)
          element[index].appendChild(div)
        }
      }
    },
    labnolThumb(id) {
      if (process.browser) {
        // eslint-disable-next-line prefer-const
        let thumb =
          '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" srcset="https://i.ytimg.com/vi/ID/hqdefault.jpg 2x" alt="Imagem de miniatura youtube">'
        const play = '<div class="play"></div>'
        return thumb.replace('ID', id) + play
      }
    },
    loadVideo(id) {
      if (process.browser) {
        // eslint-disable-next-line prefer-const
        let iframe = document.createElement('iframe')
        // eslint-disable-next-line prefer-const
        let embed = 'https://www.youtube.com/embed/ID?autoplay=1'
        // eslint-disable-next-line prefer-const
        let element = document.getElementById(id)
        iframe.setAttribute('src', embed.replace('ID', id))
        iframe.setAttribute('frameborder', '0')
        iframe.setAttribute(
          'allow',
          'accelerometer; autoplay; picture-in-picture'
        )
        iframe.setAttribute('allowfullscreen', '1')
        element.appendChild(iframe, element)
      }
    },
  },
}
</script>

<style lang="scss">
.video-overview {
  margin-bottom: 98px;
}

.youtube-player {
  position: relative;
  padding-bottom: 56.23%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 5px;

  border-radius: 10px;
  box-shadow: 0 0 -4px 3px #000;
  margin: 0 auto;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: transparent;
  }
  img {
    bottom: 0;
    display: block;
    left: 0;
    margin: auto;
    max-width: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    height: auto;
    cursor: pointer;
    -webkit-transition: 0.4s all;
    -moz-transition: 0.4s all;
    transition: 0.4s all;
    &:hover {
      -webkit-filter: brightness(75%);
    }
  }
  .play {
    height: 72px;
    width: 72px;
    left: 50%;
    top: 50%;
    margin-left: -36px;
    margin-top: -36px;
    position: absolute;
    background: url('//i.imgur.com/TxzC70f.png') no-repeat;
    cursor: pointer;
  }
}
</style>
