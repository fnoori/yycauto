<template lang="html">
  <div class="tier-two">
    <div class="tier-two-card">
      <img src="http://www.lmht.com/wp-content/uploads/2016/01/no-image.jpg">
      <div class="tier-two-card-body">
          <div class="tier-two-card-title">
              <div class="tier-two-card-name">Honda Civic</div>
              <div class="tier-two-card-price">25,000</div>
          </div>
          <div class="tier-two-card-text">
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
                      Manual
                      <img class="quick-specs-icon" src="@/assets/quick-spec-transmission.png">
                  </div>
              </div>
          </div>
      </div>
      <footer class="card-footer">
        <div class="tier-two-card-footer-content">
          <a href="#" class="dealership-page">
            <img src="@/assets/logos/sponsored_logo.png" alt="" class="card-logo">
          </a>
          <a href="#" class="location-link">
            Best Dealership
            <img src="@/assets/location.svg" alt="">
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TierTwo',
  props: {
  }
}
</script>

<style lang="css" scoped>
a,
a:focus,
a:active {
  text-decoration: none !important;
  color: black !important;
}

/* Bootstrap */
.btn {
  border: none;
  border-radius: 0;
}
.custom-select:focus {
  border: 1px solid #ced4da;
}

/* Custom */
.sort-options {
  width: 25%;
  margin-left: 28.6rem;
}
.tier-two {
  width: 38rem;
  margin: 1rem auto;
}
.tier-two-card {
  width: 100%;
  margin: 1rem 0;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
}
.tier-two-card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.tier-two-card img {
  width: 40%;
}
.tier-two-card-name {
  font-size: 1.2rem;
}
.tier-two-card-price {
  font-size: 0.9rem;
  color: grey;
}
.tier-two-card-body {
  width: 60%;
  float: right;
  padding: 0.1rem 0.4rem;
}
.tier-two-card-text {
  margin-top: 1rem;
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
  width: 0.7rem !important;
  margin-bottom: 0.15rem;
}
.new-vehicle-icon {
  width: 1.8rem !important;
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
  content: "";
  border-right: 1px solid rgba(0, 0, 0, 1);
  position: absolute;
  height: 20px;
  right: 0;
}
.gas-value:before {
  content: "";
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
  height: 2rem;
  font-size: 0.9rem;
}
.card-btn:hover {
  background-color: #d81e0f;
}
.card-btn:active,
.card-btn:focus {
  background-color: #d81e0f !important;
  border-color: white !important;
  box-shadow: none !important;
}
.card-footer {
  padding: .4rem .8rem;
  font-size: 0.8rem;
}
.tier-two-card-footer-content {
  height: 1.5rem;
  display: flex;
  align-items: center;
}
.card-logo {
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 2px;
  width: 3rem !important;
}
.location-link {
  margin-left: auto;
}
.location-link img {
  width: 0.7rem;
}
.dealership-page {
  margin-right: auto;
}

@media (max-width: 630px) {
  .btn {
    display: inline;
  }
  .tier-two {
    width: 30rem;
  }
  .tier-two-card {
    width: 100%;
  }
  .sort-options {
    margin-left: 22.6rem;
  }
  .tier-two-card-name {
    font-size: 1rem;
  }
  .tier-two-card-text {
    margin-top: 0.1rem !important;
  }
  .tier-two-card-price {
    font-size: 0.8rem;
  }
  .quick-spec-values {
    height: 2.5rem;
  }
  .new-vehicle-icon {
    width: 1.1rem !important;
  }
  .quick-spec-values div {
    font-size: 0.7rem;
  }
  .card-btn {
    font-size: 0.6rem;
    height: 1rem;
  }
}

@media (max-width: 500px) {
  .tier-two {
    width: 90vw;
  }
  .sort-options {
    margin-left: 68vw;
  }
}

@media (max-width: 418px) {
  .sort-options {
    margin-left: 66vw;
    width: 24vw;
  }
  .tier-two-card-name {
    font-size: 4vw;
  }
  .tier-two-card-price {
    font-size: 4vw;
    margin-top: -0.3rem;
  }
  .quick-spec-values {
    height: 8vw;
  }
  .new-vehicle-icon {
    width: 5vw !important;
  }
  .quick-spec-values div {
    font-size: 3vw;
  }
  .gas-value:before {
    content: "";
    border-right: 1px solid rgba(0, 0, 0, 1);
    position: absolute;
    height: 5vw;
    left: 0;
  }
  .gas-value:after {
    content: "";
    border-right: 1px solid rgba(0, 0, 0, 1);
    position: absolute;
    height: 5vw;
    left: 0;
  }
}
@media (max-width: 320px) {
  .tier-two-card-text {
    margin-top: 0.1rem;
  }
}
</style>
