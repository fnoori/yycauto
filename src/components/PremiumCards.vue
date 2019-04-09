<template>
  <b-card
    :title="year + ' ' + make + ' ' + model + ' ' + trim"
    :sub-title="'$ ' + price"
    title-tag="h6"
    :img-src="require('@/assets/no-photo.png')"
    img-alt="Image"
    class="premium-card"
    img-top>
    <b-card-text class="row text-right">
      <div class="col">
        <div class="d-block quick-info">
          <img src="@/assets/icons/kilometres.png" class="quick-icons" alt="">
          10,000
        </div>
        <div class="d-block quick-info">
          <img src="@/assets/icons/transmission.png" class="quick-icons" alt="">
          Automatic
        </div>
        <div class="d-block quick-info">
          <img src="@/assets/icons/gaspump.png" class="quick-icons" alt="">
          Gasoline
        </div>
      </div>
    </b-card-text>
    <div slot="footer">
      <small class="text-muted">
        <a href="#">{{ dealershipName }}</a>
      </small>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'PremiumCard',
  data () {
    return {
      make: 'Honda',
      model: 'Civic',
      trim: 'SE',
      year: '2018',
      price: '23,000',

      dealershipName: 'Generic Dealership'
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .premium-card {
    width: 18.5rem;
    display: inline-block !important;
    margin: auto .5rem;

    img {
      width: 100%;
    }
    .card-body {
      height: 10rem;

      .quick-info {
        letter-spacing: 1px;
      }
      .quick-icons {
        width: 1rem;
        padding-bottom: .3rem;
      }
    }
    .card-footer a {
      text-decoration: none;
      color: #6c757d !important;
    }
  }
}
</style>
