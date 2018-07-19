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
      <div class="description">
        <h5>Description</h5>
        <div class="container">
          {{vehicleDetails.vehicle.BasicInfo.Description}}
        </div>
      </div>
      <div class="vehicle-info">
        <div class="row">
          <b-list-group class="col-md-4">
            <h5>Basic Info.</h5>
            <b-list-group-item>
              <div class="list-title d-inline-block">Make & Model</div>
              <div class="d-inline-block list-value">
                {{vehicleDetails.vehicle.BasicInfo.Make}}
                {{vehicleDetails.vehicle.BasicInfo.Model}}
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Tier</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.BasicInfo.Trim}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Year</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.BasicInfo.Year}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Interior Colour</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.BasicInfo['Interior Colour']}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Exterior Colour</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.BasicInfo['Exterior Colour']}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Type</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.BasicInfo.Type}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Doors</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.BasicInfo.Doors}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Seats</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.BasicInfo.Seats}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Fuel Type</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.BasicInfo['Fuel Type']}}</div>
            </b-list-group-item>
          </b-list-group>

          <b-list-group class="col-md-4">
            <h5>Mechanical Info.</h5>
            <b-list-group-item>
              <div class="list-title d-inline-block">Transmission</div>
              <div class="d-inline-block list-value">
                {{vehicleDetails.vehicle.MechanicalSpecs.Transmission}}
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Engine Size</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.MechanicalSpecs['Engine Size (L)']}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Cylinders</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.MechanicalSpecs.Cylinders}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Horsepower</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.MechanicalSpecs['Horsepower @ RPM']}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Torque</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.MechanicalSpecs['Torque (lb - ft) @ RPM']}}</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Rec Fuel</div>
              <div class="d-inline-block list-value">{{vehicleDetails.vehicle.MechanicalSpecs['Recommended Fuel']}}</div>
            </b-list-group-item>
          </b-list-group>

          <b-list-group class="col-md-4">
            <h5>Fuel Economy</h5>
            <b-list-group-item>
              <div class="list-title d-inline-block">City</div>
              <div class="d-inline-block list-value">
                {{vehicleDetails.vehicle.FuelEconomy['City (L/100Km)']}}
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Highway</div>
              <div class="d-inline-block list-value">
                {{vehicleDetails.vehicle.FuelEconomy['Highway (L/100Km)']}}
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-title d-inline-block">Combined</div>
              <div class="d-inline-block list-value">
                {{vehicleDetails.vehicle.FuelEconomy['Combined (L/100Km)']}}
              </div>
            </b-list-group-item>
          </b-list-group>
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
    $route: function(from, to) {
      this.fetchVehicle();
    }
  },
  computed: {
    vehicleId() {
      return this.$route.params.vehicleId;
    }
  },
  created() {
    this.fetchVehicle();
  },
  methods: {
    fetchVehicle: function() {
      if (this.vehicleId !== undefined) {
        axios
          .get(process.env.API_ROUTE + `vehicles/byId/${this.vehicleId}`)
          .then(response => {
            this.vehicleDetails = response.data;
            this.$nextTick(() => this.afterDataLoad());
          })
          .catch(err => {
            console.log("Error", err);
          });
      }
    },
    afterDataLoad: function() {
      this.dataReady = true;
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
.nav-item a {
  color: black !important;
}
.nav-link.active {
  background: #f44336 !important;
  color: white !important;
  width: 100%;
}
.nav:focus {
  border: none !important;
  outline: none !important;
}
.card-header {
  border-bottom: none !important;
}
.list-group-item {
  padding: 0 !important;
  margin: 0.1rem;
}
.row {
  margin-left: 0 !important;
}

.vehicle {
  width: 70vw;
  height: 90rem;
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
  color: #70a036;
}
.vehicle-info {
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  height: 100%;
  padding: 1rem;
}
.basic-info-content {
  padding: 1rem;
}
.list-title {
  padding: 0.5rem 0.5rem 0.5rem 0.5rem !important;
  background: rgba(0, 0, 0, 0.1);
  width: 7.2rem;
  text-align: center;
  font-size: 0.9rem;
}
.list-value {
  font-size: 0.8rem;
  font-weight: bold;
}
.basic-info-cols {
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  padding: 0 !important;
  margin: 0.2rem;
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

@media (max-width: 800px) {
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
