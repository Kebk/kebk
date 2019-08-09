<template>
  <div class="information-box">
    <el-form labelPosition='left'
             label-width="100px"
             :model="formData">
      <el-form-item label="用户头像">
        <el-upload class="upload-container"
                   action="http://localhost:8700/upload/avatar"
                   :show-file-list="false"
                   :on-success="handleUpload"
                   :headers="headers"
                   accept=".jpg,.jpeg,.png">
          <div class="avatar-containter">
            <img v-if="formData.avatar"
                 :src="formData.avatar"
                 class="avatar">
            <img src="http://kebk.oss-cn-hangzhou.aliyuncs.com/avatar/1556247357910.png"
                 v-else
                 class="avatar">
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="手机号码">
        <span>{{formData.phone}}</span>
        <!-- <el-input v-model="formData.phone"></el-input> -->
      </el-form-item>
      <el-form-item label="用户名">
        <span>{{formData.username}}</span>
        <!-- <el-input v-model="formData.username"></el-input> -->
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="formData.sex">
          <el-radio :label="0">保密</el-radio>
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="handleSave">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUserInfo, updateUser } from '@/api/user'
import { mapGetters } from 'vuex'
import store from '@/store'
export default {
  name: 'UserInformation',
  data () {
    const token = store.getters.token
    return {
      formData: {
        phone: '',
        username: '',
        avatar: '',
        email: ''
      },
      headers: {
        Authorization: token
      }
    }
  },
  methods: {
    handleUpload (response, file, fileList) {
      this.formData.avatar = response.data.url
    },
    handleSave () {
      updateUser(this.formData).then(res => {
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      })
    }
  },
  created () {
    getUserInfo({ _id: this.user._id }).then(res => { this.formData = res.data })
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped lang="stylus">
.information-box
  width 890px
  border 1px solid #e8e8e8
  padding 30px
  box-sizing border-box
  .avatar-containter
    width 70px
    height 70px
    border-radius 100%
    overflow hidden
    .avatar
      width 100%
      height 100%
</style>
