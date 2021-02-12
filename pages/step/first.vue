<template>
  <div>
    <h1 class="main-title">Мастер акций — Шаг 1/2</h1>
    <p>Что даем за первый заказ?</p>
    <div class="card">
      <form @submit.prevent="changeType">
        <div>
          <input type="radio" id="discount" value="discount" name="type">
          <label for="discount">Скидка</label>
        </div>
        <div>
          <input type="radio" id="gift" value="gift" name="type">
          <label for="gift">Подарок</label>
        </div>
      </form>
    </div>
    <p>Выберите подарок из списка</p>
    <div class="card">
      <Select />
    </div>
  </div>
</template>

<script>
import Select from '../../components/Select.vue'
export default {
  components: { Select },
  methods: {
    changeType () {}
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
  @include card;
  display: inline-flex;
  border-color: $typeBorderColor;
  padding: 20px 22px 20px 16px;
  width: 400px;
  margin-bottom: 16px;
  form {
    input[type=radio] {
      display: none;
    }
    div:first-child {
      margin-bottom: 20px;
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
    input[type=radio]:checked + label:before {
      background: url(~assets/img/radio-checked.svg);
    }
    input[type=radio]:not(:checked) + label:before {
      background: url(~assets/img/radio.svg);
    }
  }
}
</style>
