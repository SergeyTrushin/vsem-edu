<template>
  <div class="vue-select" @click="toggleDropdown">
    <span class="selected-option">
      <span>{{ placeholder }}</span>
      <img src="../assets/img/Arrow-down.svg" alt="">
    </span>
    <div class="dropdown-options-container" v-show="showDropdown">
    <div
        class="dropdown-options"
        v-for="product in products"
        :key="product.name"
        v-bind:class="{ selected: product === selected }">
        <div
          class="dropdown-options--cell"
          @click="selectOption(option);">
          <span class="option-text">По {{ option }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch ({ store }) {
    await this.store.dispatch('simpleFood/fetchProducts')
    console.log('data===', this.products)
  },
  data () {
    return {
      selected: '',
      showDropdown: false,
      options: ['цене', 'популярности'],
      placeholder: 'Выберите подарок'
    }
  },
  computed: {
    products () {
      return this.$store.getters['simpleFood/getProducts']
    }
  },
  methods: {
    toggleDropdown () {
      console.log('products===', this.products)
      this.showDropdown = !this.showDropdown
    },
    selectOption (option) {
      this.selected = option
    }
  }
}
</script>

<style lang="scss" scoped>
$light-gray: #f8f8f8;

@mixin active-state() {
  background-color: $light-gray;
  border: none;
  color: #1f1f1f;
}
@mixin ellipsis() {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.vue-select {
  position: relative;
  cursor: pointer;
  user-select: none;
  border: none;
  color: #1f1f1f;
  transition: all 200ms linear;
  width: 100%;
  b {
    color: #59606d;
    font-style: normal;
    font-weight: normal;
    margin-left: 4px;
  }
  .selected-option {
    @include ellipsis();
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    transition: all 200ms linear;
  }
}
.dropdown-options-container {
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  z-index: 10;
  width: 100%;
  padding: 8px 0 12px;
  font-size: 14px;
  color: #959dad;
}
.dropdown-options--cell {
  padding: 4px 4px 4px 12px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    @include active-state();
  }
}
.dropdown-options.selected {
  .dropdown-options--cell {
    @include active-state();
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: height 150ms ease;
}
.slide-enter,
.slide-leave-to {
  height: 0px;
}
</style>
