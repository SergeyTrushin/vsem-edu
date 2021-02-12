<template>
  <div>
    <h1 class="main-title">Мастер акций</h1>
    <Card v-for="champaign in listOfChampaign" :key="champaign.id" :info="champaign"/>
  </div>
</template>

<style lang="scss">
.main-title {
  @include main-title;
  margin-bottom: 27px;
}
</style>

<script>
export default {
  mounted () {
    if (this.listOfChampaign.length === 0) {
      this.$store.dispatch('simpleFood/getListCampaign')
    }
  },
  computed: {
    listOfChampaign () {
      return this.$store.getters['simpleFood/listCampaign']
    }
  }
}
</script>
