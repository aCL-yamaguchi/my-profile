<template>
 <div>
    <h1>PHOTO hoge</h1>
    <div id="next-button"><button v-on:click="imageCntUp()">NEXT</button></div>
    <img :src="imagePath">
 </div>
</template>

<script>
export default {
  data () {
    return {
      cnt: 0,
      images: ['hobby01', 'hobby02', 'hobby03', 'hobby04'],
      image_src: require('./../assets/hobby01.jpg')
    }
  },
  computed: {
    imagePath () {
      return '/static/assets/' + this.images[this.cnt] + '.jpg'
    }
  },
  methods: {
    imageCntUp () {
      this.cnt++
      if (this.cnt >= this.images.length) this.cnt = 0
    }
  }
}
</script>

<style scoped>

</style>å
