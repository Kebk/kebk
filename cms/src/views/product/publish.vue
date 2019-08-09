<template>
  <div class="product-publish">
    <el-form :model="dataForm"
             :rules="rules"
             ref="dataForm"
             label-width="100px"
             hide-required-asterisk>
      <el-row>
        <el-col :span="8">
          <el-form-item label="商品名称"
                        prop="name">
            <el-input v-model="dataForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="商品类型"
                        prop="classifyId">
            <el-select style="width:100%"
                       v-model="dataForm.classifyId"
                       placeholder="请选择商品类型">
              <el-option v-for="item in classifyList"
                         :key="item._id"
                         :label="item.name"
                         :value="item._id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="成本价"
                        prop="price">
            <el-input v-model="dataForm.price"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="销售价"
                        prop="salesPrice">
            <el-input v-model="dataForm.salesPrice"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="库存"
                        prop="storage">
            <el-input v-model="dataForm.storage"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="商品图片"
                      prop="image">
          <el-upload action="http://localhost:8700/upload/product"
                     :show-file-list="false"
                     :on-success="handleSuccess"
                     :headers="headers"
                     accept=".jpg,.jpeg,.png">
            <el-button size="small"
                       type="primary">点击上传</el-button>
          </el-upload>
          <div>
            <img v-if="dataForm.image"
                 :src="dataForm.image"
                 width="200">
          </div>
        </el-form-item>
      </el-row>
      <el-row style="margin-bottom:10px;line-height:24px;margin-tighr:10px">商品参数
        <i class="el-icon-circle-plus"
           style="color:#409EFF;cursor:pointer"
           @click="handleAdd"></i>
      </el-row>
      <el-row v-for="(item,index) in dataForm.parameter"
              :key="index">
        <el-col :span="8">
          <el-form-item label="参数名称"
                        :prop="'parameter.'+index+'.name'"
                        :rules="[{ required: true, message: '请输入参数名称', trigger: 'blur' }]">
            <el-input v-model="item.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="参数值"
                        :prop="'parameter.'+index+'.value'"
                        :rules="[{ required: true, message: '请输入参数值', trigger: 'blur' }]">
            <el-input v-model="item.value"></el-input>
          </el-form-item>
        </el-col>
        <el-col style="line-height:40px;margin-left:10px;color:#F56C6C;cursor:pointer"
                :span="2">
          <i class="el-icon-remove"
             @click="handleRemove(index)"></i>
        </el-col>
      </el-row>
      <el-row>
        <el-button type="primary"
                   @click="submitForm('dataForm')">发布商品</el-button>
        <el-button type="primary"
                   @click="resetForm('dataForm')">重置</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getAllClassifyList } from '@/api/classify'
import { publishProduct } from '@/api/product'
import store from '@/store'
export default {
  name: 'ProductPublish',
  data () {
    const token = store.getters.token
    return {
      headers: {
        Authorization: token
      },
      dataForm: {
        name: '',
        image: '',
        price: '',
        salesPrice: '',
        storage: '',
        classifyId: '',
        parameter: []
      },
      rules: {
        name: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
        image: [{ required: true, message: '请上传商品图片', trigger: 'blur' }],
        classifyId: [{ required: true, message: '请选择商品类型', trigger: 'blur' }],
        price: [{ required: true, message: '请输入商品成本价', trigger: 'blur' }],
        storage: [{ required: true, message: '请输入商品库存', trigger: 'blur' }],
        salesPrice: [{ required: true, message: '请输入商品销售价', trigger: 'blur' }]
      },
      classifyList: []
    }
  },
  methods: {
    handleSuccess (response, file, fileList) {
      this.dataForm.image = response.data.url
    },
    handleAdd () {
      this.dataForm.parameter.push({ name: '', value: '' })
    },
    handleRemove (index) {
      this.dataForm.parameter.splice(index, 1)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dataForm.userId = this.user._id
          this.dataForm.supplierId = this.user.supplierId
          publishProduct(this.dataForm).then(res => {
            this.$message({
              type: 'success',
              message: '成功发布商品!'
            })
            this.resetForm('dataForm')
          })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.dataForm.parameter = []
    }
  },
  created () {
    getAllClassifyList().then(res => {
      this.classifyList = res.data
    })
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style>
</style>
