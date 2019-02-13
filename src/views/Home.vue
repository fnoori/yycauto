<template>
  <div class="home">
    <div class="tier-one-row">
      <tier-one v-for="vehicle in tierOneVehicles" v-bind:key="vehicle._id" v-bind:vehicle="vehicle"/>
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

      tierOneVehicles: null,
      tierTwoVehicles: null
    }
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_API_ROUTE}/vehicles/get_all_tier_two_vehicles/0/5`)
    .then((vehicles) => {
      this.tierTwoVehicles = vehicles.data
      console.log(this.tierTwoVehicles)
    }).catch(axiosGetErr => {
      alert(`Error when trying to retrieve vehicles
              ${axiosGetErr}`)
    })

    axios.get(`${process.env.VUE_APP_API_ROUTE}/vehicles/tier_one`)
    .then((vehicles) => {
      this.tierOneVehicles = vehicles.data
      console.log(this.tierOneVehicles)
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
