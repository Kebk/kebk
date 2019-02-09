<template>
  <div class="nav-header">
    <div class="kebk-container">
      <div class="logo">
        <span>KEBK</span>
      </div>
      <ul class="nav">
        <li v-for="(item, index) in list"
            :key="index"
            :class="[navActive===item.name ? 'nav-acitve': '', 'nav-item']">
          <router-link :to=item.path>{{item.title}}</router-link>
        </li>
      </ul>
      <div class="search">
        <input class="search-input" type="text" placeholder="搜索商品">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      list: [
        { name: 'home', title: '首页', path: '/' },
        { name: 'product', title: '主营产品', path: '/product' },
        { name: 'rank', title: '排行榜', path: '/rank' }
      ],
      navActive: '' // 判断顶部导航栏选中状态
    }
  },
  created () {
    this.navActive = this.$route.meta.nav
  }
}
</script>

<style scoped lang="stylus">
.nav-header
  margin-bottom 10px
  height 80px
  box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.1)
  .kebk-container
    width 1140px
    height 80px
    margin 0 auto
    .logo
      float left
      width 150px
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
          line-height 80px
          padding 0 22px
          color #000
      .nav-acitve
        background rgba(0, 0, 0, 0.02)
    .search
      float right
      line-height 80px
      .search-input
        padding 0 10px
        height 24px

</style>
