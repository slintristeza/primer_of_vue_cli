<template>
  <div id="app">
    <h3>引数なし</h3>
    <ol>
      <li>{{ count }}</li>
      <li>{{ max }}</li>
    </ol>
    <h3>引数付き</h3>
    <ol>
      <li>{{ itemA }}</li>
      <li>{{ itemB(1) }}</li>
      <li>{{ nameA }}</li>
      <li>{{ nameB(1) }}</li>
    </ol>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created () {
    console.log(this.$store.state.count)
    this.$store.commit('increment')
    console.log(this.$store.state.count)
    this.$store.commit('decrement')
    console.log(this.$store.state.count)
  },
  computed: {
    // 引数なしゲッター
    count () { return this.$store.getters.count },
    max () { return this.$store.getters.max },
    // 引数付きゲッター
    itemA () { return this.$store.getters.item(1) }, // good
    itemB () { return this.$store.getters.item }, // bad
    nameA () { return this.$store.getters.name(1) }, // good
    nameB () { return this.$store.getters.name } // bad
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
