<template>
  <div class="vehicle">
    <div v-if="dataReady">
      <div class="title">
        <h4>
          <div class="name">
            {{vehicleDetails.vehicle.BasicInfo.Year}}
            {{vehicleDetails.vehicle.BasicInfo.Make}}
            {{vehicleDetails.vehicle.BasicInfo.Model}}
          </div>
          <div class="price">
            $ {{vehicleDetails.vehicle.BasicInfo.Price}}
          </div>
        </h4>
      </div>

      <carousel 
        :per-page="1" 
        :paginationSize=5
        class="text-center">
        <slide v-for="photo in vehicleDetails.vehicle.VehiclePhotos" v-bind:key="photo.message">
          <img 
            :src="apiRoute + 'dealerships/' + vehicleDetails.vehicle.Dealership.name.split(' ').join('_') + '/' + vehicleDetails.vehicle._id + '/' + photo"
            class="carousel-img"/>
        </slide>
      </carousel>

      <div class="basic-info">
        <h5>Basic Info.</h5>
        <div class="basic-info-content">
          <div class="row">
            <div class="col basic-info-cols">
              <div class="info-title">Make & Model</div>
              <div class="info-value">
                {{vehicleDetails.vehicle.BasicInfo.Make}}
                {{vehicleDetails.vehicle.BasicInfo.Model}}
              </div>
            </div>
            <div class="col basic-info-cols">
              <div class="info-title">Year</div>
              <div class="info-value">{{vehicleDetails.vehicle.BasicInfo.Year}}</div>
            </div>
            <div class="w-100"></div>
            <div class="col basic-info-cols">
              <div class="info-title">Interior Colour</div>
              <div class="info-value">{{vehicleDetails.vehicle.BasicInfo['Interior Colour']}}</div>
            </div>
            <div class="col basic-info-cols">
              <div class="info-title">Exterior Colour</div>
              <div class="info-value">{{vehicleDetails.vehicle.BasicInfo['Exterior Colour']}}</div>
            </div>
            <div class="w-100"></div>
            <div class="col basic-info-cols">
              <div class="info-title">Body Type</div>
              <div class="info-value">{{vehicleDetails.vehicle.BasicInfo.Type}}</div>
            </div>
            <div class="col basic-info-cols">
              <div class="info-title">Doors</div>
              <div class="info-value">{{vehicleDetails.vehicle.BasicInfo.Doors}}</div>
            </div>
            <div class="w-100"></div>
            <div class="col basic-info-cols">
              <div class="info-title">Seats</div>
              <div class="info-value">{{vehicleDetails.vehicle.BasicInfo.Seats}}</div>
            </div>
            <div class="col basic-info-cols">
              <div class="info-title">Fuel Type</div>
              <div class="info-value">{{vehicleDetails.vehicle.BasicInfo['Fuel Type']}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="description">
        <h5>Description</h5>
        <div class="container">
          {{vehicleDetails.vehicle.BasicInfo.Description}}
        </div>
      </div>
      <div class="detailed-info">
        <h5>Detaild Info.</h5>
        <div class="container">
        </div>
      </div>
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
  watch: {
    '$route': function(from, to) {
      this.fetchVehicle()
    }
  },
  computed: {
    vehicleId() {
      return this.$route.params.vehicleId;
    }
  },
  created() {
    this.fetchVehicle()
  },
  methods: {
    fetchVehicle: function() {
      if (this.vehicleId !== undefined) {
        axios
          .get(process.env.API_ROUTE + `vehicles/byId/${this.vehicleId}`)
          .then(response => {
            this.vehicleDetails = response.data
            this.$nextTick(() => this.afterDataLoad())
          })
          .catch(err => {
            console.log("Error", err);
          });
      }
    },
    afterDataLoad: function() {
      this.dataReady = true
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .vehicle {
    width: 70vw;
    margin: 1rem auto;
  }
  .carousel-img {
    width: 35rem !important;
    padding: 0 0.5rem;
  }
  .title h4 div {
    display: block;
  }
  .title .name {
    font-weight: bold;
  }
  .title .price {
    color: #70A036;
  }
  .info-title {
    float: left;
    background: rgba(0,0,0,0.1);
    height: 3rem;
    line-height: 3rem;
    vertical-align: middle;
    padding: 0 1rem;
    width: 13vw;
    font-size: 1.3vw;
    text-align: center;
  }
  .info-value {
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5vw;
    vertical-align: middle;
  }
  .basic-info {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    height: 20rem;
    padding: 1rem;
  }
  .basic-info-content {
    padding: 1rem;
  }
  .basic-info-cols {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    padding: 0 !important;
    margin: .2rem;
  }
  .basic-info-cols img {
    width: 2rem;
  }
  .basic-info-cols div {
  }
  .description {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    height: 20rem;
    margin: 1rem 0;
  }
  .detailed-info {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    height: 20rem;
  }

  @media(max-width: 800px) {
    .vehicle {
      width: 90vw;
      margin: 1rem auto;
    }
    .info-title {
      padding: 0rem !important;
      width: 18vw;
      font-size: 2vw;
    }
    .info-value {
      font-size: 2vw;
    }
  }
</style>
