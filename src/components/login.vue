<template>
  <div class="login">
    <div class="header">
      <p>Kebk不会以任何理由要求您转账汇款，谨防诈骗</p>
    </div>
    <div class="content">
      <div class="content-header">
        欢迎登录
      </div>
      <div class="content-line">
        <input class="content-input"
               type="text"
               placeholder="用户名/已验证手机">
      </div>
      <div class="content-line">
        <input class="content-input"
               type="password"
               placeholder="密码">
      </div>
      <div class="content-forget">
        <router-link to="login">忘记密码</router-link>
      </div>
      <div class="button-container">
        <button class="button">登录</button>
      </div>
    </div>
    <div class="content-bottom">
      <router-link class="bottom-btn pull-left"
                   to="/">返回首页</router-link>
      <router-link class="bottom-btn pull-right"
                   to="register">立即注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage'
}
</script>

<style scoped lang="stylus">
.header
  height 45px
  line-height 45px
  text-align center
  background #fff8f0
  color #999
  font-size 12px
.content
  padding 20px 30px
  border-bottom 1px solid #AAA
  border-top 1px solid #AAA
  .content-header
    height 50px
    line-height 50px
    text-align center
    font-size 26px
    font-weight 700
    color #e4393c
  .content-line
    border 1px solid #AAA
    height 40px
    margin-top 20px
    margin-bottom 20px
    font-size 16px
  .input-namer
    height 20px
    border none
    margin 10px
  .text-password
    border 1px solid #AAA
    height 40px
    font-size 16px
  .content-input
    height 20px
    border none
    margin 10px
  .text-forget
    margin 10px
  .text-button
    height 41px
  .button
    display block
    background #e4393c
    height 41px
    width 100%
    background #bd0200
    font-size 20px
    color #fff
    border 1px solid #e85356
.content-bottom
  padding 0 30px
  height 50px
  line-height 50px
  .bottom-btn
    font-size 14px
    color #bd0200
    &:hover
     text-decoration underline
</style>
