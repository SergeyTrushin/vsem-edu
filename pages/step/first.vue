<template>
  <div>
    <h1 class="main-title">
      Мастер акций — Шаг 1/2
    </h1>
    <p>Что даем за первый заказ?</p>
    <div class="card-inline">
      <form @change="changeType">
        <div>
          <input id="discount" type="radio" value="discount" name="type" checked>
          <label for="discount">Скидка</label>
        </div>
        <div>
          <input id="gift" type="radio" value="gift" name="type">
          <label for="gift">Подарок</label>
        </div>
      </form>
    </div>
    <div v-if="type === 'gift'">
      <p>Выберите подарок из списка</p>
      <div class="card-inline">
        <Select :products="products" @changeGift="changeGift" />
      </div>
    </div>
    <div v-else>
      <p>Размер скидки</p>
      <div class="card-inline discount-amount">
        <input v-model="discount" type="text" maxlength="3" @input="onInput">
      </div>
    </div>
    <div class="promo-code" :class="{ withoutMargin: promo }">
      <input id="promo" v-model="promo" type="checkbox" name="promo">
      <label for="promo">Свой промокод</label>
    </div>
    <div v-if="promo" class="card-inline">
      <input id="promo" v-model="promoValue" type="text" name="promo" @input="changePromo">
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
    type: 'discount',
    discount: '10%',
    promo: false,
    promoValue: '',
    gift: ''
  }),
  async fetch () {
    if (this.products === null) {
      await this.$store.dispatch('simpleFood/fetchProducts')
    }
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
      const int = target.value.slice(0, target.value.length - 1).replace(/[A-Za-z]/g, '')
      if (int.includes('%')) {
        this.discount = '%'
      } else if (int.length >= 0 & int.length <= 3) {
        const whole = int.slice(0, 2)
        this.discount = whole + '%'
      } else {
        this.discount = int + '%'
      }
    },
    changePromo () {
      this.$store.commit('data/setPromo', this.promoValue)
    },
    changeGift (product) {
      this.gift = product
    },
    back () {
      this.$router.push('/')
    },
    async next () {
      if (this.type === 'gift' && this.gift) {
        await fetch('https://vsem-edu-oblako.ru/adminapi/api/addCampaignItem', {
          method: 'POST',
          headers: {
            access_token: 'r27iavtafltg4e18dc265dd6a6452d21d89771b7deb6435',
            code: 'first_order'
          },
          body: JSON.stringify({
            id: new Date(),
            gift: this.gift,
            promo: this.promoValue ? this.promoValue : null
          })
        })
        this.$router.push({ path: '/success', params: { promo: this.promoValue } })
      }
      if (this.type === 'discount' && this.discount) {
        await fetch('https://vsem-edu-oblako.ru/adminapi/api/addCampaignItem', {
          method: 'POST',
          headers: {
            access_token: 'r27iavtafltg4e18dc265dd6a6452d21d89771b7deb6435',
            code: 'first_order'
          },
          body: JSON.stringify({
            id: new Date(),
            discount: this.discount,
            promo: this.promoValue ? this.promoValue : null
          })
        })
        this.$router.push({ path: '/success' })
      }
    }
  }
}
</script>

<style lang="scss">
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
.card-inline {
  @include card;
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
.discount-amount {
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
