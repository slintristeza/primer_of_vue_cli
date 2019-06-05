import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import Vuex from 'vuex'
import store from '@/store.js'
const kitchenwareJson = require('./assets/kitchenware.json')
const fruitsJson = require('./assets/fruits.json')

Vue.config.productionTip = false

Vue.use(Vuex)
console.log(store.state.count)
store.commit('increment')
console.log(store.state.count)
console.log(store.state.moduleA.count)
console.log(store.state.moduleB.count)
console.log(store.state.moduleA.moduleC.count)
store.commit('moduleA/update')
store.commit('moduleA/moduleC/update')
console.log(store.state.moduleA.count)
console.log(store.state.moduleB.count)
console.log(store.getters['moduleA/count'])
console.log(store.getters['moduleA/moduleC/count'])
store.dispatch('axiosModuleA/load', fruitsJson)
store.dispatch('axiosModuleB/load', kitchenwareJson)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
