<template>
  <div class="user-detail">
    <el-row style="margin-bottom:20px;">
      <el-button type="primary"
                 size="medium"
                 round
                 @click="$router.back(-1)">返回上一页</el-button>
    </el-row>
    <el-form ref="formData"
             :model="formData"
             label-width="80px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="手机号">
            <el-input v-model="formData.phone"
                      readonly></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="用户名">
            <el-input v-model="formData.username"
                      readonly></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="邮箱">
            <el-input v-model="formData.email"
                      readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="性别">
            <el-radio-group v-model="formData.sex">
              <el-radio disabled
                        :label="0">保密</el-radio>
              <el-radio disabled
                        :label="1">男</el-radio>
              <el-radio disabled
                        :label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="用户类型">
        <el-radio-group v-model="formData.userType">
          <el-radio disabled
                    :label="99">管理员</el-radio>
          <el-radio disabled
                    :label="2">供应商</el-radio>
          <el-radio disabled
                    :label="1">代理</el-radio>
          <el-radio disabled
                    :label="0">用户</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-row>
        <el-col :span="6">
          <el-form-item label="用户等级">
            <el-input v-model="formData.level"
                      readonly></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="信用值">
            <el-input v-model="formData.credit"
                      readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="是否封禁">
            <el-radio-group v-model="formData.isLock">
              <el-radio disabled
                        :label="false">否</el-radio>
              <el-radio disabled
                        :label="true">是</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="封禁时间">
            <el-input v-model="formData.LockTime"
                      readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { getUserById } from '@/api/user'
export default {
  name: 'UserDetail',
  data () {
    return {
      id: this.$route.params.id,
      formData: {}
    }
  },
  created () {
    getUserById({ _id: this.id }).then(res => {
      this.formData = res.data
    })
  }
}
</script>
