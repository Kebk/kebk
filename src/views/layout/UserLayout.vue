<template>
  <div class="layout">
    <MainHeader/>
    <CommonHeader/>
    <div class="container">
      <div class="kebk-container clearfix">
        <div class="content-left">
          <div v-for="(items,index) in navList"
               :key="index">
            <div class="left-title">{{items.name}}</div>
            <ul class="left-list">
              <li v-for="item of items.children"
                  :key="item.path"
                  :class="[item.path===activeNav?'active-nav':'', nav-list]">
                <router-link :to="item.path">{{item.text}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="content-right">
          <router-view></router-view>
        </div>
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
            {
              path: '/user/index',
              text: '个人中心'
            }, {
              path: '/user/information',
              text: '账号信息'
            }, {
              path: '/user/address',
              text: '地址管理'
            }
          ]
        }, {
          name: '交易管理',
          children: [
            {
              path: '/user/order',
              text: '订单管理'
            }
          ]
        }
      ]
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
    // min-height 700px
    .kebk-container
      width 1140px
      margin 20px auto 0
      .content-left
        float left
        width 178px
        border 1px solid #eaeaea
        padding 24px 0
        .left-title
          padding-left 40px
          color #333
          font-size 16px
          font-weight bold
          margin 10px 0 4px 0
        .left-list
          line-height 20px
          .active-nav
            border-left 3px solid #000
          li
            font-size 14px
            line-height 30px
            padding-left 40px
            a
              color black
              &:hover
                color $blue
      .content-right
        float left
        margin-left 30px
</style>
