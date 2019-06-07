<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product">商品情報</router-link>
      <router-link to="button" tag="button">ボタン</router-link>
    </nav>
    <transition name="view">
      <router-view />
    </transition>
    <LoadingOverlay />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // コンポーネントの非同期読み込みの書き方
    section43: () => import('@/components/Section43'),
    section44: () => import('@/components/Section44'),
    LoadingOverlay: () => import('@/components/LoadingOverlay')
  }
}
</script>

<style>
/* ナビゲーション */
nav {
    display: flex;
    align-items: center;
    background: #222;
}
nav a {
    display: block;
    padding: 0.5em;
    color: #eee;
    line-height: 1em;
    text-decoration: none;
}
/* アクティブなリンク */
.router-link-active {
    background: palevioletred;
}

.view-enter-active, .view-leave-active {
  transition: opacity 0.5s;
}
.view-leave-active {
  position: absolute;
}
.view-enter, .view-leave-to {
  opacity: 0;
}
</style>
