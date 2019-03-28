<template>
  <div class="main-header">
    <div class="kebk-container">
      <!-- <div>{{user}}</div> -->
      <div class="left pull-left clearfix"
           v-if="user">
        <p class="header-username">{{user.username}}</p>
        <a href="javascript:;"
           @click="handleLogout">退出登录</a>
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
      headerList: [{
        path: '/',
        title: '首页'
      }, {
        path: '/user/center',
        title: '买家中心'
      }, {
        path: '/agent/start',
        title: '代理中心'
      }, {
        path: '/product/list',
        title: '商品分类'
      }]
    }
  },
  methods: {
    handleLogout () {
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
</style>
