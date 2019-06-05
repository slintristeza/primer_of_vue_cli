<template>
  <div id="edit-form">
    <h3>バインドとイベントを利用するケース</h3>
    <input type="text" :value="message" @input="doUpdate">
    <h3>v-modelを利用するケース</h3>
    <input v-model="message2">
    <h3>mapGettersの利用</h3>
    <input v-model="message">
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'

export default {
  name: 'EditForm',
  computed: {
    message () { return this.$store.getters.message },
    message2: {
      get () { return this.$store.getters.message },
      set (value) { this.$store.dispatch('doUpdate', value) }
    },

    ...mapGetters([
      'message'
    ])

  },
  methods: {
    doUpdate (event) {
      this.$store.dispatch('doUpdate', event.target.value)
    }
  }
}
</script>
