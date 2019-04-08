<template>
  <div class="home">
    <div class="premium-row">
      <premium-card/>
      <premium-card/>
      <premium-card/>
      <premium-card/>
    </div>

    <div class="regular-row">
      <regular-card/>
      <regular-card/>
      <regular-card/>
      <regular-card/>
      <regular-card/>
    </div>
  </div>
</template>

<script>
import PremiumCards from '@/components/PremiumCards'
import RegularCards from '@/components/RegularCards'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    'premium-card': PremiumCards,
    'regular-card': RegularCards
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .home {
    margin: 1rem 0;
  }

  .premium-row {
    width: 100%;
    overflow-x: scroll;
    padding-bottom: 5px;
    white-space: nowrap;
    position: relative;
  }

  .regular-row {
    margin: 1rem;
  }
}
</style>
