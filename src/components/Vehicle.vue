<template>
  <div class="vehicle">
    <div v-if="dataReady">
      <carousel :per-page="1" paginationSize=5>
        <slide v-for="photo in vehicleDetails.vehicle.VehiclePhotos" v-bind:key="photo.message">
          <img 
            :src="apiRoute + 'dealerships/' + vehicleDetails.vehicle.Dealership.name.split(' ').join('_') + '/' + vehicleDetails.vehicle._id + '/' + photo"
            class="carousel-img"/>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      apiRoute: process.env.GOOGLE_BUCKET,
      vehicleDetails: null,
      dataReady: false
    };
  },
  computed: {
    vehicleId() {
      return this.$route.params.vehicleId;
    }
  },
  created() {
    axios
      .get(process.env.API_ROUTE + `vehicles/byId/${this.vehicleId}`)
      .then(response => {
        this.vehicleDetails = response.data
        console.log(this.vehicleDetails)
        this.$nextTick(() => this.afterDataLoad())
      })
      .catch(err => {
        console.log("Error", err);
      });
  },
  methods: {
    afterDataLoad: function() {
      this.dataReady = true
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .vehicle {
    width: 30rem;
    margin: 0 auto; 
  }
  .carousel-img {
    width: 28rem !important
  }
</style>
