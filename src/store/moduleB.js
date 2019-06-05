export default {
  namespaced: true,
  state: {
    count: 2
  },
  mutations: {
    update (state) {
      state.count += 200
    }
  }
}
