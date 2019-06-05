// import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      entries: []
    }
  },
  mutations: {
    set (state, payload) {
      state.entries = payload
    }
  },
  actions: {
    load ({ commit }, file) {
      commit('set', file)
      // axios.get(file).then(response => {
      //   commit('set', response.data)
      // })
    }
  }
}
