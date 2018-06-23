<template>
<div id="dropdown-menu" v-on:click="showMenu()">
  <ul>
    <router-link tag="li" to="/about">
      <a>ABOUT</a>
    </router-link>
    <router-link tag="li" to="/photo">
      <a>PHOTO</a>
    </router-link>
    <router-link tag="li" to="/contact">
      <a>CONTACT</a>
    </router-link>
  </ul>
<!-- #dropdown-menu --></div>
</template>

<script>
export default {
  data: function () {
    return {
      showMenu: false
    }
  },
  methods: {
    showMenu: function () {

    }
  }
}
</script>

<style scoped>

</style>
