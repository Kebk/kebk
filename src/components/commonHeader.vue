<template>
  <div class="common-header">
    <div class="container">
      <div class="logo">
        <span>KEBK</span>
      </div>
      <ul class="nav">
        <li v-for="(item,index) in list"
            :key=index>
          <router-link class="nav-item"
                       :to=item.path>{{item.name}}</router-link>
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
        { name: '首页', path: '/' },
        { name: '产品', path: '/product' },
        { name: '商城', path: '/shop' },
        { name: '个人中心', path: '/mime' }
      ]
    }
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
      li
        float left
        .nav-item
          display block
          height 80px
          line-height 80px
          padding 0 22px
          color #000
</style>
