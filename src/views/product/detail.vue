<template>
  <div class="details">
    <div class="kebk-container">
      <div class="img-details">
        <div class="big-img">
          <img class="big-details"
               :src="showImg" />
        </div>
        <div class="small-img">
          <div class="imgcontent"
               v-for="item of imgList"
               :key="item.imgId"
               @click="handleClick(item.imgUrl)">
            <img class="small-details"
                 :src="item.imgUrl">
          </div>
        </div>
      </div>
      <div class="text-details">
        <div class="desc-title">
          惠普（HP）暗影精灵4代 15.6英寸游戏笔记本电脑（i5-8300H 8G 128G+1TB GTX1050 2G独显 IPS FHD）
        </div>
        <div class="desc-content">
          【2019玩所未玩】微边框游戏本搭载8代处理器》【3.25上新】暗影4Pro&星14青春版开启预约
        </div>
        <div class="desc-price">
          秒 杀 价
          <span>￥5924.00</span>
        </div>
        <div class="buy-button">
          <button>加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {
      imgList: [
        {
          imgId: 1,
          imgUrl: 'https://img12.360buyimg.com/n5/s54x54_jfs/t1/9770/32/14370/146533/5c63e21bEe0f4a482/367295110beb181c.jpg'
        }, {
          imgId: 2,
          imgUrl: 'https://img12.360buyimg.com/n5/s54x54_jfs/t20662/105/444711465/102380/3affee1a/5b0e4c72Na3cf75c6.jpg'
        }, {
          imgId: 3,
          imgUrl: 'https://img12.360buyimg.com/n5/s54x54_jfs/t21190/75/653069459/168695/75338192/5b13c582Nfdc3cb5d.jpg'
        }, {
          imgId: 4,
          imgUrl: 'https://img12.360buyimg.com/n5/s54x54_jfs/t21538/262/479704832/28794/83c70845/5b0e4c73N5284ed67.jpg'
        }, {
          imgId: 5,
          imgUrl: 'https://img12.360buyimg.com/n5/s54x54_jfs/t21814/280/436074295/29387/d5d8d8ed/5b0e4c74N6639fb8d.jpg'
        }],
      showImg: ''
    }
  },
  methods: {
    handleChange (i) {
      this.showImg = i
    }
  },
  created () {
    this.showImg = this.imgList[0].imgUrl
  }
}
</script>

<style scoped lang="stylus">
.details
  .kebk-container
    width 1140px
    height 800px
    margin 0 auto
    .img-details
      float left
      width 450px
      padding 10px
      .big-img
        width 100%
        height 450px
        .big-details
          width 100%
      .small-img
        width 100%
        height 58px
        margin-top 10px
        .imgcontent
          float left
          width 70px
          height 58px
          padding-left 20px
          .small-details
            width 58px
            height 58px
    .text-details
      float right
      width 650px
      height 780px
      padding 10px
      .desc-title
        width 100%
        font 700 16px Arial, 'microsoft yahei'
        color #666
        line-height 28px
        margin-bottom 5px
      .desc-content
        width 100%
        height 18px
        margin-bottom 5px
        overflow hidden
        color #e4393c
      .desc-price
        width 100%
        height 40px
        padding-left 10px
        font-size 14px
        background #f3f3f3
        line-height 40px
        color #666
        span
          color #df3033
          padding-left 30px
          font-size 18px
      .buy-button
        margin-top 10px
        height 50px
        button
          background #df3033
          height 100%
          padding 0 30px
          margin-left 200px
          line-height 50px
          color white
          font-size 20px
</style>
