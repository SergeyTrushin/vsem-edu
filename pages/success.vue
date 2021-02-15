<template>
  <div>
    <h1 class="main-title">
      Мастер акций — Шаг 2/2
    </h1>
    <div class="success-card">
      <img src="../assets/img/success.svg" alt="">
      <p class="main-title">
        Акция успешно запущена!
      </p>
      <div v-if="promo" class="promo">
        <span>Промокод:</span><b>{{ promo }}</b>
      </div>
      <button class="btn" @click="next">
        Все акции
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    promo () {
      return this.$store.getters['data/promo']
    }
  },
  methods: {
    next () {
      this.$store.commit('data/setPromo', '')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
.success-card {
  img {
    margin-bottom: 34px;
  }
  p {
    max-width: 200px;
    text-align: center;
  }
  .btn {
    margin-top: 34px;
    background: $btnColor;
    border-color: transparent;
    color: #fff;
  }
  .promo {
    b {
      @include main-title;
      margin-left: 4px;
    }
  }
}
</style>
