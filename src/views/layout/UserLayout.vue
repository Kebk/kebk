<template>
  <div class="layout">
    <MainHeader/>
    <CommonHeader/>
    <div class="kebk-container container clearfix">
      <div class="content-left">
        <div v-for="(items,index) in navList"
             :key="index">
          <div class="title">{{items.name}}</div>
          <ul class="list">
            <li v-for="item of items.children"
                :key="item.path"
                :class="[item.path===activeNav?'active-nav':'', 'nav-list']">
              <a href="javascript:;"
                 @click="handleClick(item.path)">{{item.text}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-right">
        <router-view></router-view>
      </div>
    </div>
    <MainBottom/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainBottom from './components/MainBottom.vue'
import CommonHeader from './components/CommonHeader.vue'

export default {
  name: 'UserLayout',
  data () {
    return {
      activeNav: '',
      navList: [
        {
          name: '账号管理',
          children: [
            { path: '/user/index', text: '个人中心' },
            { path: '/user/address', text: '地址管理' }
          ]
        },
        {
          name: '交易管理',
          children: [
            { path: '/user/order', text: '订单管理' }
          ]
        }
      ]
    }
  },
  methods: {
    handleClick (path) {
      this.activeNav = path
      this.$router.push({ path })
    }
  },
  created () {
    this.activeNav = this.$route.path
  },
  components: {
    MainHeader, MainBottom, CommonHeader
  }
}
</script>

<style scoped lang="stylus">
.layout
  height 100%
  .container
    padding 50px 0 100px
    .content-left
      float left
      width 178px
      border 1px solid #eaeaea
      padding 24px 0
      .title
        padding-left 40px
        color #333
        font-size 16px
        font-weight bold
        margin 10px 0 4px 0
      .list
        .active-nav a
          border-color $blue
          color $blue
        li
          padding-top 10px
          font-size 14px
          a
            border-left 3px solid #fff
            display inline-block
            width 100%
            padding-left 40px
            color black
            box-sizing border-box
            &:hover
              color $blue
    .content-right
      float left
      margin-left 30px
</style>
