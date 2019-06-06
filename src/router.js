import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import ProductList from '@/views/ProductList'
import Product from '@/views/Product'
import Button from '@/views/Button'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Product',
      component: ProductList
    },
    {
      path: '/Product/:id(\\d+)', // 数字のみIDにマッチ
      component: Product,
      props: route => ({ id: Number(route.params.id) })
    },
    {
      name: 'button',
      path: '/Button',
      component: Button
    }
  ]
})

export default router
