<template>
  <div>
    <h1 class="main-title">
      Мастер акций
    </h1>
    <Card v-for="champaign in listOfChampaign" :key="champaign.id" :info="champaign" />
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('listCampaign/getListCampaign')
  },
  computed: {
    listOfChampaign () {
      return this.$store.getters['listCampaign/listCampaign']
    }
  }
}
</script>

<style lang="scss">
.main-title {
  @include main-title;
  margin-bottom: 27px;
}
</style>
