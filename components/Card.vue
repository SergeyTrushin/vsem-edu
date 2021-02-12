<template>
  <div class="card">
    <div class="icon">
    </div>
    <div class="text">
      <p class="title">
        Убедите своих клиентов сделать первый заказ
      </p>
      <p class="subtitle">
        Скидка или подарок на первую покупку по промокоду
      </p>
    </div>
    <button class="btn">
      Запустить
    </button>
  </div>
</template>

<style lang="scss">
.card {
  @include card;
  border-color: $cardBorderColor;
  padding: 30.5px 24px 24px 26px;
  display: inline-flex;
}

.text{
  max-width: 476px;
  margin-right: 72px;
  .title {
    @include card-title;
    margin-bottom: 12px;
  }

  .subtitle {
    @include card-text;
  }
}

.btn {
  @include btn;
  background: $btnColor;
  color: #fff;
  border-color: transparent;
  align-self:center;
}
</style>
