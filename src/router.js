import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Product from '@/views/Product'
import Button from '@/views/Button'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { name: 'product', path: '/Product/:id', component: Product },
    { name: 'button', path: '/Button', component: Button }
  ]
})

export default router
