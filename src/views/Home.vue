<template>
  <div class="home">
    <nav-header></nav-header>
    <div class="swiper">
      <Swiper/>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader.vue'
import Swiper from '@/components/swiper.vue'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted () {
  },
  components: {
    NavHeader, Swiper
  }
}
</script>

<style scoped lang="stylus">
.swiper
  height 500px
  background rgba(0, 0, 0, 0.3)
</style>
