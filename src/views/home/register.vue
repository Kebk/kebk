<template>
  <div class="register kebk-container">
    <p class="header">用户注册</p>
    <div class="form">
      <el-form :label-position="labelPosition"
               label-width="80px"
               :model="formLabelAlign">
        <el-form-item label="手机号">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleRegister">anniu</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
      formData: {
        phone: { value: '', msg: '', isShow: false, isWarn: false },
        username: { value: '', msg: '', isShow: false, isWarn: false },
        password: { value: '', msg: '', isShow: false, isWarn: false },
        repassword: { value: '', msg: '', isShow: false, isWarn: false }
      },
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
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
