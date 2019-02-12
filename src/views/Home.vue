<template>
  <div class="home">
    <div class="tier-one-row">
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
    </div>

    <div class="tier-two-row">
      <tier-two/>
      <tier-two/>
      <tier-two/>
      <tier-two/>
      <tier-two/>
      <tier-two/>
      <tier-two/>
      <tier-two/>
    </div>
  </div>
</template>

<script>
import AuthService from '../auth/AuthService'
import TierOne from '../components/TierOne'
import TierTwo from '../components/TierTwo'
import axios from 'axios'
const auth = new AuthService()

export default {
  name: 'home',
  components: {
    'tier-one': TierOne,
    'tier-two': TierTwo
  },
  data () {
    return {
      auth,
      authenticated: auth.authenticated,

      vehicles: null
    }
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_API_ROUTE}/vehicles/get_all_vehicles/0/5`)
    .then((vehicles) => {
      this.vehicles = vehicles.data
    }).catch(axiosGetErr => {
      alert(`Error when trying to retrieve vehicles
              ${axiosGetErr}`)
    })
  },
  methods: {
    login () {
      auth.login()
    },
    logout () {
      auth.logout()
    }
  }
}
</script>

<style scoped>
  .home {
    margin: 1rem 0;
  }

  .tier-one-row {
    width: 100%;
    padding-top: 10px;
    overflow-x: scroll;
    padding-bottom: 5px;
    white-space: nowrap;
    position: relative;
  }
</style>
