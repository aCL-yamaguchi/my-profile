<template>
  <div id="app">
    <div id="header">
      <dropdown-menu></dropdown-menu>
    <!-- #header --></div>
    <div id="content">
      <router-view/>
    <!-- #content --></div>
    <div id="footer">
    <!-- #footer --></div>
  </div>
</template>

<script>
// import
import Vue from 'vue'
import DropdownMenu from './components/DropdownMenu'

export default {
  name: 'App'
}

// resist components
Vue.component('dropdown-menu', DropdownMenu)
</script>

<style>
</style>
