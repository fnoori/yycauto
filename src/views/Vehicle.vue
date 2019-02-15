<template>
  <div>
    you made it to the vehicle route !
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'vehicle',
    computed: {
      vehicleId() {
        return this.$route.params.vehicle_id
      }
    },
    created() {
      return this.$route.params.vehicle_id
    },
    mounted() {
      axios.get(`${process.env.VUE_APP_API_ROUTE}/vehicles/get_vehicle_by_id/${this.vehicleId}`)
      .then(vehicle => {
        console.log(vehicle)
      }).catch(axiosGetErr => {
        alert(`Error when trying to retrieve vehicle with id
                ${axiosGetErr}`)
      })
    }
  }
</script>

<style lang="css" scoped>
</style>
