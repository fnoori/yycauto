<template>
  <div class="vehicle container">
    <div class="row m-0">
      <h5>{{ year }} {{ make }} {{ model }} {{ trim }}</h5>
    </div>
    <div class="row">
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
    <div class="row">

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
@media (min-width: 320px) {
  .vehicle {
    height: 40rem;
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
  }
}
</style>
