import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from '@/store/moduleA'
import moduleB from '@/store/moduleB'
import axiosModule from '@/store/axiosModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    moduleA,
    moduleB,
    axiosModuleA: axiosModule,
    axiosModuleB: axiosModule
  },
  state: {
    count: 0,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 300 }
    ],
    message: '初期メッセージ'
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement: state => [state.count--],
    mutationType (state, payload) {
      state.count = payload
    },
    mutationList (state, { id, name, price }) {
      state.list.push({ id, name, price })
    },
    setMessage (state, payload) {
      state.message = payload.message
    }
  },
  getters: {
    count (state, getters, rootState, rootGetter) {
      return state.count
    },
    max (state) {
      return state.list.reduce((a, b) => {
        return a > b.price ? a : b.price
      }, 0)
    },
    item (state) {
      return id => state.list.find(el => el.id === id)
    },
    name (state, getters) {
      return id => getters.item(id).name
    },
    message (state) {
      return state.message
    }
  },
  actions: {
    reset ({ commit }, payload) {
      commit('mutationType', payload)
    },
    increment ({ commit }) {
      commit('increment')
    },
    doUpdate ({ commit }, message) {
      commit('setMessage', { message })
    }
  }
})

// eslint-disable-next-line no-unused-vars
const unwatch = store.watch(
  (state, getters) => {
    return state.count // 監視したいデータを返す
  },
  (newVal, oldVal) => {
    // 処理
  }
)
// コミットにフック
store.subscribe((mutation, state) => {
  console.log(mutation.type)
  console.log(mutation.payload)
})

// ディスパッチにフック
store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

if (module.hot) {
  module.hot.accept(['@/store/axiosModule.js'], () => {
    // 更新されたモジュールの読み込み
    const myModule = require('@/store/axiosModule.js').default
    // 新しい定義をセット
    store.hotUpdate({
      modules: {
        myModule: myModule
      }
    })
  })
}

export default store
