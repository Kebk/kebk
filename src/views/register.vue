<template>
  <div>
    <div class="register">
      <div class="register-header">
        <div class="kebk-container">
          <div class="header-left">
            <div class="left-content">欢迎注册</div>
          </div>
          <div class="header-right">
            <a class="right-a" href="/login">已有账号？请登录&gt;</a>
          </div>
        </div>
      </div>
      <div class="register-content">
        <div class="kebk-container">
          <div class="content-title">用户注册</div>

          <div class="content-text">
            <div class="text-namer">
              <span class="span-style">&nbsp;用户名&nbsp;&nbsp;&nbsp;</span>
              <input class="input-namer" type="text" placeholder="邮箱/用户名/已验证手机">
            </div>
            <div class="text-password">
              <span class="span-style">&nbsp;密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <input class="input-password" type="password" placeholder="密码">
            </div>
            <div class="confirm-password">
              <span class="span-style">&nbsp;确认密码</span>
              <input class="input-confirm" type="password" placeholder="密码">
            </div>
          </div>
          <div class="register-button">
            <button class="button">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</button>
          </div>
        </div>
      </div>
    </div>
    <main-bottom></main-bottom>
  </div>
</template>

<script>
  import MainBottom from '@/components/mainBottom.vue'

  export default {
    name: "register",
    components:{
      MainBottom
    }
  }
</script>

<style scoped lang="stylus">
  .register
    height 550px

    .register-header
      height: 150px
      width 100%
      border-bottom 2px solid #aaa

      .kebk-container
        height 100%

        .header-left
          float left
          height 100px
          line-height 100px
          margin 25px

          .left-content
            display block
            margin-top 5px
            font-size 45px

        .header-right
          float right
          height 100px
          margin: 25px

          .right-a
            display block
            margin-top 70px
            text-decoration none
            font-size 20px
            color: #999

          .right-a:hover
            color $c-hover

    .register-content
      height 400px

      .kebk-container
        height 100%

        .content-title
          font-size 30px
          text-align center
          color #bd0200

        .content-text
          width 400px
          margin 0 auto
          height 220px
          padding 20px 30px

          .text-header
            height 50px
            line-height 50px
            text-align center
            font-size 26px
            padding-bottom 5px
            font-weight 700
            color: #bd0200

          .text-namer
            border 1px solid #AAA
            height 40px
            margin-top 20px
            margin-bottom 20px
            font-size 16px
            background white

            .span-style
              color: #AAA

            .input-namer
              height 20px
              border none
              margin 10px

          .text-password
            border 1px solid #AAA
            height 40px
            font-size 16px
            background white

            .span-style
              color: #AAA

            .input-password
              height 20px
              border none
              margin 10px

          .confirm-password
            border 1px solid #AAA
            height 40px
            font-size 16px
            background white
            margin-top 20px

          .span-style
            color: #AAA

          .input-confirm
            height 20px
            border none
            margin 10px

        .register-button
          height 50px

          .button
            display block
            height 50px
            width 120px
            margin 0 auto
            font-size 24px
            background #bd0200
            color white
            border none


</style>
