import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  store: {
    counst: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store
