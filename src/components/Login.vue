<template>
  <div class="hello">
    <button @click="login">Login</button>
    <button @click="handleAuthentication">handleAuthentication</button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      ...mapActions([
        'login',
        'handleAuthentication'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
