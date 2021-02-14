<template>
  <div>
    <h1 class="main-title">Мастер акций — Шаг 1/2</h1>
    <p>Что даем за первый заказ?</p>
    <div class="card">
      <form @change="changeType">
        <div>
          <input type="radio" id="discount" value="discount" name="type">
          <label for="discount">Скидка</label>
        </div>
        <div>
          <input type="radio" id="gift" value="gift" name="type" checked>
          <label for="gift">Подарок</label>
        </div>
      </form>
    </div>
    <div v-if="type == 'gift'">
      <p>Выберите подарок из списка</p>
      <div class="card">
      <Select />
      </div>
    </div>
    <div v-else>
      <p>Размер скидки</p>
      <div class="card">
        <input type="text" @input="onInput" v-model="discount">
      </div>
    </div>
    <div class="promo-code">
      <input type="checkbox" id="promo" name="promo">
      <label for="promo">Свой промокод</label>
    </div>
    <div>
      <button class="btn back" @click="back">Назад</button>
      <button class="btn next" @click="next">Далее</button>
    </div>
  </div>
</template>

<script>
import Select from '../../components/Select.vue'
export default {
  components: { Select },
  data: () => ({
    type: 'gift',
    discount: '0 %'
  }),
  methods: {
    changeType (event) {
      this.type = event.target.value
    },
    onInput ({ target }) {},
    back () {
      this.$router.push('/')
    },
    next () {
      this.$router.push({ path: '/success' })
    }
  }
}
</script>

<style scoped lang="scss">
*{
  @include card-text;
}

.main-title {
  margin-bottom: 32px;
}

p {
  padding-left: 20px;
  margin-bottom: 16px;
}

.card {
  display: inline-flex;
  border-color: $typeBorderColor;
  padding: 20px 22px 20px 16px;
  width: 400px;
  margin-bottom: 16px;
  form {
    div:first-child {
      margin-bottom: 20px;
    }
    @include customCheckbox;
  }
  input {
    border: none;
    outline: none;
    display: inline-block;
  }
}

.promo-code {
    @include customCheckbox;
    padding-left: 20px;
    margin-bottom: 26px;
}
.btn {
  padding-top: 14px;
  padding-bottom: 14px;
  &.back {
    color: $btnFontColorGrey;
    background: #fff;
    margin-right: 12px;
    border-color: $btnFontColorGrey;
    outline: none;
  }
  &.next {
    color:#fff;
    background: $btnColor;
    border-color: transparent;
  }
}
</style>
