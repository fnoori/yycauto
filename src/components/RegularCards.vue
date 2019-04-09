<template>
  <div class="regular-card">
    <h6>{{year}} {{make}} {{model}} {{trim}}</h6>
    <b-card
      :img-src="require('@/assets/no-photo.png')"
      img-alt="Image"
      img-left
      tag="article">
      <b-card-text>
        <div>
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
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'RegularCard',
  data () {
    return {
      make: 'Honda',
      model: 'Civic',
      trim: 'SE',
      year: '2018',
      price: '23,000'
    }
  }
}
</script>

<style lang="scss" scoped>
.card-body {
  flex: 1 0 auto;
  padding: 0;

  .card-text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}

.regular-card {
  width: 100%;
  margin: .8rem auto;
}
.card-img-left {
  height: 30vw !important;
}
.quick-icons {
  width: .9rem;
  padding-bottom: .3rem;
}
.dollar-icon {
  width: 0.8rem;
}
.quick-info {
  font-size: .8rem;
  letter-spacing: 1px;
}
</style>
