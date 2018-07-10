<template>
  <div class="home container-fluid">
    <tier-one v-bind:carDetails="items"></tier-one>
    <hr/>
    <tier-two v-bind:carDetails="items"></tier-two>
  </div>
</template>

<script>
  import TierOne from "./TierOne"
  import TierTwo from "./TierTwo"
  import TierThree from "./TierThree"

  import axios from 'axios'

  export default {
    components: {
      'tier-one': TierOne,
      'tier-two': TierTwo,
      'tier-three': TierThree
    },
    data() {
      return {
        lazyLoad: 0,
        items: []
      }
    },
    mounted() {
      var config = {
        headers: {'Authorization': 'bearer ' + localStorage.getItem('access_token')}
      }

      axios.get(process.env.API_ROUTE + 'vehicles/' + this.lazyLoad + '/10', config)
      .then((response) => {
        this.items = response.data.sort(function(a, b) {
          return 0.5 - Math.random()
        })
      }).catch(err => {
        console.log('Error', err)
      })
    },
    methods: {
      pageInit: function() {

      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }

  @media (max-width: 767px) {
  }
</style>