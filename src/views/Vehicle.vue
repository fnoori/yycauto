<template>
  <div class="container vehicle">
    <h3>
      <div class="title">2017 Honda Civic SE</div>
      <div class="price">$23,000</div>
    </h3>

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

    <div class="description">
      <h6>Description</h6>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div class="details">
      <b-tabs pills>
        <b-tab title="Tab 1" active>
          <b-list-group class="vehicle-details">
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </b-tab>
        <b-tab title="Tab 2">
          <b-list-group class="vehicle-details">
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </b-tab>
      </b-tabs>
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
  h3 {
    display: flex;
  }
  h3 .title {
    text-overflow: ellipsis;
    width: 25rem;
    white-space: nowrap;
    overflow: hidden;
  }
  h3 .price {
    margin-left: auto;
    color: green;
    font-weight: bold;
  }

  /* bootstrap-vue overrides */


  .vehicle {
    margin-top: 1rem;
    width: 80%;
  }
  .image-display {
    margin: 0 auto;
  }

  .description {
    padding: 0.5rem;
    margin: 2rem 1rem;
    text-align: justify;
  }
  .description h6 {
    color: rgba(0,0,0,0.6);
  }

  .details {
    padding: 0.5rem;
    margin: 2rem 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  }
  .details .vehicle-details {
    margin-top: 1rem;
  }

  @media (max-width: 630px) {
    h3 {
      font-size: 1.4rem;
    }

    .vehicle {
      margin: 1rem 0;
      padding: 0.3rem;
      width: 100%;
      max-width: none;
    }
  }
</style>
