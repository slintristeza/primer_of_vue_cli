import Vue from 'vue'
import App from './App'
import windowPlugin from './windowPlugin'
import 'babel-polyfill'
import Vuex from 'vuex'
import store from '@/store.js'

Vue.config.productionTip = false

Vue.use(windowPlugin)
Vue.use(Vuex)
console.log(store.state.count)
store.commit('increment')
console.log(store.state.count)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
