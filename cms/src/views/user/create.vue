<template>
  <div class="user-detail">
    <el-form ref="formData"
             :model="formData"
             :rules="rules"
             label-width="80px">
      <el-form-item label="手机号"
                    prop="phone">
        <el-input v-model="formData.phone"></el-input>
      </el-form-item>
      <el-form-item label="用户名"
                    prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱"
                    prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="formData.sex">
          <el-radio :label="0">保密</el-radio>
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户类型">
        <el-radio-group v-model="formData.userType">
          <el-radio :label="99">管理员</el-radio>
          <el-radio :label="2">供应商</el-radio>
          <el-radio :label="1">代理</el-radio>
          <el-radio :label="0">用户</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户等级">
        <el-input v-model="formData.level"></el-input>
      </el-form-item>
      <el-form-item label="信用值">
        <el-input v-model="formData.credit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="handleAdd('formData')">创建用户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createUser } from '@/api/user'
export default {
  name: 'userCreate',
  data () {
    return {
      formData: {
        phone: '',
        username: '',
        email: '',
        sex: 0,
        userType: 0,
        level: 0,
        credit: 0
      },
      rules: {
        phone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        email: [{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleAdd (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          createUser(this.formData).then(res => {
            console.log(res)
            this.$message({
              message: '创建成功，初始密码为123456',
              type: 'success'
            })
            this.$refs[form].resetFields()
          })
        }
      })
    }
  }
}
</script>

<style>
</style>
