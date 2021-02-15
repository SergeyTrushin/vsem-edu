<template>
  <div class="vue-select" @click="toggleDropdown">
    <span class="selected-option">
      <span>{{ gift }}</span>
      <img src="../assets/img/Arrow-down.svg" alt="">
    </span>
    <div v-show="showDropdown" class="dropdown-options-container">
      <div
        v-for="product in products"
        :key="product.name"
        :class="{ selected: product.item_name === gift }"
        class="dropdown-options"
      >
        <div
          class="dropdown-options--cell"
          @click="selectOption(product)"
        >
          <span class="option-text">{{ product.item_name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      showDropdown: false,
      gift: 'Выберите подарок'
    }
  },
  methods: {
    toggleDropdown () {
      this.showDropdown = !this.showDropdown
    },
    selectOption (product) {
      this.gift = product.item_name
      this.$emit('changeGift', product)
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
