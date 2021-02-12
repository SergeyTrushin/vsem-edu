<template>
  <div class="card">
    <img class="icon" :src="info.picture + '?acces-token=r27iavtafltg4e18dc265dd6a6452d21d89771b7deb6435&json=true'">
    <div class="text">
      <p class="title">
        {{info.description}}
      </p>
      <p class="subtitle">
        {{info.name}}
      </p>
    </div>
    <button class="btn">
      Запустить
    </button>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang="scss">
.card {
  @include card;
  border-color: $cardBorderColor;
  padding: 30.5px 24px 24px 26px;
  display: inline-flex;
  margin-bottom: 16px;
}

.text{
  width: 476px;
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
