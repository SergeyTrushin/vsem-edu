export const state = () => ({
  products: []
})

export const mutations = {
  fillProducts (state, products) {
    state.products = products
  }
}

export const actions = {
  async getProducts ({ commit }) {
    const token = 'r27iavtafltg4e18dc265dd6a6452d21d89771b7deb6435'
    const resp = await fetch(`https://vsem-edu-oblako.ru/adminapi/api/getListCampaign?access_token=${token}&json=true`)
    const data = await resp.json()
    commit('fillProducts', data.details)
  }
}

export const getters = {
  listCampaign: s => s.listCampaign
}
