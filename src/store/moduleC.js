export default {
  namespaced: true,
  state: {
    count: 3
  },
  mutations: {
    update (state) {
      state.count += 300
    }
  },
  getters: {
    count (state, getters, rootState, rootGetter) {
      return state.count
    }
  }
}
