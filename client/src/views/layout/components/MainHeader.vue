<template>
  <div class="main-header">
    <div class="kebk-container">
      <div class="left pull-left clearfix"
           v-if="user">
        <div class="header-username"
             @mouseover="showMenu=true"
             @mouseout="showMenu=false">
          <p>{{user.username}}
            <i class="iconfont">&#xe602;</i>
          </p>
          <div class="user-menu"
               v-show="showMenu">
            <li>
              <router-link to="/user/index">个人中心</router-link>
            </li>
            <li>
              <a href="javascript:;"
                 @click="handleLogout">退出登录</a>
            </li>
          </div>
        </div>
      </div>
      <ul class="left pull-left clearfix"
          v-else>
        <li>
          <router-link to="/login">您好，请登录</router-link>
        </li>
        <li>
          <router-link to="/register">免费注册</router-link>
        </li>
      </ul>
      <ul class="right pull-right clearfix">
        <li v-for="(item, index) of headerList"
            :key="index">
          <span>
            <router-link :to="item.path">{{item.title}}</router-link>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MainHeader',
  data () {
    return {
      headerList: [
        { path: '/', title: '首页' },
        { path: '/product/index', title: '商品列表' },
        { path: '/user', title: '个人中心' },
        { path: '/agent/applySup', title: '成为供应商' }
      ],
      showMenu: false
    }
  },
  methods: {
    handleLogout () {
      this.$router.push({ path: '/' })
      this.$store.commit('LOGOUT')
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped lang="stylus">
.main-header
  height 36px
  background #333
  .kebk-container
    height 36px
    .left li, .right li
      float left
      line-height 36px
    a
      color #ccc
      &:hover
        color #fff
    .left li
      padding 0 9px
    .right li span
      padding 0 9px
      border-left 1px solid #5c5c5c
    .right li:first-child span
      border none
    .header-username
      position relative
      color #ccc
      font-size 14px
      line-height 35px
      &:hover
        color #fff
      i
        font-size 12px
        margin-left 4px
      .user-menu
        position absolute
        left -6px
        width 74px
        background #fff
        box-shadow 0 0 3px 0 rgba(0, 0, 0, 0.2)
        li
          list-style none
          border-bottom 1px solid #ddd
          a:hover
            color #000
</style>
