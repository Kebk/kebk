<template>
  <div class="home">
    <common-header></common-header>
    <swiper class="home-swiper"
            :options="swiperOption"
            ref="mySwiper">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
      <div class="swiper-button-prev"
           slot="button-prev"></div>
      <div class="swiper-button-next"
           slot="button-next"></div>
      <!-- <div class="swiper-scrollbar"
           slot="scrollbar"></div> -->
    </swiper>
    <span>首页</span>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import CommonHeader from 'components/commonHeader.vue'

export default {
  name: 'home',
  data () {
    return {
      // swiper配置 https://www.swiper.com.cn/api/index.html
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }, // 可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    this.swiper.slideTo(0, 1000, false)
  },
  components: {
    CommonHeader, swiper, swiperSlide
  }
}
</script>

<style scoped lang="stylus">
.home-swiper
  height 400px
  background rgba(0, 0, 0, 0.3)
</style>
