<template>
  <div class="card">
    <img class="icon" :src=info.picture>
    <div class="text">
      <p class="title">
        {{info.description}}
      </p>
      <p class="subtitle">
        {{info.name}}
      </p>
    </div>
    <button class="btn" @click="startCampaign(info.id)">
      Запустить
    </button>
  </div>
</template>

<script>
export default {
  props: ['info'],
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
  @include card;
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
    @include card-title;
    margin-bottom: 12px;
  }

  .subtitle {
    @include card-text;
  }
}

.btn {
  @include btn;
  background: $btnColor;
  color: #fff;
  border-color: transparent;
  align-self:center;
}
</style>
