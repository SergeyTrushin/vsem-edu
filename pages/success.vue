<template>
  <div>
    <h1 class="main-title">
      Мастер акций — Шаг 2/2
    </h1>
    <div class="card">
      <img src="../assets/img/success.svg" alt="">
      <p class="main-title">
        Акция успешно запущена!
      </p>
      <button class="btn" @click="$router.push({ path: '/' })">
        Все акции
      </button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.card {
  margin-top: 26px;
  display:inline-flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:88px 0 60px 0;
  img {
    margin-bottom: 34px;
  }
  p {
    max-width: 200px;
    text-align: center;
  }
  .btn {
    background: $btnColor;
    border-color: transparent;
    color: #fff;
  }
}
</style>
