<template>
  <div class="container vehicle">
    <h3>Honda Civic</h3>
    <div class="main-content">

      <div class="top-content">
        <div class="image-display">
          <b-carousel
            id="carousel1"
            style="text-shadow: 1px 1px 2px #333;"
            controls
            background="#ababab"
            no-animation: true
            img-width="1024"
            img-height="480"
            v-model="slide"
            :interval="0"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
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

        <div class="dealership-info">

        </div>
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
    height: 38rem;
    margin-top: 1rem;
    padding: 1rem;
  }
  .main-content {
    height: 30rem;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.1);
    padding: 1rem;
  }
  .top-content {
    display: flex;
  }
  .image-display {
    width: 60vw;
    display: flex;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.1);
  }
  .dealership-info {
    height: auto;
    display: flex;
    width: 21rem;
    margin-left: 0.3rem;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.1);
  }

  @media (max-width: 991px) {
    .top-content {
      display: inline-block;
    }
    .image-display {
      width: 100%;
      display: inline-block;
    }
    .dealership-info {
      height: 5rem;
      display: inline-block;
      width: 100%;
    }
  }
</style>
