<template>
  <div id="app">
    <my-header/>
    <router-view/>
    <my-footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    'my-header': Header,
    'my-footer': Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  
</style>
