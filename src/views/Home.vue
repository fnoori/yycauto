<template>
  <div class="home">
    <premium-card/>
  </div>
</template>

<script>
import PremiumCards from '@/components/PremiumCards'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    'premium-card': PremiumCards
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh
}
</style>
