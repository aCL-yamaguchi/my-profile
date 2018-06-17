<template>
 <div>
    <h1>PHOTO</h1>
    <div id="next-button"><button v-on:click="nextPhoto()">NEXT</button></div>
    <img :src="image_src">
    <!--
    <img src="../assets/hobby01.jpg" alt="hobby01">
    <img src="../assets/hobby02.jpg" alt="hobby02">
    <img src="../assets/hobby03.jpg" alt="hobby03">
    <img src="../assets/hobby04.jpg" alt="hobby04">-->
 </div>
</template>

<script>
export default {
  data () {
    return {
      image_src: require('./../assets/hobby01.jpg')
    }
  },
  methods: {
    // 表示画像切り替え
    nextPhoto: function (event) {
      // todo配列を動的に生成
      const photoNameArray = ['hobby01', 'hobby02', 'hobby03', 'hobby04']
      const MAX_INDEX = 3

      photoNameArray.forEach(function (element) {
        let index = photoNameArray.indexOf(element)
        if (index >= 0) {
          let nextIndex = index + 1
          // 次インデックスが要素数より大きい場合は、一番先頭の画像を表示する
          if (MAX_INDEX < nextIndex) {
            nextIndex = 0
          }
          this.image_src = '../assets/' + photoNameArray[nextIndex] + '.jpg'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>å
