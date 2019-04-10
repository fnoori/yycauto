<template>
  <div class="gallery">
    <b-img v-for="image in images" thumbnail fluid :src="image" :key="image"></b-img>
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

    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
  img {
    width: 10rem;
    margin: .5rem;
  }
}
</style>
