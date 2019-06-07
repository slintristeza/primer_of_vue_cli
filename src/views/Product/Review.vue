<template>
  <div class="review-list">
    <h1>レビュー一覧</h1>
    <!-- 実装方法は商品一覧とだいたい同じ -->
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    setTimeout(next, 1000)
  }
}
</script>
