<template>
  <div id="app">
    <div id="header">
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
    <!-- #header --></div>
    <div id="content">
      <router-view/>
    <!-- #content --></div>
    <div id="footer">
    <!-- #footer --></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
