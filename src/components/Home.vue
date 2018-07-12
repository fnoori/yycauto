<template>
  <div class="home container-fluid">
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
  import TierOne from "./TierOne"
  import TierTwo from "./TierTwo"
  import TierThree from "./TierThree"

  import axios from 'axios'

  export default {
    components: {
      'tier-one': TierOne,
      'tier-two': TierTwo,
      'tier-three': TierThree
    },
    data() {
      return {
        lazyLoad: 0,
        items: []
      }
    },
    mounted() {
      var config = {
        headers: {
          'Authorization': 'bearer ' + localStorage.getItem('access_token'),
          'id_token': localStorage.getItem('id_token')
        }
      }

      axios.get(process.env.API_ROUTE + 'vehicles/' + this.lazyLoad + '/10', config)
      .then((response) => {
        this.items = response.data.sort(function(a, b) {
          return 0.5 - Math.random()
        })
      }).catch(err => {
        console.log('Error', err)
      })
    },
    methods: {
      pageInit: function() {

      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }

  @media (max-width: 767px) {
  }
</style>