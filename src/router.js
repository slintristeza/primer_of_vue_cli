import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import ProductList from '@/views/ProductList'
import Product from '@/views/Product'
import ProductHome from '@/views/Product/Home'
import ProductReview from '@/views/Product/Review'
import ProductReviewDetail from '@/views/Product/ReviewDetail'
import Button from '@/views/Button'
import Store from '@/store.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Product',
      component: ProductList,
      beforeEnter (to, from, next) {
        console.log('product: beforeEnter')
        next()
      }
    },
    {
      path: '/Product/:id(\\d+)', // 数字のみIDにマッチ
      component: Product,
      props: route => ({ id: Number(route.params.id) }),
      children: [
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        {
          name: 'review-detail',
          path: 'review/:rid',
          component: ProductReviewDetail
        }
      ]
    },
    {
      name: 'button',
      path: '/Button',
      component: Button
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('global:beforeEach')
  Store.commit('view/start')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('global:beforeResolve')
  next()
})

router.afterEach((to, from) => {
  console.log('global:afterEach')
  Store.commit('view/end')
  // すべてのルートに共通する処理
})
export default router
