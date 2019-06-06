import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import ProductList from '@/views/ProductList'
import Product from '@/views/Product'
import ProductHome from '@/views/Product/Home'
import ProductReview from '@/views/Product/Review'
import ProductReviewDetail from '@/views/Product/ReviewDetail'
import Button from '@/views/Button'

Vue.use(VueRouter)

const router = new VueRouter({
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

export default router
