<template>
  <div class="home">
    <common-header></common-header>
    <span>首页</span>
  </div>
</template>

<script>
import CommonHeader from 'components/commonHeader.vue'
export default {
  name: 'home',
  components: {
    CommonHeader
  }
}
</script>

<style scoped lang="stylus">
div
  background #fff
</style>
