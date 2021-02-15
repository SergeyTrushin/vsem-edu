<template>
  <div>
    <h1 class="main-title">
      Мастер акций — Шаг 1/2
    </h1>
    <p>Что даем за первый заказ?</p>
    <div class="card">
      <form @change="changeType">
        <div>
          <input id="discount" type="radio" value="discount" name="type">
          <label for="discount">Скидка</label>
        </div>
        <div>
          <input id="gift" type="radio" value="gift" name="type" checked>
          <label for="gift">Подарок</label>
        </div>
      </form>
    </div>
    <div v-if="type == 'gift'">
      <p>Выберите подарок из списка</p>
      <div class="card">
        <Select :products="products" @changeGift="changeGift"/>
      </div>
    </div>
    <div v-else>
      <p>Размер скидки</p>
      <div class="card discount">
        <input v-model="discount" type="text" @input="onInput">
      </div>
    </div>
    <div class="promo-code" :class="{ withoutMargin: promo }">
      <input id="promo" v-model="promo" type="checkbox" name="promo">
      <label for="promo">Свой промокод</label>
    </div>
    <div v-if="promo" class="card">
      <input id="promo" v-model="promoValue" type="text" name="promo">
    </div>
    <div class="buttons">
      <button class="btn back" @click="back">
        Назад
      </button>
      <button class="btn next" @click="next">
        Далее
      </button>
    </div>
  </div>
</template>

<script>
import Select from '../../components/Select.vue'
export default {
  components: { Select },
  data: () => ({
    type: 'gift',
    discount: '',
    promo: false,
    promoValue: '',
    gift: ''
  }),
  async fetch () {
    await this.$store.dispatch('simpleFood/fetchProducts')
  },
  computed: {
    products () {
      return this.$store.getters['simpleFood/getProducts']
    }
  },
  methods: {
    changeType (event) {
      this.type = event.target.value
    },
    onInput ({ target }) {
      if (!/\d/g.test(target.value[target.value.length - 1]) || target.value === '0' || +target.value >= 100) {
        target.value = target.value.slice(0, -1)
        this.discount = target.value
      }
    },
    changeGift (product) {
      this.gift = product
    },
    back () {
      this.$router.push('/')
    },
    async next () {
      if (this.type === 'gift' && this.gift) {
        await fetch('', {
          method: 'POST',
          headers: {
            access_token: 'r27iavtafltg4e18dc265dd6a6452d21d89771b7deb6435',
            code: 'first_order'
          },
          body: JSON.stringify({ gift: this.gift })
        })
      }
      if (this.type === 'discount' && this.discount) {
        await fetch('', {
          method: 'POST',
          headers: {
            access_token: 'r27iavtafltg4e18dc265dd6a6452d21d89771b7deb6435',
            code: 'first_order'
          },
          body: JSON.stringify({ discount: this.discount })
        })
      }
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
.discount {
  input:before {
    content: '%';
    display: inline-block!important;
    width: 100px;
    height: 100px;
    background: red;
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
.withoutMargin {
  margin-bottom: 10px;
}
#promo {
  color: $mainFontColor;
}
.buttons {
  margin-top: 8px;
}
</style>
