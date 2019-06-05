<template>
  <div id="app">
    <section43></section43>
    <section44></section44>
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
