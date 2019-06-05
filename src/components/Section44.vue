<template>
  <div id ="section44">
    <h1>Section 44</h1>
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
export default {
  name: 'Section43',
  components: {
    EditForm: () => import('@/components/EditForm')
  },
  computed: {
    message () { return this.$store.getters.message }
  }
}
</script>
