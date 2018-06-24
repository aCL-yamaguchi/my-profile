<template>
  <div id="app">
    <div id="header">
      <dropdown-menu :label="label" :list-items="listItems"></dropdown-menu>
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
import DropdownMenu from './components/DropdownMenu'

export default {
  name: 'App',
  components: {
    DropdownMenu
  },
  data () {
    return {
      // dropdown-menu
      label: 'MENU',
      listItems: [
        {
          name: 'ABOUT',
          path: '/about'
        },
        {
          name: 'PHOTO',
          path: '/photo'
        },
        {
          name: 'CONTACT',
          path: '/contact'
        }
      ]
    }
  }
}
</script>

<style>
</style>
