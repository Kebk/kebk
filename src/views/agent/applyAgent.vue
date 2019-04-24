<template>
  <div class="kebk-container">
    <p class="title">申请成为代理</p>
    <p class="info">请如实填写以下信息</p>
    <el-form class="form"
             label-position="right"
             label-width="100px"
             :model="formData"
             :rules="rules"
             ref="formData">
      <el-form-item label="姓名"
                    porp="name">
        <el-input v-model="formData.name"
                  placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="身份证号码">
        <el-input v-model="formData.idCard"
                  placeholder="请输入身份证号码"></el-input>
      </el-form-item>
      <el-form-item label="上传证件照片">
        <el-upload class="upload-container"
                   action="http://localhost:8700/upload/idcard"
                   :show-file-list="false"
                   :on-success="handleFrontSuccess"
                   accept=".jpg,.jpeg,.png">
          <img v-if="idCardFront"
               :src="idCardFront"
               class="avatar">
          <div class="content"
               v-else>
            <i class="el-icon-plus avatar-uploader-icon"></i>
            <p class="text">正面</p>
          </div>
        </el-upload>
        <el-upload class="upload-container"
                   action="http://localhost:8700/upload/idcard"
                   :show-file-list="false"
                   :on-success="handleBehindSuccess"
                   accept=".jpg,.jpeg,.png">
          <img v-if="idCardBehind"
               :src="idCardBehind"
               class="avatar">
          <div class="content"
               v-else>
            <i class="el-icon-plus avatar-uploader-icon"></i>
            <p class="text">反面</p>
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="选择供应商">
        <el-select v-model="formData.supplierId"
                   placeholder="请选择供应商"
                   style="width:500px;">
          <el-option v-for="item in supplierList"
                     :key="item.supplierId._id"
                     :label="item.supplierId.name"
                     :value="item.supplierId._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="邀请码(选填)">
        <el-input v-model="formData.inviteCode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="handleApply('formData')">提交申请</el-button>
      </el-form-item>
      <el-form-item>
        <ul class="tips">
          <li>申请需要经过审核</li>
          <li>预计在1-2个工作日内完成审核</li>
        </ul>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { applyAgent, getSupplierList } from '@/api/user'
import { mapGetters } from 'vuex'
export default {
  name: 'ApplyAgent',
  data () {
    return {
      formData: {
        name: '',
        idCard: '',
        supplierId: '',
        inviteCode: ''
      },
      supplierList: [],
      idCardFront: '',
      idCardBehind: '',
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        idCard: [{ required: true, message: '请输入身份证号码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleFrontSuccess (response, file, fileList) {
      this.idCardFront = response.data.url
    },
    handleBehindSuccess (response, file, fileList) {
      this.idCardBehind = response.data.url
    },
    handleApply (formData) {
      this.$refs[formData].validate((valid) => {
        if (valid) {
          const data = {
            userId: this.user._id,
            ...this.formData,
            idCardFront: this.idCardFront,
            idCardBehind: this.idCardBehind,
            inviteCode: this.inviteCode
          }
          applyAgent(data).then(res => {
            this.$message({
              message: '申请成功!',
              type: 'success'
            })
            this.$router.push('/user/index')
          })
        }
      })
    }
  },
  created () {
    getSupplierList().then(res => {
      this.supplierList = res.data
    })
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped lang="stylus">
.kebk-container
  padding 20px 0
  .title
    line-height 80px
    font-size 24px
    text-align center
  .info
    text-align center
    line-height 50px
    color #a9b0b4
  .form
    width 600px
    margin 0 auto
    .upload-container
      width 234px
      position relative
      display inline-block
      margin-right 10px
      color #8c939d
      border 1px dashed #d9d9d9
      border-radius 6px
      cursor pointer
      overflow hidden
      &:hover
        border-color #409EFF
      .avatar
        width 234px
        height 145px
        display block
      .content
        padding 35px 0
        .avatar-uploader-icon
          font-size 28px
          width 234px
          text-align center
        .text
          line-height 35px
    .tips li
      line-height 18px
      font-size 12px
      color #a9b0b4
      list-style disc
</style>
