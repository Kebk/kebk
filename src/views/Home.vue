<template>
  <div class="home">
    <MainHeader />
    <NavHeader />
    <div class="swiper clearfix">
      <Swiper :width="width"
              :imgList="imgList" />
    </div>
    <div class="classify">
      <div class="kebk-container">
        <div class="classify-tag">
          <p>产品系列</p>
          <p>Product</p>
        </div>
        <div class="classify-container clearfix">
          <div class="classify-box">笔记本</div>
          <div class="classify-box">一体机</div>
          <div class="classify-box">台式机</div>
          <div class="classify-box">电脑配件</div>
        </div>
      </div>
    </div>
    <div class="classify classify-bg">
      <div class="kebk-container">
        <div class="classify-tag">
          <p>品牌代理</p>
          <p>Brand</p>
        </div>
        <div class="classify-container clearfix">
          <div class="classify-box">自营产品</div>
          <div class="classify-box">戴尔</div>
          <div class="classify-box">华硕</div>
          <div class="classify-box">联想</div>
          <div class="classify-box">外星人</div>
        </div>
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
        { url: 'https://img.alicdn.com/tfs/TB1YwuvEZbpK1RjSZFyXXX_qFXa-520-280.jpg_q90_.webp', des: '1' },
        { url: 'https://img.alicdn.com/simba/img/TB14dt2knnI8KJjy0FfSuwdoVXa.jpg', des: '2' },
        { url: 'https://img.alicdn.com/simba/img/TB1sJy.gCcqBKNjSZFgSut_kXXa.jpg', des: '3' },
        { url: 'https://img.alicdn.com/simba/img/TB19YZvDjTpK1RjSZKPSuu3UpXa.jpg', des: '4' }
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
.classify
  margin-top 20px
  padding 20px 0
  background $c-white
  .classify-tag
    margin-bottom 40px
    font-size 24px
    text-align center
  .classify-container
    margin 0 auto
    text-align center
    .classify-box
      margin 0 0 10px 10px
      float left
      width 30%
      height 200px
      border 1px solid $c-black
      cursor pointer
.classify-bg
  background $c-light
</style>
