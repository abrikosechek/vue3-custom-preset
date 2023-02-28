const state = () => ({
  isLogged: false,
})

const mutations = {
  SET_LOGIN_STATE(state, payload) {
    state.isLogged = payload
  }
}

const actions = {
}

const getters = {
  isLogged: (state) => state.isLogged
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}