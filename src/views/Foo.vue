<template>
  <div>张三的对象是：{{name || 'null'}}</div>
</template>

<script>
  export default {
    title: '张三',
    data () {
      return {
        id: 1
      }
    },
    computed: {
      name () {
        return this.$store.state.users[this.id]
      } 
    },
    asyncData ({store, route}) {
      store.dispatch('FETCH_USER', {id: 1})
    }
  }
</script>
