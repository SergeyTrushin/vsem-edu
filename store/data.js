export const state = () => ({
  promo: ''
})

export const mutations = {
  setPromo (state, promo) {
    state.promo = promo
  }
}

export const getters = {
  promo: s => s.promo
}
