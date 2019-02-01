<template>
  <div class="home">
    <main-header></main-header>
    <nav-header></nav-header>
    <div class="swiper clearfix">
      <Swiper :width="width"
              :imgList="imgList" />
    </div>
    <div class="product">
      <div class="tag">
        <p>产品系列</p>
        <p>Product</p>
      </div>
      <div class="conatainer">
        <div class="">笔记本</div>
        <div class="">笔记本</div>
      </div>
    </div>
    <main-bottom></main-bottom>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader.vue'
import MainHeader from '@/components/mainHeader.vue'
import MainBottom from '@/components/mainBottom.vue'
import Swiper from '@/components/swiper.vue'
export default {
  name: 'home',
  data () {
    return {
      width: 1920,
      imgList: [
        { url: 'http://conrad-img.oss-cn-hangzhou.aliyuncs.com/kebk/home/%E6%B8%90%E5%8F%98%E8%83%8C%E6%99%AF1.png?Expires=1549021150&OSSAccessKeyId=TMP.AQGRnP75pszFX4v_bI5q8rizYm4RVAOf4duy0anKiY728cihm9R7s050vdqKADAtAhRAVSRmy_s5wPdUbFlcniiXvqMYDgIVAIzMEKlO7GUJRYH7nR5Ldgn0ohxL&Signature=jUSE4OSOn9pwfdBsdYZp8H6sxfY%3D', des: '1' },
        { url: 'http://conrad-img.oss-cn-hangzhou.aliyuncs.com/kebk/home/%E6%B8%90%E5%8F%98%E8%83%8C%E6%99%AF2.png?Expires=1549021173&OSSAccessKeyId=TMP.AQGRnP75pszFX4v_bI5q8rizYm4RVAOf4duy0anKiY728cihm9R7s050vdqKADAtAhRAVSRmy_s5wPdUbFlcniiXvqMYDgIVAIzMEKlO7GUJRYH7nR5Ldgn0ohxL&Signature=3dl2x1uHSToAsZ%2BND4XV0hUwPVs%3D', des: '2' }
      ]
    }
  },
  components: {
    NavHeader, Swiper, MainHeader, MainBottom
  }
}
</script>

<style scoped lang="stylus">
.swiper
  height 500px
  background rgba(0, 0, 0, 0.3)
</style>
