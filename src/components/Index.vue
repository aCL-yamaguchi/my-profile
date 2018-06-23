<template>
  <div>
    <div id="background">
      <img src="./../../static/assets/profile01.jpg" alt="profile01">
    <!-- #background --></div>
    <div id="base-profile">
      <p>Arata Yamaguchi</p>
      <p>age: {{ createAge() }}</p>
      <p>System Engineer</p>
    <!-- #base-profile --></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    createAge: function () {
      const year = 1994
      const month = 10
      const date = 15
      const birthDate = new Date(year, month - 1, date)

      const y2 = birthDate.getFullYear().toString().padStart(4, '0')
      const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0')
      const d2 = birthDate.getDate().toString().padStart(2, '0')

      const today = new Date()
      const y1 = today.getFullYear().toString().padStart(4, '0')
      const m1 = (today.getMonth() + 1).toString().padStart(2, '0')
      const d1 = today.getDate().toString().padStart(2, '0')

      var age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000)
      return age
    }
  }
}
</script>

<style scoped>
</style>
