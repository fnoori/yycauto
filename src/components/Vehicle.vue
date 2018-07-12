<template>
  <div class="vehicle">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      apiRoute: process.env.GOOGLE_BUCKET,
      vehicleDetails: null,
      dataReady: false
    };
  },
  computed: {
    vehicleId() {
      return this.$route.params.vehicleId;
    }
  },
  created() {
    axios
      .get(process.env.API_ROUTE + `vehicles/byId/${this.vehicleId}`)
      .then(response => {
        this.vehicleDetails = response.data
        this.$nextTick(() => this.afterDataLoad())
      })
      .catch(err => {
        console.log("Error", err);
      });
  },
  methods: {
    afterDataLoad: function() {
      this.dataReady = true
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .vehicle {
    width: 55vw;
    margin: 1rem auto;
  }
  .carousel-img {
    width: 28rem !important;
    padding: 0 0.5rem;
  }
  .title h4 div {
    display: inline-block;
  }
  .title .name {
    font-weight: bold;
  }
  .title .price {
    color: #70A036;
  }
</style>
