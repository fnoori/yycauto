<template>
  <div class="tier-one">
    <b-card-group class="tier-one-card">
      <b-card
          no-body
          img-top
          img-src="http://www.lmht.com/wp-content/uploads/2016/01/no-image.jpg"
          tag="article"
          footer-tag="footer"
          class="mb-2">
          <div class="card-body">
            <div class="card-title">
                <div class="card-name">Honda Civic</div>
                <div class="card-price">$23,000</div>
            </div>
            <div class="card-text">
                <div class="quick-spec-values">
                  <div class="other-spec-value">
                        10000
                        <img class="quick-specs-icon" src="@/assets/km-quick-spec.png">
                  </div>
                  <div class="gas-value">
                      Gas
                      <img class="quick-specs-icon" src="@/assets/gasoline-pump.png">
                  </div>
                  <div class="other-spec-value">
                      Auto
                      <img class="quick-specs-icon" src="@/assets/quick-spec-transmission.png">
                  </div>
                </div>
            </div>
          </div>
          <div slot="footer" class="card-footer-content">
            <a href="#" class="dealership-page">
              <img src="@/assets/logos/sponsored_logo.png" class="card-logo">
            </a>
            <a href="#" target="_blank" class="location-link">
              Best Dealership
              <img src="@/assets/location.svg" alt="">
            </a>
          </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'TierOne',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .tier-one {
    transition: 0.2s;
    display: inline-flex;
  }
  a,
  a:focus,
  a:active {
    text-decoration: none !important;
    color: black !important;
  }
  footer {
    height: auto;
  }

  /* Bootstrap */
  .card {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    max-width: 18rem;
    border: none;
  }
  .card:hover {
    transition: 0.2s;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .card-body {
    padding: 0.5rem;
  }
  .card-text {
    margin-bottom: 0.5rem;
    text-align: center;
  }
  .btn {
    border: none;
    border-radius: 0;
  }
  /* Custom */
  .tier-one-card {
    display: inline-block;
    margin: 0 0.5rem;
  }
  .card-title {
    margin-bottom: 0.5rem;
  }
  .card-name {
    font-size: 1.2rem;
  }
  .card-price {
    color: grey;
  }
  .card-logo {
    width: 3rem;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 2px;
  }
  .quick-spec-titles {
    display: flex;
    font-weight: 800;
    text-align: center;
    font-size: 0.9rem;
    width: 100%;
  }
  .quick-spec-titles div {
    display: inline-block;
    width: 33%;
  }
  .quick-spec-values {
    display: flex;
    text-align: center;
    font-size: 0.9rem;
    width: 100%;
    height: 3rem;
    align-items: center;
    background-color: #bdbdbd;
  }
  .quick-specs-icon {
    width: 0.7rem;
    margin-bottom: 0.15rem;
  }
  .new-vehicle-icon {
    width: 1.8rem;
  }
  .quick-spec-values div {
    display: inline-block;
    width: 33%;
    text-align: center;
  }
  .gas-value {
    position: relative;
  }
  .gas-value:after {
    content: '';
    border-right: 1px solid rgba(0, 0, 0, 1);
    position: absolute;
    height: 20px;
    right: 0;
  }
  .gas-value:before {
    content: '';
    border-right: 1px solid rgba(0, 0, 0, 1);
    position: absolute;
    height: 20px;
    left: 0;
  }
  .other-spec-value div {
    width: 100%;
  }
  .card-btn {
    background-color: #f44336;
  }
  .card-btn:hover {
    background-color: #D81E0F;
  }
  .card-btn:active,
  .card-btn:focus {
    background-color: #D81E0F !important;
    border-color: white !important;
    box-shadow: none !important;
  }
  .location-link {
    margin-left: auto;
  }
  .location-link img {
    width: 0.7rem;
  }
  .card-footer {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
  .card-footer-content {
    display: flex;
    align-items: center;
  }
  .dealership-page {
    margin-right: auto;
  }
  @media (max-width: 480px) {
    /* Bootstrap */
    .card {
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
      max-width: 14rem;
    }
    /* Custom */
    .card-name {
      font-size: 1rem;
    }
    .card-price {
      font-size: 0.8rem;
    }
    .quick-spec-values {
      font-size: 0.8rem;
      height: 2.7rem;
    }
  }
  @media (max-width: 414px) {
    .quick-spec-titles {
      font-size: 3vw;
    }
  }
  @media (max-width: 400px) {
  }
</style>
