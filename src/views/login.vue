<template>
  <div class="login">
    <div class="header kebk-container">
      <div class="header-left pull-left">
        <router-link to="/"
                     class="header-logo">KEBK</router-link>
        <span>欢迎登录</span>
      </div>
      <div class="header-right">
        <router-link to="login">登录页面调查问卷</router-link>
      </div>
    </div>

    <div class="content">
      <div class="kebk-container">
        <Login class="login-container" />
      </div>
    </div>

    <!-- <Login/> -->
    <main-bottom></main-bottom>
  </div>
</template>

<script>
import Login from '@/components/login.vue'
import MainBottom from '@/components/common/mainBottom.vue'

export default {
  name: 'login',
  components: {
    Login,
    MainBottom
  }
}
</script>

<style scoped lang="stylus">
.header
  height 120px
  position relative
  .header-left
    line-height 120px
    .header-logo
      display inline
      margin-right 18px
      font-size 36px
      color #000
      cursor pointer
    span
      font-size 24px
  .header-right
    position absolute
    right 0
    bottom 20px
    a
      color #999
      text-decoration none
      &:hover
        color $c-hover
        text-decoration underline
.content
  height 475px
  background #bd0200
  .kebk-container
    height 100%
    background url('//img10.360buyimg.com/da/jfs/t1/17377/2/6371/97524/5c4eee7dE1daad199/31ce01f6ba0123e1.png') 0px 0px no-repeat // img10.360buyimg.com/da/jfs/t1/17377/2/6371/97524/5c4eee7dE1daad199/31ce01f6ba0123e1.png) 0px 0px no-repeat;background-color: #bd0200
    background-color #bd0200
    .login-container
      float right
      width 400px
      height 395px
      margin 25px
      background white
</style>
