<template>
  <section id="features-section">
    <img
      src="~/assets/img/img-dots.svg"
      alt="Ilustração para composição do layout"
      class="features-dots d-none d-lg-block"
    />
    <div class="container">
      <div class="row text-left text-lg-center">
        <h1 class="col-lg-10 offset-lg-1 features-title">
          O que preparamos para você:
        </h1>
        <p class="col-lg-6 offset-lg-3 features-subtitle">
          Muito mais do que um aplicativo de bike indoor. Uma experiência
          completa com os professores que são referência no assunto.
        </p>
      </div>
      <div class="row features-row">
        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="250"
          data-aos-easing="ease-in-out"
        >
          <picture>
            <source srcset="~/assets/img/img-features.png" type="image/png" />
            <img
              class="img-features"
              src="~/assets/img/img-features.png"
              alt="Imagem de usuário usando o aplicativo"
            />
          </picture>
        </div>
        <div
          class="col-lg-6 features-list mt-4 mt-lg-0"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="250"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
        >
          <div class="row">
            <div class="col-12 col-md-1 mr-lg-3">
              <img src="~/assets/img/ic-feature-1.svg" alt="Ícone de coração" />
            </div>
            <div class="col-12 col-md-10 mt-3 mt-md-0">
              <h2 class="h5"><strong>Ganho de condicionamento</strong></h2>
              <p>
                Basta seguir corretamente o comando dos professores no
                aplicativo e manter sua frequência que seus objetivos serão
                atingidos!
              </p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12 col-md-1 mr-lg-3">
              <img src="~/assets/img/ic-feature-2.svg" alt="Ícone de coração" />
            </div>
            <div class="col-12 col-md-10 mt-3 mt-md-0">
              <h2 class="h5">
                <strong>Planejamento para perda de peso</strong>
              </h2>
              <p>
                Treinos com variação de intensidade, sendo indicado diariamente
                para obter o melhor resultado. Em nossos treinos, você pode
                atingir até 500 Kcal consumidas!
              </p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12 col-md-1 mr-lg-3">
              <img src="~/assets/img/ic-feature-3.svg" alt="Ícone de coração" />
            </div>
            <div class="col-12 col-md-10 mt-3 mt-md-0">
              <h2 class="h5"><strong>Vídeos explicativos</strong></h2>
              <p>
                Em busca de seu maior conforto, preparamos vídeos que explicam a
                modalidade e como ajustar a bike para prevenir lesões. Ideal
                para quem é iniciante!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.features-row .h5 {
  color: #121a21;
}
</style>
