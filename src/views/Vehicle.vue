<template>
  <div v-if="isLoaded" class="vehicle container">
    <div class="row m-0">
      <h5>{{ vehicle.basic_info.year }} {{ vehicle.basic_info.make }} {{ vehicle.basic_info.model }} {{ vehicle.basic_info.trim }}</h5>
    </div>
    <div class="row p-1">
      <my-gallery :images="vehicle.images"/>
    </div>
    <div class="row basic-info">
      <div>
        <h5 class="price">$ {{ vehicle.basic_info.price }}</h5>
        <h6>
          <img src="@/assets/icons/kilometres.png" alt="">
          {{ vehicle.basic_info.kilometres }}
        </h6>
        <h6>
          <img src="@/assets/icons/transmission.png" alt="">
          {{ vehicle.mechanical_info.transmission }}
        </h6>
      </div>
    </div>
    <div class="row p-4">
      <b-card border-variant="light" header="Basic Info." class="text-left basic-info">
        <div class="row">
          <div class="col text-right">
            <div class="title">Make</div>
            <div class="value">{{ vehicle.basic_info.make }}</div>
          </div>
          <div class="col text-left">
            <div class="title">Model</div>
            <div class="value">{{ vehicle.basic_info.model }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <div class="title">Trim</div>
            <div class="value">{{ vehicle.basic_info.trim }}</div>
          </div>
          <div class="col text-left">
            <div class="title">Type</div>
            <div class="value">{{ vehicle.basic_info.type }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <div class="title">Exterior Colour</div>
            <div class="value">{{ vehicle.basic_info.exterior_colour }}</div>
          </div>
          <div class="col text-left">
            <div v-if="vehicle.basic_info.interior_colour" class="title">Interior Colour</div>
            <div v-if="vehicle.basic_info.interior_colour" class="value">{{ vehicle.basic_info.interior_colour }}</div>
          </div>
        </div>
      </b-card>

      <b-card border-variant="light" header="Mechanical Info." class="text-left basic-info">
        <div class="row">
          <div class="col text-right">
            <div class="title">Transmission</div>
            <div class="value">{{ vehicle.mechanical_info.transmission }}</div>
          </div>
          <div class="col text-left">
            <div v-if="vehicle.mechanical_info.car_proof" class="title">CarProof</div>
            <div v-if="vehicle.mechanical_info.car_proof" class="value">{{ vehicle.mechanical_info.car_proof }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <div v-if="vehicle.mechanical_info.engine_size" class="title">Engine Size</div>
            <div v-if="vehicle.mechanical_info.engine_size" class="value">{{ vehicle.mechanical_info.engine_size }}</div>
          </div>
          <div class="col text-left">
            <div v-if="vehicle.mechanical_info.cylinders" class="title">Cylinders</div>
            <div v-if="vehicle.mechanical_info.cylinders" class="value">{{ vehicle.mechanical_info.cylinders }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <div v-if="vehicle.mechanical_info.horsepower" class="title">Horsepower</div>
            <div v-if="vehicle.mechanical_info.horsepower" class="value">{{ vehicle.mechanical_info.horsepower }}</div>
          </div>
          <div class="col text-left">
            <div v-if="vehicle.mechanical_info.torque" class="title">Torque</div>
            <div v-if="vehicle.mechanical_info.torque" class="value">{{ vehicle.mechanical_info.torque }}</div>
          </div>
        </div>
      </b-card>

      <b-card
        v-if="vehicle.fuel_economy && (vehicle.fuel_economy.city || vehicle.fuel_economy.highway || vehicle.fuel_economy.combined)"
        border-variant="light"
        header="Fuel Economy"
        class="text-left basic-info">
        <div class="row">
          <div class="col text-right">
            <div v-if="vehicle.fuel_economy.city" class="title">City</div>
            <div v-if="vehicle.fuel_economy.city" class="value">{{ vehicle.fuel_economy.city }}</div>
          </div>
          <div class="col text-left">
            <div v-if="vehicle.fuel_economy.highway" class="title">Highway</div>
            <div v-if="vehicle.fuel_economy.highway" class="value">{{ vehicle.fuel_economy.highway }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <div v-if="vehicle.fuel_economy.combined" class="title">Combined</div>
            <div v-if="vehicle.fuel_economy.combined" class="value">{{ vehicle.fuel_economy.combined }}</div>
          </div>
          <div class="col text-left">
            <div class="title"></div>
            <div class="value"></div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery'
import axios from 'axios'

export default {
  name: 'Vehicle',
  components: {
    'my-gallery': Gallery
  },
  data () {
    return {
      vehicle: Object,
      isLoaded: false
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      console.log(from)
      if (from.name === 'home') {
        axios.get(`${process.env.VUE_APP_API_ROUTE}/vehicles/get-vehicle-by-id/${this.$route.params.vehicle_id}`)
          .then((vehicle) => {
            this.vehicle = vehicle.data
            this.isLoaded = true
          }).catch(vehicleGetErr => {
            alert(`unexpected error when retrieving vehicle`)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-group-item {
  border-radius: 0 !important;
}

@media (min-width: 320px) {
  .vehicle {
    margin-top: 1rem;

    .basic-info {
      display: block;
      margin: .6rem 0rem;
      text-align: end;
      justify-content: end;

      .price {
        color: green;
      }

      img {
        width: 1rem;
        padding-bottom: .2rem;
      }
    }

    .basic-info {
      width: 100%;

      .title {
        color: rgba(0,0,0,0.5);
        font-size: 0.8rem;
      }
      .value {
        color: black;
        font-size: 1rem;
      }
    }

    .info-title {
      font-size: 1.1rem;
    }
  }
}
</style>
