<template>
  <div class="register kebk-container">
    <p class="header">用户注册</p>
    <div class="form">
      <el-form label-width="80px"
               :model="formData"
               :rules="rules"
               ref="formData"
               hide-required-asterisk>
        <el-form-item label="手机号"
                      prop="phone">
          <el-input style="width:390px;margin-right:10px"
                    v-model="formData.phone"
                    placeholder="请输入手机号码"></el-input>
          <el-button type="primary"
                     @click="handleMessage">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码"
                      prop="code">
          <el-input v-model="formData.code"
                    placeholder="请输短信验证码"></el-input>
        </el-form-item>
        <el-form-item label="用户名"
                      prop="username">
          <el-input v-model="formData.username"
                    placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-row style="margin:0 0 10px 80px">
          <ul style="list-style:disc;color:#a9b0b4;">
            <li>字母开头</li>
            <li>6位以上(可以包含数字 字母 _ -)</li>
          </ul>
        </el-row>
        <el-form-item label="密码"
                      prop="password">
          <el-input v-model="formData.password"
                    type="password"
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-row style="margin:0 0 10px 80px">
          <ul style="list-style:disc;color:#a9b0b4;">
            <li>字母开头</li>
            <li>6位以上(可以包含数字 字母 _ -)</li>
          </ul>
        </el-row>
        <el-form-item label="确认密码"
                      prop="repassword">
          <el-input v-model="formData.repassword"
                    type="password"
                    placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleRegister('formData')"
                     type="primary">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { doRegister, getMessage } from '@/api/user'
import { phoneReg, usernameReg } from '@/utils/reg'
export default {
  name: 'register',
  data () {
    const checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号码不能为空'))
      } else {
        if (phoneReg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的手机号码'))
        }
      }
    }
    const checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        if (usernameReg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确格式的用户名'))
        }
      }
    }
    const checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else {
        if (usernameReg.test(value)) {
          return callback()
        } else {
          return callback(new Error('请输入正确格式的密码'))
        }
      }
    }
    const checkRepassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请再次输入密码'))
      } else {
        if (value === this.formData.password) {
          return callback()
        } else {
          return callback(new Error('两次密码不一致'))
        }
      }
    }
    return {
      formData: {
        phone: '',
        username: '',
        code: '',
        password: '',
        repassword: ''
      },
      rules: {
        phone: [{ validator: checkPhone, trigger: 'blur' }],
        code: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }],
        username: [{ validator: checkUsername, trigger: 'blur' }],
        password: [{ validator: checkPassword, trigger: 'blur' }],
        repassword: [{ validator: checkRepassword, trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleMessage () {
      if (!phoneReg.test(this.formData.phone)) return
      getMessage({ phone: this.formData.phone }).then(res => {
        this.$message({
          message: '成功发送验证码',
          type: 'success'
        })
      })
    },
    handleRegister (formData) {
      this.$refs[formData].validate((valid) => {
        if (valid) {
          doRegister(this.formData).then(res => {
            this.$store.commit('LOGIN', res.data)
            this.$router.push('/')
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.register
  padding 50px 0
  .header
    margin-bottom 20px
    font-size 28px
    text-align center
  .form
    width 600px
    margin 0 auto
</style>
