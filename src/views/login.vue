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
        <div class="login-container">
          <div class="login-header">
            <p>Kebk不会以任何理由要求您转账汇款，谨防诈骗</p>
          </div>
          <div class="login-content">
            <div class="content-header">
              <p>欢迎登录</p>
              <div class="content-warn"
                   v-show="isWarn">
                <i class="iconfont">&#xe601;</i>
                <span>{{warnMsg}}</span>
              </div>
            </div>
            <div class="content-line">
              <input type="text"
                     placeholder="已验证手机"
                     v-model="formData.phone">
            </div>
            <div class="content-line">
              <input type="password"
                     placeholder="密码"
                     v-model="formData.password">
            </div>
            <div class="content-forget">
              <router-link to="login">忘记密码</router-link>
            </div>
            <div class="button-container">
              <button class="button"
                      @click="handleLogin">登录</button>
            </div>
          </div>
          <div class="content-bottom">
            <router-link class="bottom-btn pull-left"
                         to="/">返回首页</router-link>
            <router-link class="bottom-btn pull-right"
                         to="register">立即注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <main-bottom></main-bottom>
  </div>
</template>

<script>
import MainBottom from '@/components/common/mainBottom.vue'

export default {
  name: 'login',
  data () {
    return {
      formData: {
        phone: '',
        password: ''
      },
      isWarn: false,
      warnMsg: ''
    }
  },
  methods: {
    handleLogin () {
      const params = { phone: this.formData.phone, password: this.formData.password }
      this.$api.user.login(params).then(res => {
        if (res.code === 200) {
          this.$store.state.userData = res.data
          this.$router.push('/')
        } else {
          this.isWarn = true
          this.warnMsg = res.msg
        }
      })
    }
  },
  components: {
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
      margin 25px
      background white
      .login-header
        height 45px
        line-height 45px
        text-align center
        background #fff8f0
        color #999
        font-size 12px
      .login-content
        padding 20px 30px
        padding-bottom 1px solid #AAA
        border-top 1px solid #AAA
        .content-header
          position relative
          padding-bottom 30px
          p
            font-size 26px
            font-weight 700
            color #e4393c
            text-align center
          .content-warn
            position absolute
            width 100%
            padding 3px 10px
            color #e4393c
            line-height 15px
            background #ffebeb
            border 1px solid #faccc6
            box-sizing border-box
            span
              margin-left 5px
        .content-line
          border 1px solid #AAA
          height 40px
          margin-bottom 25px
          font-size 16px
          input
            height 40px
            width 100%
            padding 0 10px
            border none
            box-sizing border-box
        .button
          display block
          background #e4393c
          height 41px
          width 100%
          background #bd0200
          font-size 20px
          color #fff
          border 1px solid #e85356
          outline none
          cursor pointer
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
