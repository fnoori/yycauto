<template>
    <div id="tierTwo" class="tier-two">
        <b-form-select v-model="selected" :options="options" class="sort-options">
        </b-form-select>
        <div v-on:click="extractVehicleToSee(curr)" class="tier-two-card" v-for="curr in carDetails" v-bind:tmp="curr" v-bind:key="curr.message">
            <!--<img src="../../static/no-photo.png"/>-->
            <!--<router-link to="/vehicle_detail">-->
                <img :src="apiRoute + 'dealerships/' + curr.Dealership.name.split(' ').join('_') + '/' + curr._id + '/' + curr.VehiclePhotos[0]">
                <div class="tier-two-card-body">
                    <div class="tier-two-card-title">
                        <div class="tier-two-card-name">{{curr.BasicInfo.Make}} {{curr.BasicInfo.Model}}</div>
                        <div class="tier-two-card-price">{{curr.BasicInfo.Price}}</div>
                    </div>
                    <div class="tier-two-card-text">
                        <div class="quick-spec-values">
                            <div class="other-spec-value">
                                <div v-if="curr.BasicInfo.Kilometres == 0">
                                    <img class="new-vehicle-icon" src="../../static/store-new-badges-red-white-text.png">
                                </div>
                                <div v-else>
                                    {{curr.BasicInfo.Kilometres}} 
                                    <img class="quick-specs-icon" src="../../static/km-quick-spec.png">
                                </div>
                            </div>
                            <div class="gas-value">
                                {{curr.BasicInfo['Fuel Type']}}
                                <img class="quick-specs-icon" src="../../static/gasoline-pump.png">
                            </div>
                            <div class="other-spec-value">
                                {{curr.MechanicalSpecs.Transmission}}
                                <img class="quick-specs-icon" src="../../static/quick-spec-transmission.png">
                            </div>
                        </div>
                    </div>
                </div>
            <!--</router-link>-->
            <div class="tier-two-card-footer">
                <a href="#">
                    <img :src="apiRoute + 'dealerships/' + curr.Dealership.name.split(' ').join('_') + '/logo.png'" alt="" class="card-logo">
                </a>
                <a :href="'http://maps.google.com/?q=' + curr.Dealership.name" target="_blank" class="location-link">
                    <div>{{ curr.Dealership.name }}</div>
                    <i class="material-icons">
                        location_on
                    </i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    carDetails: {
      type: Array,
      required: true
    }
  },
  components: {},
  data() {
    return {
      apiRoute: process.env.GOOGLE_BUCKET,
      selected: null,
      options: [
        { value: null, text: "Sort" },
        { value: "lowHigh", text: "Price: Low to High" },
        { value: "highLow", text: "Price: High to Low" },
        { value: "makeAZ", text: "Make: A to Z" },
        { value: "makeZA", text: "Make: Z to A" }
      ]
    };
  },
  beforeMount() {
    this.carDetails.sort(function(a, b) {
      return 0.5 - Math.random();
    });
  },
  methods: {
    extractVehicleToSee: function() {

    }
  }
};
</script>

<style scoped>
a,
a:focus,
a:active {
  text-decoration: none !important;
  color: black !important;
}

/* Bootstrap */
.btn {
  border: none;
  border-radius: 0;
}
.custom-select:focus {
  border: 1px solid #ced4da;
}

/* Custom */
.sort-options {
  width: 25%;
  margin-left: 28.6rem;
}
.tier-two {
  width: 38rem;
  margin: 1rem auto;
}
.tier-two-card {
  width: 100%;
  margin: 1rem 0;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
}
.tier-two-card:hover {
  background-color: #eeeeee;
  cursor: pointer;
}
.tier-two-card img {
  width: 40%;
}
.tier-two-card-name {
  font-size: 1.2rem;
}
.tier-two-card-price {
  font-size: 0.9rem;
  color: grey;
}
.tier-two-card-body {
  width: 60%;
  float: right;
  padding: 0.1rem 0.4rem;
}
.tier-two-card-text {
  margin-top: 1rem;
}
.quick-spec-values {
  display: flex;
  text-align: center;
  font-size: 0.9rem;
  width: 100%;
  height: 3rem;
  align-items: center;
  background-color: #bdbdbd;
}
.quick-specs-icon {
  width: 0.7rem !important;
  margin-bottom: 0.15rem;
}
.new-vehicle-icon {
  width: 1.8rem !important;
}
.quick-spec-values div {
  display: inline-block;
  width: 33%;
  text-align: center;
}
.gas-value {
  position: relative;
}
.gas-value:after {
  content: "";
  border-right: 1px solid rgba(0, 0, 0, 1);
  position: absolute;
  height: 20px;
  right: 0;
}
.gas-value:before {
  content: "";
  border-right: 1px solid rgba(0, 0, 0, 1);
  position: absolute;
  height: 20px;
  left: 0;
}
.other-spec-value div {
  width: 100%;
}
.card-btn {
  background-color: #f44336;
  height: 2rem;
  font-size: 0.9rem;
}
.card-btn:hover {
  background-color: #d81e0f;
}
.card-btn:active,
.card-btn:focus {
  background-color: #d81e0f !important;
  border-color: white !important;
  box-shadow: none !important;
}
.tier-two-card-footer {
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.13rem 0.4rem;
  height: 2rem;
}
.card-logo {
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  width: 4rem !important;
}
.location-link {
  float: right;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}
.location-link div {
  display: inline-block;
  text-overflow: ellipsis;
}
.location-link i {
  display: inline-block;
  font-size: 1rem;
}

@media (max-width: 630px) {
  .btn {
    display: inline;
  }
  .tier-two {
    width: 30rem;
  }
  .tier-two-card {
    width: 100%;
  }
  .sort-options {
    margin-left: 22.6rem;
  }
  .tier-two-card-name {
    font-size: 1rem;
  }
  .tier-two-card-text {
    margin-top: 0.1rem !important;
  }
  .tier-two-card-price {
    font-size: 0.8rem;
  }
  .quick-spec-values {
    height: 2.5rem;
  }
  .new-vehicle-icon {
    width: 1.1rem !important;
  }
  .quick-spec-values div {
    font-size: 0.7rem;
  }
  .card-btn {
    font-size: 0.6rem;
    height: 1rem;
  }
}

@media (max-width: 500px) {
  .tier-two {
    width: 90vw;
  }
  .sort-options {
    margin-left: 68vw;
  }
}

@media (max-width: 418px) {
  .sort-options {
    margin-left: 66vw;
    width: 24vw;
  }
  .tier-two-card-name {
    font-size: 4vw;
  }
  .tier-two-card-price {
    font-size: 4vw;
    margin-top: -0.3rem;
  }
  .quick-spec-values {
    height: 8vw;
  }
  .new-vehicle-icon {
    width: 5vw !important;
  }
  .quick-spec-values div {
    font-size: 3vw;
  }
  .gas-value:before {
    content: "";
    border-right: 1px solid rgba(0, 0, 0, 1);
    position: absolute;
    height: 5vw;
    left: 0;
  }
  .gas-value:after {
    content: "";
    border-right: 1px solid rgba(0, 0, 0, 1);
    position: absolute;
    height: 5vw;
    left: 0;
  }
}
@media (max-width: 320px) {
  .tier-two-card-text {
    margin-top: 0.1rem;
  }
}
</style>