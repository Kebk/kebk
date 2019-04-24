<template>
  <div class="login">
    <div class="kebk-container">
      <div class="login-container">
        <div class="header clearfix">
          <div :class="[accountType==='phone'?'active-tab':'','header-tab']"
               @click="accountType='phone';formData.code='';formData.password='';showMsg=false">手机号登录</div>
          <div :class="[accountType==='username'?'active-tab':'','header-tab']"
               @click="accountType='username';formData.password='';showMsg=false">用户名登录</div>
          <div class="pass-type"
               v-if="accountType==='phone'">
            <span v-if="passType==='code'"
                  @click="passType='password';formData.code='';showMsg=false">使用密码验证登录</span>
            <span v-else
                  @click="passType='code';formData.password='';showMsg=false">使用短信验证登录</span>
          </div>
        </div>
        <div class="content">
          <el-form :model="formData"
                   ref="formData">
            <div v-if="accountType==='phone'">
              <el-form-item>
                <el-input v-model="formData.phone"
                          placeholder="请输入手机号码"></el-input>
              </el-form-item>
              <el-form-item v-if="passType==='code'">
                <el-input style="width:220px;margin-right:8px;"
                          v-model="formData.code"
                          placeholder="请输入短信验证码"></el-input>
                <el-button type="primary"
                           @click="handleMessage">获取验证码</el-button>
              </el-form-item>
              <el-form-item v-else>
                <el-input v-model="formData.password"
                          placeholder="请输入密码"
                          type="password"></el-input>
              </el-form-item>
            </div>
            <div v-else>
              <el-form-item>
                <el-input v-model="formData.username"
                          placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="formData.password"
                          placeholder="请输入密码"
                          type="password"></el-input>
              </el-form-item>
            </div>
            <el-form-item class="btn-container">
              <p class="notify"
                 v-show="showMsg">
                <i class="el-icon-warning"
                   style="margin-right:9px"></i>{{message}}</p>
              <el-button type="primary"
                         @click="handleLogin('formData')">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doLogin, getMessage } from '@/api/user'
import { phoneReg, usernameReg } from '@/utils/reg'
export default {
  name: 'login',
  data () {
    return {
      formData: {
        phone: '',
        account: '',
        code: '',
        password: ''
      },
      accountType: 'phone',
      passType: 'code',
      showMsg: false,
      message: ''
    }
  },
  methods: {
    handleLogin (formName) {
      let params
      if (this.accountType === 'phone') {
        if (!phoneReg.test(this.formData.phone)) {
          this.showMsg = true
          this.message = '请输入正确的手机号码'
          return
        }
        if (this.passType === 'code') {
          if (this.formData.code === '') {
            this.showMsg = true
            this.message = '请输入验证码'
            return
          }
          params = { phone: this.formData.phone, code: this.formData.code }
        } else {
          if (this.formData.password === '') {
            this.showMsg = true
            this.message = '请输入密码'
            return
          }
          params = { phone: this.formData.phone, password: this.formData.password }
        }
      } else {
        if (!usernameReg.test(this.formData.username)) {
          this.showMsg = true
          this.message = '请输入正确的用户名'
          return
        }
        if (this.formData.password === '') {
          this.showMsg = true
          this.message = '请输入密码'
        }
        params = { username: this.formData.username, password: this.formData.password }
      }
      doLogin(params).then(res => {
        this.$store.commit('LOGIN', res.data)
        this.$router.push('/')
      }).catch(err => {
        this.showMsg = true
        this.message = err.msg
      })
    },
    handleMessage () {
      if (!phoneReg.test(this.formData.phone)) {
        this.showMsg = true
        this.message = '请输入正确的手机号码'
        return
      }
      getMessage({ phone: this.formData.phone }).then(res => {
        this.$message({
          message: '成功发送验证码',
          type: 'success'
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.login
  background url('../../assets/img/background1.png')
  background-size 100% 100%
  background-repeat no-repeat
  .kebk-container
    height 600px
    .login-container
      float right
      padding 40px
      width 340px
      margin 50px 25px 0 0
      background white
      .header
        position relative
        color #999
        font-size 18px
        margin-bottom 48px
        .active-tab
          color $blue
        .header-tab
          width 50%
          float left
          padding 0 38px
          box-sizing border-box
          cursor pointer
          &:first-child
            border-right 1px solid #999
        .pass-type
          position absolute
          bottom -40px
          right 0
          font-size 12px
          color #999
          cursor pointer
          &:hover
            color $blue
      .content
        .btn-container
          position relative
          margin-top 50px
          text-align center
        .notify
          position absolute
          top -45px
          text-align left
          color #fa6060
</style>
