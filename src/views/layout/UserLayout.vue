<template>
  <div class="layout">
    <MainHeader />
    <CommonHeader />
    <div class="container">
      <router-view></router-view>
    </div>
    <MainBottom />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainBottom from './components/MainBottom.vue'
import CommonHeader from './components/CommonHeader.vue'
export default {
  name: 'CommonLayout',
  components: {
    MainHeader, MainBottom, CommonHeader
  }
}
</script>

<style scoped lang="stylus">
.layout
  height 100%
  .container
    min-height 700px
</style>
