<template>
  <div class="button">
    <h1>ボタン用ページ</h1>
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('component:beforeRouteEnter', this) // -> undefined
    next(vm => {
      console.log(vm) // -> VueComponent
      // nextのコールバックでコンポーネントのインスタンスにアクセス可
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('component:beforeRouteUpdate', this) // -> VueComponent
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('component:beforeRouteLeave', this) // -> VueCopmponent
    next()
  }
}
</script>
