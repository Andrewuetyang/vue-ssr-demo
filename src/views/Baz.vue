<template>
  <div>王二的对象是：{{name || 'null'}}</div>
</template>

<script>
  export default {
    title: '王二',
    data () {
      return {
        id: 2
      }
    },
    computed: {
      name () {
        return this.$store.state.users[this.id]
      } 
    },
    asyncData ({store, route}) {
      store.dispatch('FETCH_USER', {id: 2})
    }
  }
</script>