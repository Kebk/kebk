<template>
  <div class="kebk-container">
    <p class="title">申请成为供应商</p>
    <p class="info">请如实填写以下信息</p>
    <el-form class="form"
             label-position="right"
             label-width="300px"
             :model="formData"
             :rules="rules">
      <el-form-item label="供应商名称">
        <el-input v-model="formData.name"
                  placeholder="请输入供应商名称"></el-input>
      </el-form-item>
      <el-form-item label="企业名称">
        <el-input v-model="formData.business"
                  placeholder="请输入营业执照或其他身份证件上的企业名称"></el-input>
      </el-form-item>
      <el-form-item label="统一社会信用代码/注册号/组织机构代码">
        <el-input v-model="formData.code"
                  placeholder="请输入统一社会信用代码或者组织机构代码"></el-input>
      </el-form-item>
      <el-form-item label="上传营业执照">
        <div>
          <el-upload class="upload-container"
                     action="http://localhost:8700/upload/idcard"
                     :show-file-list="false"
                     :on-success="handleSuccess"
                     accept=".jpg,.jpeg,.png">
            <el-button size="small"
                       type="primary">点击上传</el-button>
          </el-upload>
        </div>
        <div>
          <img v-if="evidence"
               width="400"
               :src="evidence">
        </div>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input type="textarea"
                  v-model="formData.address"
                  placeholder="请填写您的详细地址"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="handleApply">提交申请</el-button>
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
import { applySupplier } from '@/api/user'
import { mapGetters } from 'vuex'
export default {
  name: 'ApplySupplier',
  data () {
    return {
      formData: {
        name: '',
        business: '',
        code: '',
        address: ''
      },
      evidence: '',
      rules: {
        name: [{ required: true, message: '请输入供应商名称', trigger: 'blur' }],
        business: [{ required: true, message: '请输入企业名称', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSuccess (response, file, fileList) {
      this.evidence = response.data.url
    },
    handleApply () {
      const data = {
        userId: this.user._id,
        ...this.formData,
        evidence: this.evidence
      }
      applySupplier(data).then(res => {
        this.$message({
          message: '申请成功!',
          type: 'success'
        })
        this.$router.push('/user/index')
      })
    }
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
    width 800px
    margin 0 260px 0 auto
    .tips li
      line-height 18px
      font-size 12px
      color #a9b0b4
      list-style disc
</style>
