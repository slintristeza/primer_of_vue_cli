import Vue from 'vue'
import App from './App'
import windowPlugin from './windowPlugin'

Vue.config.productionTip = false

Vue.use(windowPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
