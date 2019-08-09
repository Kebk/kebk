<template>
  <swiper :options="swiperOption"
          ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img src="http://gdp.alicdn.com/imgextra/i2/2830439853/O1CN01ikeX6k2MeivwAAKRS_!!2830439853.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="http://gdp.alicdn.com/imgextra/i2/2830439853/O1CN01w0hwNr2MeivrmeW68_!!2830439853.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="http://gdp.alicdn.com/imgextra/i1/2830439853/O1CN01vcWB9r2MeivzRonc1_!!2830439853.jpg" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"
         slot="pagination"></div>
    <div class="swiper-button-prev"
         slot="button-prev"></div>
    <div class="swiper-button-next"
         slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Swiper',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  props: {
    imgList: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      default: 1920,
      required: true
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="stylus">
.swiper
  position relative
  width 100%
  height 100%
  overflow hidden
</style>
