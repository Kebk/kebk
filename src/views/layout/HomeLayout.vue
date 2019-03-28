<template>
  <div class="layout">
    <MainHeader />
    <NavHeader />
    <div class="container">
      <router-view></router-view>
    </div>
    <MainBottom />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainBottom from './components/MainBottom.vue'
import NavHeader from './components/NavHeader.vue'
export default {
  name: 'HomeLayout',
  components: {
    MainHeader, MainBottom, NavHeader
  }
}
</script>

<style scoped lang="stylus">
.layout
  height 100%
  .container
    min-height 700px
</style>
