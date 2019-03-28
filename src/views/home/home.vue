<template>
  <div class="home">
    <div class="swiper clearfix">
      <Swiper class="swiper-container"
              :width="width"
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
          <div class="classify-box">外设</div>
          <div class="classify-box">配件</div>
          <div class="classify-box">更多..</div>
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
  </div>
</template>

<script>
import Swiper from './components/Swiper.vue'
export default {
  name: 'home',
  data () {
    return {
      width: 1920,
      imgList: [
        { url: 'https://conrad-img.oss-cn-hangzhou.aliyuncs.com/kebk/home/%E6%B8%90%E5%8F%98%E8%83%8C%E6%99%AF1.png', des: '1' },
        { url: 'https://conrad-img.oss-cn-hangzhou.aliyuncs.com/kebk/home/%E6%B8%90%E5%8F%98%E8%83%8C%E6%99%AF2.png', des: '2' }
      ]
    }
  },
  created () {
    // this.$api.home.getSwiper().then((res) => {
    //   this.imgList = res.data
    // })
  },
  components: {
    Swiper
  }
}
</script>

<style scoped lang="stylus">
.swiper
  height 600px
  background rgba(0, 0, 0, 0.3)
  .swiper-container
    height 100%
.classify
  margin-top 20px
  padding 20px 0
  background #fff
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
      border 1px solid #000
      cursor pointer
.classify-bg
  background #ededed
</style>
