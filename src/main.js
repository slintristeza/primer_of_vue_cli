import Vue from 'vue'
import App from './App'
import windowPlugin from './windowPlugin'
import 'babel-polyfill'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(windowPlugin)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
