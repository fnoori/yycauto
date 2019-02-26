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

    <div class="details-cols">
      <div class="details-basic">
        <div class="details-title font-weight-bold">Basic</div>
        <b-list-group>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Make
            </div>
            <div class="details-cols-value">
              Honda
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Model
            </div>
            <div class="details-cols-value">
              Civic
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Trim
            </div>
            <div class="details-cols-value">
              SE
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Kilometres
            </div>
            <div class="details-cols-value">
              23,000
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Fuel Type
            </div>
            <div class="details-cols-value">
              Gas
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Seats
            </div>
            <div class="details-cols-value">
              5
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              CarProof
            </div>
            <div class="details-cols-value">
              No
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="details-mechanical">
        <div class="mechanical-title font-weight-bold">Mechanical</div>
        <b-list-group>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Transmission
            </div>
            <div class="details-cols-value">
              Auto
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Engine (L)
            </div>
            <div class="details-cols-value">
              1.8
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Torque
            </div>
            <div class="details-cols-value">
              120 @ 5,000
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Fuel Grade
            </div>
            <div class="details-cols-value">
              Regular
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="details-environmental">
        <div class="environmental-title font-weight-bold">Environmental</div>
        <b-list-group>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              City
            </div>
            <div class="details-cols-value">
              7.8
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Highway
            </div>
            <div class="details-cols-value">
              8.4
            </div>
          </b-list-group-item>
          <b-list-group-item class="details-cols-row">
            <div class="details-cols-title">
              Combined
            </div>
            <div class="details-cols-value">
              8.0
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>

    </div>

    <!-- pills only visible on mobile/smaller screens -->
    <div class="details details-pills">
      <b-tabs pills v-model="tabIndex">
        <b-tab title="Basic" :title-link-class="linkClass(0)">
          <b-list-group class="vehicle-details">
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Make</div>
                <div class="value">Honda</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Model</div>
                <div class="value">Civic</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Trim</div>
                <div class="value">SE</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Kilometres</div>
                <div class="value">23,000</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Fuel Type</div>
                <div class="value">Gas</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Seats</div>
                <div class="value">5</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">CarProof</div>
                <div class="value">No</div>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-tab>
        <b-tab title="Mechanical" :title-link-class="linkClass(1)">
          <b-list-group class="vehicle-details">
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Transmission</div>
                <div class="value">Auto</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Engine (L)</div>
                <div class="value">1.8</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Torque</div>
                <div class="value">120 @ 5,000</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Fuel Grade</div>
                <div class="value">Regular</div>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-tab>
        <b-tab title="Environmental" :title-link-class="linkClass(2)">
          <b-list-group class="vehicle-details">
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">City</div>
                <div class="value">7.8</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Highway</div>
                <div class="value">8.4</div>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="list-contents">
                <div class="title">Combined</div>
                <div class="value">8.0</div>
              </div>
            </b-list-group-item>
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
    data() {
      return {
        tabIndex: 0
      }
    },
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
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['text-light']
        } else {
          return ['text-dark']
        }
      }
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


  .details-pills {
    display: none;
  }
  .details-cols {
    display: inline-block;
    width: 100%;
    margin: 0 5%;
  }
  .details-cols .details-basic {
    width: 33.33%;
    display: inline-block;
  }
  .details-cols .details-mechanical {
    width: 33.33%;
    display: inline-block;
  }
  .details-cols .details-environmental {
    width: 33.33%;
    display: inline-block;
  }
  .details-cols .details-cols-row {
    display: inline-flex;
  }

  .details-cols .details-cols-title {
    width: 50%;
    color: rgba(0,0,0,0.6);
    font-size: 0.9rem;
  }
  .details-cols .details-cols-value {
    width: 50%;
    font-size: 0.9rem;
  }

  @media (max-width: 830px) {
    .details-pills {
      display: block;
    }
    .details-cols {
      display: none;
    }
    .details {
      width: 80%;
      margin: 0 auto;
    }
    .list-contents {
      margin: 0 auto;
      width: 70%;
    }
    .details .vehicle-details {
      margin-top: 1rem;
    }
    .details .title {
      display: inline-block;
      width: 50%;
      color: rgba(0,0,0,0.6);
      font-size: 0.9rem;
    }
    .details .value {
      display: inline-block;
      font-size: 0.9rem;
      width: 50%;
    }
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
