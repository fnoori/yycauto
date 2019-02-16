<template>
  <div class="container vehicle">
    <h3>2017 Honda Civic SE</h3>
    <div class="main-content">

      <div class="top-content">
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

        <div class="dealership-info">
          <h4>
            <div class="">Best Dealership</div>
            <img src="@/assets/logos/sponsored_logo.png" alt="">
          </h4>
          <b-list-group>
            <b-list-group-item>
              <div class="title">Price</div>
              <div class="value">19,000</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="title">Year</div>
              <div class="value">2017</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="title">Kilometres</div>
              <div class="value">32,000</div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="title">Doors</div>
              <div class="value">5</div>
            </b-list-group-item>
          </b-list-group>
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

  /* Bootstrap-vue overwrite */
  .dealership-info .list-group-item {
    display: flex;
    border-radius: 0 !important;
    border: none !important;
    padding: initial;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.1);
    margin: .2rem;
  }
  .dealership-info .list-group-item .title {
    background-color: lightcoral;
    padding: 0.5rem;
    display: flex;
    color: white;
    width: 7rem;
  }
  .dealership-info .list-group-item .value {
    padding: 0.5rem;
    display: flex;
  }


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
    display: block;
    width: 21rem;
    margin-left: 0.3rem;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.1);
    padding: 0.5rem;
  }
  .dealership-info h4 {
    display: inline-block;
  }
  .dealership-info h4 img {
    width: 3rem;
    display: inline-block;
    margin-left: 0.5rem;
  }
  .dealership-info h4 div {
    display: inline-block;
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
      margin-left: 0rem;
    }
  }

  @media (max-width: 525px) {
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.2rem;
    }

    .main-content {
      padding: 0;
    }
    .vehicle {
      padding: 0.2rem !important;
      box-shadow: none;
    }
  }
</style>
