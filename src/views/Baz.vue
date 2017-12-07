<template>
  <div>李四的对象是：{{name || 'null'}}</div>
</template>

<script>
  export default {
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
    created () {
      this.getUser()
    },
    methods: {
      getUser () {
        this.$store.dispatch('FETCH_USER', {id: this.id})
      }
    }
  }
</script>