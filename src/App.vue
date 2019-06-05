<template>
  <div id="app">
    <section43></section43>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld,
    section43: () => import('@/components/section43')
  }
}
</script>
