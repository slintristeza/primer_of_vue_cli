<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld,
    section43: () => import('@/components/Section43'),
    section44: () => import('@/components/Section44')
  }
}
</script>
