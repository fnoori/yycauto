<template>
  <div class="spinner">
    <img src="../assets/logo.png" alt="loading"/>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'callback',
    data() {
      this.handleAuthentication()
      return {}
    },
    methods: {
      ...mapActions([
        'handleAuthentication'
      ])
    }
  }
</script>

<style>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
