<template>
  <div class="product-home">
    <h1>商品情報</h1>
    <p>ID.{{ detail.id }}の詳細を表示</p>
    <div class="product-table">
      <dt>商品名</dt><dd>{{ detail.name }}</dd>
      <dt>価格</dt><dd>{{ detail.price }}</dd>
      <dt>商品説明</dt><dd>{{ detail.content }}</dd>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: { id: Number },
  computed: mapGetters('product', ['detail'])
}
</script>
