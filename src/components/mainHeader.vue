<template>
  <!-- 个人导航栏头部 -->
  <div class="main-header">
    <div class="kebk-container">
      <!-- 左:登录 注册 -->
      <div class="header-left">
        <span class="iconfont site-icon">&#xe65e;</span>
        北京
      </div>
      <div class="header-right">
        <div class="header-login">
          <a class="login-a" href="#">您好，请登录</a>
        </div>
        <div class="header-register">
          <a class="register-a" href="#">免费注册</a>
        </div>
        <div class="header-banner" v-for="item of headerList" :key="item.id">
          <a class="header-a" href="#">{{item.text}}</a>
        </div>
      </div>
      <!-- 右:个人中心(下拉:卖家中心 买家中心) | 建议 联系客服 -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "mainHeader",
    data() {
      return {
        headerList: [{
          id: '0001',
          text: '卖家中心'
        }, {
          id: '0002',
          text: '买家中心'
        }, {
          id: '0003',
          text: '买家建议'
        }, {
          id: '0004',
          text: '联系客服'
        }]
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

      .header-left
        height 16px
        padding-top 6px
        line-height 16px
        float: left
        width: 652px

      .header-right
        height 16px
        padding-top 6px
        line-height 16px

        .header-login
          float: left
          margin-right: 20px

          .login-a
            display block
            text-decoration none
            color: $c-hover

        .header-register
          float: left
          margin-right: 20px

          .register-a
            display block
            text-decoration none
            color: $c-banner

        .header-banner
          float left
          width: 80px
          text-align center
          border-left: 2px solid $c-banner

          .header-a
            display: block
            text-decoration none
            color $c-banner

          .header-a:hover
            color: $c-hover


</style>
