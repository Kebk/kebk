<template>
  <div class="nav-header">
    <div class="kebk-container">
      <div class="header">
        <span class="logo">
          <router-link to="/">KEBK</router-link>
        </span>
        <!-- <div class="search">
          <i class="iconfont search-icon">&#xe600;</i>
          <input class="search-input"
                 type="text"
                 placeholder="搜索商品">
          <button class="search-button"
                  @click="hanleSearch">搜索</button>
        </div> -->
      </div>
      <ul class="nav clearfix">
        <li v-for="(item, index) in list"
            :key="index"
            :class="[navActive===item.name ? 'nav-acitve': '', 'nav-item']">
          <span>
            <router-link :to="item.path">{{item.title}}</router-link>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  data () {
    return {
      list: [
        { name: 'home', title: '首页', path: '/' },
        { name: 'product', title: '主营产品', path: '/product' }
      ]
    }
  },
  methods: {
    hanleSearch () { }
  },
  computed: {
    navActive () {
      return this.$route.matched[0].meta.navActive
    }
  }
}
</script>

<style scoped lang="stylus">
.nav-header
  box-shadow 0 0 3px 0 rgba(0, 0, 0, 0.2)
  .kebk-container
    margin 0 auto
    .header
      height 100px
      .logo
        line-height 100px
        font-size 36px
        a
          color #000
      .search
        position relative
        float right
        width 600px
        height 38px
        margin-top 32px
        .search-icon
          position absolute
          top 0
          left 0
          width 38px
          padding 3px
          line-height 32px
          color grey
          text-align center
          z-index 0
          box-sizing border-box
        .search-input
          position absolute
          left 0
          top 0
          width 440px
          padding 2px 0 2px 38px
          font-size 14px
          line-height 32px
          background inherit
          border 1px solid #409efe
          border-radius 38px 0 0 38px
          z-index 1
          box-sizing border-box
        .search-button
          position absolute
          left 440px
          width 90px
          font-size 16px
          line-height 38px
          color #fff
          text-align center
          border-radius 0 38px 38px 0
          background #409efe
          border none
          outline none
          cursor pointer
    .nav
      padding-top 9px
      li
        float left
        padding 6px 20px
        span
          padding-bottom 5px
          border-bottom 3px solid inherit
          a
            color #000
          &:hover
            border-bottom 3px solid #409efe
            a
              color #409efe
.nav-acitve span
  border-bottom 3px solid #409efe
  a
    color #409efe !important
</style>
