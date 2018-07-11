<template>
  <div>
    Vehicle ID is {{vehicleId}}
    <br/>
    Vehicle Details
    <br/>
    {{vehicleDetails}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      vehicleDetails: null
    };
  },
  computed: {
    vehicleId() {
      return this.$route.params.vehicleId;
    }
  },
  mounted() {
    axios
      .get(process.env.API_ROUTE + `vehicles/byId/${this.vehicleId}`)
      .then(response => {
        this.vehicleDetails = response.data
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
