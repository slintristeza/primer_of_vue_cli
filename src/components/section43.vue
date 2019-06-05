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
    <button @click="incrementValue">インクリメント</button>
    <button @click="incrementValueUseDispatch">インクリメント(dispatch)</button>
    <button @click="resetValue">リセット</button>
    <button @click="changeArrayValue">配列の値変更</button>
  </div>
</template>

<script>

export default {
  name: 'section43',
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
  },
  methods: {
    changeArrayValue () {
      this.$store.commit('mutationList', { id: 4, name: 'おれんじ', price: 400 })
    },
    resetValue () {
      this.$store.dispatch('reset', 1)
    },
    incrementValue () {
      this.$store.commit('increment')
    },
    incrementValueUseDispatch () {
      this.$store.dispatch('increment')
    }
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
