<template>
  <div class="gallery">
    <b-carousel
      :interval="0"
      slide
      indicators>
        <b-carousel-slide
          v-for="(image, index) in images"
          :img-src="image"/>
    </b-carousel>
  </div>
</template>

<script>

export default {
  name: 'Gallery',
  props: {
    images: Array
  },
  data () {
    return {
      mainProps: {
        blank: true,
        blankColor: '#bbb'
      }
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .gallery {
    padding: .5rem;

    .viewed {
      margin: 0 auto;
      overflow-x: auto;
      white-space: nowrap;
      scroll-snap-type: x mandatory;

      img {
        width: 95%;
        margin: .5rem;
        scroll-snap-align: center;
      }

    }
  }
}

@media (min-width: 576px) {
  .gallery {
    .viewed {
      img {
        width: 100%;
      }
    }
  }
}
</style>
