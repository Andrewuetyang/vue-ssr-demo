<template>
  <div>李四的对象是：{{name || 'null'}}</div>
</template>

<script>
  export default {
    title: '李四',
    data () {
      return {
        id: 3
      }
    },
    computed: {
      name () {
        return this.$store.state.users[this.id]
      } 
    },
    asyncData ({store, route}) {
      store.dispatch('FETCH_USER', {id: 3})
    }
  }
</script>