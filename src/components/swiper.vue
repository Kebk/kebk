<template>
  <div class="swiper">
    <div class="swiper-container">
      <!-- 1.蓝 2.绿 3.灰 -->
      <img src="../assets/img/3.png">
      <img src="../assets/img/1.png">
      <img src="../assets/img/2.png">
      <img src="../assets/img/3.png">
      <img src="../assets/img/1.png">
    </div>
    <div class="btn-container">
      <ul class="clearfix">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
    <div class="arrow arrow-left">左</div>
    <div class="arrow arrow-right">右</div>
  </div>
</template>

<script>
import moveUtil from '@/utils/move'
export default {
  name: 'swiper',
  data () {
    return {
      imgList: []
    }
  },
  methods: {
    handleClick () {
      // let swiperEl = document.getElementById('test')
      // let params = { el: swiperEl, target: { 'left': 100, 'width': 400, 'opacity': 100 }, prop: 'easeBoth' }
      // moveUtil(params)
    }
  },
  created () {
    console.log(this.imgList)
  },
  mounted () {
    // let testEl = document.getElementById('test')
    // moveUtil(testEl, '200')
  }
}
</script>

<style scoped lang="stylus">
.swiper
  position relative
  width w = 100%
  height 100%
  .swiper-container
    position absolute
    width 5 * w
    z-index 1
  /* 下方按钮 */
  .btn-container
    position absolute
    left 50%
    transform translateX(-50%)
    bottom 20px
    z-index 2
    ul
      li
        float left
  /* 控制左右的箭头 */
  .arrow
    position absolute
    top 50%
    transform translateY(-50%)
    z-index 2
  .arrow-left
    left 0
  .arrow-right
    right 0
</style>
