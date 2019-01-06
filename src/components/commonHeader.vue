<template>
  <div class="common-header">
    <div class="container">
      <div class="logo">
        <span>KEBK</span>
      </div>
      <ul class="nav">
        <li v-for="(item,index) in list"
            :key=index
            :class="[navActive===item.name? 'nav-acitve': '', 'nav-item']">
          <router-link :to=item.path>{{item.title}}</router-link>
        </li>
      </ul>
      <ul class="nav info">
        <li class="info-item">
          <img class="info-avator"
               src="../assets/img/default-avator.jpg"
               alt=""
               @mouseover="showInfo"
               @mouseout="hideInfo">
          <transition name="fade">
            <div class="info-menu">
              <p class="info-name">Conrad</p>
              <ul class="info-link">
                <li>买家中心</li>
                <li>卖家中心</li>
                <li>个人中心</li>
                <li>订单中心</li>
              </ul>
            </div>
          </transition>
        </li>
        <li class="info-item">
          <span>建议</span>
        </li>
        <li class="info-item">
          <span>联系客服</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  data () {
    return {
      list: [
        { name: 'home', title: '首页', path: '/' },
        { name: 'product', title: '产品', path: '/product' },
        { name: 'shop', title: '商城', path: '/shop' },
        { name: 'mime', title: '个人中心', path: '/mime' }
      ],
      navActive: '', // 判断顶部导航栏选中状态\
      isShowInfo: false
    }
  },
  methods: {
    showInfo () {
      this.isShowInfo = true
    },
    hideInfo () {
      this.isShowInfo = false
    }
  },
  created () {
    this.navActive = this.$route.meta.nav
  }
}
</script>

<style scoped lang="stylus">
.common-header
  margin-bottom 10px
  height 80px
  box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.1)
  .container
    width 1140px
    height 80px
    margin 0 auto
    .logo
      float left
      width 150px
      height 100%
      span
        font-size 28px
        line-height 80px
      .logo-img
        display inline-block
        width 50px
        height 50px
    .nav
      float left
      .nav-item
        float left
        transition all 0.3s
        &:hover
          background rgba(0, 0, 0, 0.03)
        a
          display block
          height 80px
          line-height 80px
          padding 0 22px
          color #000
      .nav-acitve
        background rgba(0, 0, 0, 0.02)
    .info
      float right
      .info-item
        position relative
        float left
        padding 0 22px
        line-height 80px
        span
          line-height 80px
          cursor pointer
        .info-avator
          width 50px
          height 50px
          border-radius 100%
          vertical-align middle
          cursor pointer
        .info-menu
          position absolute
          width 260px
          top 80px
          left 50%
          margin-left -130px
          background #fff
          z-index 2
          .info-name
            font-size 20px
            text-align center
            line-height normal
          .info-link
            line-height normal
            li
              float left
              width 100px
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
