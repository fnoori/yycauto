<template>
  <div class="vehicle container">
    <div class="row">
      <h5>{{ year }} {{ make }} {{ model }} {{ trim }}</h5>
    </div>
    <div class="row">
      <gallery :images="images"/>
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery'

export default {
  name: 'Vehicle',
  components: {
    'gallery': Gallery
  },
  data () {
    return {
      vehicle_id: '1234',
      make: 'Honda',
      model: 'Civic',
      trim: 'SE',
      year: '2018',
      price: '23,000',
      images: [
        'https://picsum.photos/250/250/?image=54',
        'https://picsum.photos/250/250/?image=58',
        'https://picsum.photos/250/250/?image=59',
        'https://picsum.photos/250/250/?image=59',
        'https://picsum.photos/250/250/?image=59',
        'https://picsum.photos/250/250/?image=59'
      ],

      dealershipName: 'Generic Dealership'
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .vehicle {
    margin: .5rem;
    height: 20rem;

    .gallery {
      @include vehicle-gallery;
    }
  }
}
</style>
