<template>
  <div class="card">
    <img class="icon" :src="info.picture">
    <div class="text">
      <p class="title">
        {{ info.description }}
      </p>
      <p class="subtitle">
        {{ info.name }}
      </p>
    </div>
    <button class="btn" @click="startCampaign(info.id)">
      Запустить
    </button>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    startCampaign (id) {
      if (id === '1') {
        this.$router.push('/step/first')
      }
    }
  }
}
</script>

<style lang="scss">
.card {
  border-color: $cardBorderColor;
  padding: 30.5px 24px 24px 26px;
  display: inline-flex;
  margin-bottom: 16px;
}

.icon {
  margin-right: 30px;
  width: 54px;
  height: 54px;
  object-fit: contain;
}

.text{
  width: 476px;
  margin-right: 72px;
  .title {
    margin-bottom: 12px;
  }
}

.btn {
  background: $btnColor;
  color: #fff;
  border-color: transparent;
  align-self:center;
}
</style>
