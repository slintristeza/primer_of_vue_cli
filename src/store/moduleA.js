import moduleC from '@/store/moduleC'

export default {
  namespaced: true,
  modules: {
    moduleC
  },
  state: {
    count: 1
  },
  mutations: {
    update (state) {
      state.count += 100
    }
  },
  getters: {
    count (state, getters, rootState, rootGetter) {
      return state.count
    },
    test (state, getters, rootState, rootGetters) {
      return [getters.item, rootGetters.user]
    },
    item () { return 'getter: moduleA/item' }
  },
  actions: {
    test ({ dispatch, commit, getters, rootGetters }) {
      // 自分自身のupdate
      dispatch('update')
      // ルートのupdateをdispatch
      dispatch('update', null, { root: true })
      // ルートのupdateをcommit
      commit('update', null, { root: true })
      // ルートに登録されたmoduleBのupdate
      commit('moduleB/update', null, { root: true })
    },
    update () { console.log('action: moduleA/update') }
  }
}
