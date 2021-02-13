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
      <button class="btn back">Назад</button>
      <button class="btn next">Далее</button>
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
    onInput ({ target }) {
      let val = target.value
      if (val.match(/\d/g).length !== 0) {
        val.match(/\d/g).forEach((el) => {
          val += el
        })
        target.dispatchEvent(new Event('input'))
      }
    }
  }
}
</script>

<style scoped lang="scss">
@mixin customCheckbox {
  input[type=checkbox], input[type=radio] {
      display: none;
    }
  label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }
  label:before {
    content: "";
    width: 18px;
    height: 18px;
    margin-right: 15px;
  }
  input:checked + label:before {
    background: url(~assets/img/radio-checked.svg);
  }
  input:not(:checked) + label:before {
    background: url(~assets/img/radio.svg);
  }
}

*{
  @include card-text;
}

.main-title {
  @include main-title;
  margin-bottom: 32px;
}

p {
  padding-left: 20px;
  margin-bottom: 16px;
}

.card {
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

.promo-code {
    @include customCheckbox;
    padding-left: 20px;
    margin-bottom: 26px;
}
.btn {
  @include btn;
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
