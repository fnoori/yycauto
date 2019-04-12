<template>
  <div class="vehicle container">
    <div class="row m-0">
      <h5>{{ year }} {{ make }} {{ model }} {{ trim }}</h5>
    </div>
    <div class="row">
      <my-gallery
        :images="images"
        ref="lightbox"
        :show-caption="true"
        :show-light-box="false"/>
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
      images: [
        {
          thumb: 'https://via.placeholder.com/1920x1080?text=image1',
          src: 'https://via.placeholder.com/1920x1080?text=image1'
        },
        {
          thumb: 'https://via.placeholder.com/1920x1080?text=image2',
          src: 'https://via.placeholder.com/1920x1080?text=image2'
        },
        {
          thumb: 'https://via.placeholder.com/1920x1080?text=image3',
          src: 'https://via.placeholder.com/1920x1080?text=image3'
        },
        {
          thumb: 'https://via.placeholder.com/1920x1080?text=image4',
          src: 'https://via.placeholder.com/1920x1080?text=image4'
        },
        {
          thumb: 'https://via.placeholder.com/1920x1080?text=image5',
          src: 'https://via.placeholder.com/1920x1080?text=image5'
        },
        {
          thumb: 'https://via.placeholder.com/1920x1080?text=image6',
          src: 'https://via.placeholder.com/1920x1080?text=image6'
        }
      ],

      dealershipName: 'Generic Dealership'
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .vehicle {
    height: 20rem;
    margin-top: 1rem;
  }
}
</style>
