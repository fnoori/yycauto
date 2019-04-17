<template>
  <div class="vehicle container">
    <div class="row m-0">
      <h5>{{ year }} {{ make }} {{ model }} {{ trim }}</h5>
    </div>
    <div class="row p-1">
      <my-gallery :images="images"/>
    </div>
    <div class="row basic-info">
      <div>
        <h5 class="price">$ {{ price }}</h5>
        <h6>
          <img src="@/assets/icons/kilometres.png" alt="">
          {{ kilometres }}
        </h6>
        <h6>
          <img src="@/assets/icons/transmission.png" alt="">
          {{ transmission }}
        </h6>
      </div>
    </div>
    <div class="row p-4">
      <b-card border-variant="light" header="Basic Info." class="text-left basic-info">
        <div class="row">
          <div class="col text-right">
            <div class="title">Make</div>
            <div class="value">Honda</div>
          </div>
          <div class="col text-left">
            <div class="title">Model</div>
            <div class="value">Civic</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <div class="title">Trim</div>
            <div class="value">SE</div>
          </div>
          <div class="col text-left">
            <div class="title">Type</div>
            <div class="value">Hatchback</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <div class="title">Exterior Colour</div>
            <div class="value">Black</div>
          </div>
          <div class="col text-left">
            <div class="title">Interior Colour</div>
            <div class="value">Grey</div>
          </div>
        </div>
      </b-card>

      <b-card border-variant="light" header="Mechanical Info." class="text-left basic-info">
        <div class="row">
          <div class="col text-right">
            <div class="title">CarProof</div>
            <div class="value">False</div>
          </div>
          <div class="col text-left">
            <div class="title">Transmission</div>
            <div class="value">Auto</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <div class="title">Engine Size</div>
            <div class="value">1.8</div>
          </div>
          <div class="col text-left">
            <div class="title">Cylinders</div>
            <div class="value">4</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <div class="title">Horsepower</div>
            <div class="value">142</div>
          </div>
          <div class="col text-left">
            <div class="title">Torque</div>
            <div class="value">144</div>
          </div>
        </div>
      </b-card>

      <b-card border-variant="light" header="Fuel Economy" class="text-left basic-info">
        <div class="row">
          <div class="col text-right">
            <div class="title">City</div>
            <div class="value">8.9</div>
          </div>
          <div class="col text-left">
            <div class="title">Highway</div>
            <div class="value">10.9</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <div class="title">Combined</div>
            <div class="value">9.2</div>
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

export default {
  name: 'Vehicle',
  components: {
    'my-gallery': Gallery
  },
  data () {
    // temporary data
    // data will be retrieved from backend
    //  vehicle_id comes from the url params
    //  this is to enable sharing of url to view vehicle
    return {
      vehicle_id: '1234',
      make: 'Honda',
      model: 'Civic',
      trim: 'SE',
      year: '2018',
      price: '23,000',
      kilometres: '5,000',
      transmission: 'Automatic',
      images: [
        'https://via.placeholder.com/1920x1080?text=image1',
        'https://via.placeholder.com/1920x1080?text=image2',
        'https://via.placeholder.com/1920x1080?text=image3',
        'https://via.placeholder.com/1920x1080?text=image4',
        'https://via.placeholder.com/1920x1080?text=image5',
        'https://via.placeholder.com/1920x1080?text=image6'
      ],

      dealershipName: 'Generic Dealership'
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
