<template>
  <div class="swiper">
    <div class="swiper-container"
         :style="{ left: -width+'px', width: width*6+'px' }"
         ref="container">
      <img src="../assets/img/4.png">
      <img src="../assets/img/1.png">
      <img src="../assets/img/2.png">
      <img src="../assets/img/3.png">
      <img src="../assets/img/4.png">
      <img src="../assets/img/1.png">
    </div>
    <div class="btn-container">
      <ul class="clearfix">
        <li v-for="(item,index) in length"
            :key="index"
            :class="[current === item ? 'focus': '']"
            @click="handleChange(0,item)"></li>
      </ul>
    </div>
    <div class="arrow arrow-left"
         @click="handleChange(-1)">
      <span>&lt;</span>
    </div>
    <div class="arrow arrow-right"
         @click="handleChange(1)">
      <span>&gt;</span>
    </div>
  </div>
</template>

<script>
import moveUtil from '@/utils/move'
export default {
  name: 'swiper',
  data () {
    return {
      imgList: [
        { url: '../assets/img/1.png', active: false },
        { url: '../assets/img/2.png', active: false },
        { url: '../assets/img/3.png', active: false },
        { url: '../assets/img/4.png', active: false }
      ],
      params: {},
      current: 1,
      length: 0,
      width: 1920,
      timer: null // 定时器
    }
  },
  methods: {
    /**
     * 切换轮播图(点击时取消自动轮播)
     * @param {Number} type 轮播图变换类型 1:向右 -1:向左 0:点击改变
     * @param {Number} index 当type为0时传入 切换哪张图片
     */
    handleChange (type, index) {
      clearInterval(this.timer)
      if (type === 1) {
        this.current++
        this.moveImg()
      } else if (type === -1) {
        this.current--
        this.moveImg()
      } else {
        this.current = index
        this.moveImg()
      }
    },
    moveImg () {
      this.params.target.left = -this.current * this.width
      moveUtil(this.params, () => {
        if (this.current === this.length + 1) {
          this.current = 1
          // TODO 去掉settimeout后出现无法修改left的问题
          setTimeout(() => { this.$refs.container.style.left = -this.width + 'px' }, 0)
        } else if (this.current === 0) {
          this.current = this.length
          // TODO 去掉settimeout后出现无法修改left的问题
          setTimeout(() => { this.$refs.container.style.left = -this.width * this.current + 'px' }, 0)
        }
      })
    },
    getStyle (element, attr) {
      return getComputedStyle(element, false)[attr]
        ? getComputedStyle(element, false)[attr]
        : element.currentStyle[attr]
    }
  },
  created () {
    const last = this.imgList[0]
    const first = this.imgList[this.imgList.length - 1]
    this.length = this.imgList.length
    this.imgList = [first, ...this.imgList, last]
  },
  mounted () {
    this.params = {
      el: this.$refs.container,
      target: { 'left': 0 },
      time: 300
    }
    this.timer = setInterval(() => {
      this.current++
      this.moveImg()
    }, 3000)
  },
  // 离开页面时清除定时器
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang="stylus">
.swiper
  position relative
  width 100%
  height 100%
  overflow hidden
  .swiper-container
    position absolute
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
        width 12px
        height 12px
        margin 0 6px
        float left
        background rgba(0, 0, 0, 0.1)
        border-radius 100%
        cursor pointer
      .focus
        background rgba(0, 0, 0, 0.5)
  /* 控制左右的箭头 */
  .arrow
    position absolute
    top 50%
    transform translateY(-50%)
    z-index 2
    color $c-black
    font-size t = 24px
    width t * 1.5
    text-align center
    background rgba(0, 0, 0, 0.1)
    border-radius 100%
    cursor pointer
  .arrow-left
    left 100px
  .arrow-right
    right 100px
</style>
