<template>
  <div class="gallery">
    <div class="gallery-thumbnail">
      <b-img v-for="(image, index) in images"
        thumbnail fluid
        :src="image.thumb"
        :key="image.thumb"
        @click="openGallery(index)"
        class="my-thumbnail"></b-img>
    </div>
    <light-box
      :images="images"
      ref="lightbox"
      :show-caption="false"
      :show-light-box="false"></light-box>
  </div>
</template>

<script>
import LightBox from 'vue-image-lightbox'

export default {
  name: 'Gallery',
  components: {
    'light-box': LightBox
  },
  props: {
    images: Array
  },
  data () {
    return {
    }
  },

  methods: {
    openGallery (index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .gallery {
    .gallery-thumbnail {
      @include vehicle-gallery;
    }
    img {
      width: 15rem;
      margin: .5rem;
    }
  }
}
</style>
