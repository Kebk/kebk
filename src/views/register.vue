<template>
  <div class="register">
    <div class="header kebk-container">
      <div class="header-left pull-left">
        <router-link to="/"
                     class="header-logo">KEBK</router-link>
        <span>欢迎注册</span>
      </div>
      <div class="header-right">
        <span>已有账号？</span>
        <router-link to="login">请登录</router-link>
      </div>
    </div>
    <div class="content kebk-container">
      <div class="content-header">用户注册</div>
      <div class="content-form">
        <div class="content-line">
          <label class="content-label"
                 for="phone">手机号</label>
          <input class="content-input"
                 id="phone"
                 type="text"
                 placeholder="请输入您的手机号码"
                 autocomplete="off">
        </div>
        <div class="content-line">
          <label class="content-label"
                 for="username">用户名</label>
          <input class="content-input"
                 id="username"
                 type="text"
                 placeholder="请输入您的用户名"
                 autocomplete="off">
        </div>
        <div class="content-line">
          <label class="content-label"
                 for="password">密码</label>
          <input class="content-input"
                 id="password"
                 type="password"
                 placeholder="密码">
        </div>
        <div class="content-line">
          <label class="content-label"
                 for="repassword">确认密码</label>
          <input class="content-input"
                 id="repassword"
                 type="password"
                 placeholder="密码">
        </div>
      </div>
      <div class="button-container">
        <button class="register-button">注册</button>
      </div>
    </div>
    <main-bottom></main-bottom>
  </div>
</template>

<script>
import MainBottom from '@/components/common/mainBottom.vue'

export default {
  name: 'register',
  components: {
    MainBottom
  }
}
</script>

<style scoped lang="stylus">
.header
  position relative
  height 120px
  box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.1)
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
    font-size 18px
    color #999
    a
      color $c-hover
      &:hover
        text-decoration underline
.content
  min-height 700px
  padding 80px 0
  box-sizing border-box
  .content-header
    font-size 24px
    text-align center
    color #bd0200
  .content-form
    width 400px
    margin 40px auto
    .content-line
      line-height 50px
      margin-bottom 30px
      font-size 14px
      border 1px solid #D3D3D3
      box-sizing border-box
      label
        display inline-block
        width 100px
        padding 0 10px
        border-right 1px solid #D3D3D3
        box-sizing border-box
      input
        width 297px
        height 48px
        padding 0 10px
        box-sizing border-box
        border none
  .button-container
    .register-button
      display block
      height 50px
      width 120px
      margin 0 auto
      font-size 24px
      background #bd0200
      color white
      border none
      outline none
      cursor pointer
</style>
