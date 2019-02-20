<template>
  <div class="container vehicle">
    <h3>2017 Honda Civic SE</h3>
    <div class="vehicle">

      <div class="image-display">
        <b-carousel
          id="carousel1"
          style="text-shadow: 1px 1px 2px #333;"
          controls
          background="#ababab"
          no-animation
          img-width="1024"
          img-height="480"
          indicators
          :interval="0">
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=52"/>

          <!-- Slides with custom text -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=54">
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=58" />

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"/>
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide
            caption="Blank Image" img-blank img-alt="Blank image">
          </b-carousel-slide>
        </b-carousel>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'vehicle',
    computed: {
      vehicleId() {
        return this.$route.params.vehicle_id
      }
    },
    created() {
      return this.$route.params.vehicle_id
    },
    mounted() {
      /*
      axios.get(`${process.env.VUE_APP_API_ROUTE}/vehicles/get_vehicle_by_id/${this.vehicleId}`)
      .then(vehicle => {
        console.log(vehicle)
      }).catch(axiosGetErr => {
        alert(`Error when trying to retrieve vehicle with id
                ${axiosGetErr}`)
      })
      */
    }
  }
</script>

<style lang="css" scoped>

  .vehicle {
    height: 50rem;
    margin-top: 1rem;
  }
  .image-display {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 525px) {
  }
</style>
