<template>
    <div class="login">
      <div class="login-header">
        <div class="kebk-container">
          <div class="header-left">
            <div class="left-content">欢迎登录Kebk</div>
          </div>
          <div class="header-right">
            <a class="right-a" href="#">登录页面调查问卷</a>
          </div>
        </div>
      </div>
      <div class="login-content">
        <div class="kebk-container">
            <div class="content-login">
              <div class="content-warning">
                <p>Kebk不会以任何理由要求您转账汇款，谨防诈骗</p>
              </div>
              <div class="content-text">
                <div class="text-header">
                  账户登陆
                </div>
                <div class="text-namer">
                  <input class="input-namer" type="text" placeholder="邮箱/用户名/已验证手机">
                </div>
                <div class="text-password">
                  <input class="input-password" type="password" placeholder="密码">
                </div>
                <div class="text-forget">
                  <a href="">忘记密码</a>
                </div>
                <div class="text-button">
                  <button class="button">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                </div>
              </div>
              <div class="content-register">
                <a class="content-back" href="/">返回首页</a>
                <a class="register-a" href="/register">立即注册</a>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loginPage"
    }
</script>

<style scoped lang="stylus">

  .login
    height 625px
    .login-header
      height: 150px
      width 100%
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
          margin:25px
          .right-a
            display block
            margin-top 70px
            text-decoration none
            color: #999
          .right-a:hover
            color $c-hover

    .login-content
      height 475px
      background #bd0200
      .kebk-container
        height 100%
        background: url(//img10.360buyimg.com/da/jfs/t1/17377/2/6371/97524/5c4eee7dE1daad199/31ce01f6ba0123e1.png) 0px 0px no-repeat;background-color: #bd0200
        .content-login
          float right
          width 400px
          height 395px
          margin 25px
          background white
        .content-warning
          height 45px
          line-height 45px
          text-align center
          background #fff8f0
          color #999
          font-size 12px
        .content-text
          height 258px
          padding 20px 30px
          border-bottom 1px solid #AAA
          border-top 1px solid #AAA
          .text-header
            height 50px
            line-height 50px
            text-align center
            font-size 26px
            padding-bottom 5px
            font-weight 700
            color: #e4393c
           .text-namer
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
            .input-password
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
               border: 1px solid #e85356
        .content-register
          padding 0 30px
          height 50px
          line-height 50px
          .content-back
            float left
            font-size 14px
            color #bd0200
          .register-a
            float right
            font-size 14px
            color #bd0200
</style>
