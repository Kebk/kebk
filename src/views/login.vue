<template>
  <div>
    <login-page></login-page>
    <main-bottom></main-bottom>
  </div>
</template>

<script>
  import LoginPage from '@/components/loginPage.vue'
  import MainBottom from '@/components/mainBottom.vue'

  export default {
    name: "login",
    components: {
      LoginPage,
      MainBottom
    }
  }
</script>

<style scoped>

</style>
