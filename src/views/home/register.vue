<template>
  <div class="register">
    <div class="header">
      <div class="kebk-container">
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
    </div>
    <div class="content kebk-container">
      <div class="content-header">用户注册</div>
      <div class="content-form">
        <div class="content-line">
          <label for="phone">手机号</label>
          <input id="phone"
                 :class="{'border-color' : formData.phone.isWarn}"
                 type="text"
                 placeholder="请输入您的手机号码"
                 autocomplete="off"
                 v-model="formData.phone.value"
                 @blur="handlePhoneVerify">
          <span>{{formData.phone.msg}}</span>
        </div>
        <div class="content-line">
          <label for="username">用户名</label>
          <input id="username"
                 :class="{'border-color' : formData.username.isWarn}"
                 type="text"
                 placeholder="请输入您的用户名"
                 autocomplete="off"
                 v-model="formData.username.value"
                 @blur="handleNameVertify">
          <span>{{formData.username.msg}}</span>
        </div>
        <div class="content-line">
          <label for="password">密码</label>
          <input id="password"
                 :class="{'border-color' : formData.password.isWarn}"
                 type="password"
                 v-model="formData.password.value"
                 placeholder="请输入密码"
                 @blur="handleRePassVertify">
          <span>{{formData.password.msg}}</span>
        </div>
        <div class="content-line">
          <label for="repassword">确认密码</label>
          <input id="repassword"
                 :class="{'border-color' : formData.repassword.isWarn}"
                 type="password"
                 v-model="formData.repassword.value"
                 placeholder="请再次输入密码"
                 @blur="handleRePassVertify">
          <span>{{formData.repassword.msg}}</span>
        </div>
      </div>
      <div class="button-container">
        <button class="register-button"
                @click="handleRegister">注册</button>
      </div>
    </div>
    <main-bottom></main-bottom>
  </div>
</template>

<script>
import MainBottom from '@/components/common/mainBottom.vue'

export default {
  name: 'register',
  data () {
    return {
      formData: {
        phone: { value: '', msg: '', isShow: false, isWarn: false },
        username: { value: '', msg: '', isShow: false, isWarn: false },
        password: { value: '', msg: '', isShow: false, isWarn: false },
        repassword: { value: '', msg: '', isShow: false, isWarn: false }
      }
    }
  },
  methods: {
    handlePhoneVerify (phone) {
      this.$api.user.verify({ phone: this.formData.phone.value }).then(res => {
        this.formData.phone.isWarn = res.code === 0
        this.formData.phone.msg = res.msg
      })
    },
    handleNameVertify () {
      this.$api.user.verify({ username: this.formData.username.value }).then(res => {
        this.formData.username.isWarn = res.code === 0
        this.formData.username.msg = res.msg
      })
    },
    handleRePassVertify () {
      if (this.formData.password.value !== this.formData.repassword.value) {
        this.formData.repassword.msg = '两次输入的密码不一致'
        this.formData.password.isWarn = true
        this.formData.repassword.isWarn = true
      } else {
        this.formData.repassword.msg = ''
        this.formData.password.isWarn = false
        this.formData.repassword.isWarn = false
      }
    },
    handleRegister () {
      const params = {
        phone: this.formData.phone.value,
        username: this.formData.username.value,
        password: this.formData.password.value
      }
      this.$api.user.register(params).then(res => {
        if (res.code === 200) {
          // 注册成功
          this.$store.commit('LOGIN', res.data)
          this.$router.push('/')
        } else {
          // 出错
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
  box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.1)
  .kebk-container
    position relative
    height 100%
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
      position relative
      line-height 50px
      margin-bottom 30px
      font-size 14px
      box-sizing border-box
      label
        display inline-block
        width 100px
        padding 0 10px
        box-sizing border-box
        text-align right
      input
        width 297px
        height 48px
        padding 0 10px
        box-sizing border-box
        border 1px solid #D3D3D3
      span
        position absolute
        left 100px
        bottom -20px
        line-height 1
        color $c-hover
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
.border-color
  border-color $c-hover !important
</style>
