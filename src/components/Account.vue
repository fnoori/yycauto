<template>
  <div>
    <div v-if="isAuthenticated">
      account page
    </div>
    <div v-else>
      You are not authorized to view this page
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapGetters([
        'isAuthenticated'
      ])
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
