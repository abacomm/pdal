<template>
  <div class="static-header">
    <div class="toolbar">
      <img
        class="img-logo-pdal"
        src="~/assets/img/logo-pdal-black.svg"
        alt="Pdal logo"
        width="110"
      />

      <n-link to="/" class="btn-cta"> Voltar para o início </n-link>
    </div>
  </div>
</template>

<style lang="scss">
.static-header {
  margin-bottom: 30px;
  border-bottom: 1px solid #e6e6e6;
}
.toolbar {
  padding: 16px;
  display: flex;
  justify-content: space-between;
}
.btn-cta {
  background: #fff;
  color: #666;
  border: 1px solid #e5e5e5;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-weight: 600;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
}

@media all and (max-width: 991px) {
  .btn-cta {
    padding: 2px 10px;
    font-size: 12px;
  }
}
</style>
