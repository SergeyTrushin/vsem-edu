export const state = () => ({
  products: null
})

export const mutations = {
  setProducts (state, products) {
    state.products = products
  }
}

export const actions = {
  async fetchProducts ({ commit }) {
    const token = 'r27iavtafltg4e18dc265dd6a6452d21d89771b7deb6435'
    const resp = await fetch(`https://vsem-edu-oblako.ru/adminapi/api/getSimpleFood?access_token=${token}&json=true`)
    const data = await resp.json()
    commit('setProducts', data.msg)
  }
}

export const getters = {
  getProducts: s => s.products
}
