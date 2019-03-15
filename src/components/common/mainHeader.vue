<template>
  <div class="main-header">
    <div class="kebk-container">
      <!-- left -->
      <div class="header-left pull-left"
           v-if="user">
        <p class="header-username">{{user.username}}</p>
        <a href="javascript:;"
           @click="handleLogout">退出登录</a>
        <!-- <div class="header-userinfo">
          <div class="pull-right">
            <router-link to="mime">个人中心</router-link>
            <a href="javascript:;" @click="handleLogout">退出登录</a>
          </div>
          <div></div>
        </div> -->
      </div>
      <ul class="header-left pull-left clearfix"
          v-else>
        <li>
          <router-link to="/login">您好，请登录</router-link>
        </li>
        <li class="header-register">
          <router-link to="/register">免费注册</router-link>
        </li>
      </ul>
      <!-- right -->
      <ul class="header-right pull-right clearfix">
        <li class="header-list"
            v-for="(item, index) of headerList"
            :key="index">
            <i v-if="item.icon" class="iconfont">&#xe635;</i>
          <router-link :to="item.path">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainHeader',
  data () {
    return {
      headerList: [{
        icon: '&#xe635;',
        path: '/',
        text: '首页'
      }, {
        path: '/user/center',
        text: '买家中心'
      }, {
        path: '/agent/start',
        text: '代理中心'
      }, {
        path: '3',
        text: '商品分类'
      }, {
        path: '4',
        text: '联系客服'
      }],
      user: this.$store.state.user
    }
  },
  methods: {
    handleLogout () {
      this.$store.commit('LOGOUT')
      this.user = this.$store.state.user
    }
  }
}
</script>

<style scoped lang="stylus">
.main-header
  height 30px
  background $c-light
  .kebk-container
    height 30px
    .header-left, .header-right
      line-height 30px
      li
        float left
        padding 0 9px
        line-height 30px
        a
          color #999
          &:hover
            color $c-hover
            text-decoration underline
      .header-register a
        color $c-hover
      .header-list &:first-child a
          border-left none
    .header-left .header-username
        padding 0 5px
</style>
