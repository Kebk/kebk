<template>
  <div class="product-classify">
    <el-row style="margin-bottom:20px">
      <el-button type="primary"
                 @click="showDialog=true">新增类别</el-button>
    </el-row>
    <el-table v-loading="listLoading"
              :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="name"
                       label="类别名称"
                       width="800">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="success"
                     @click="showDialog=true;newForm._id=scope.row._id;newForm.name=scope.row.name">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination v-show="listQuery.total>0"
                :page.sync="listQuery.page"
                :size.sync="listQuery.pageSize"
                :total="listQuery.total"
                @pagination="getList" />
    <el-dialog :visible.sync="showDialog"
               width="500px"
               @close="resetForm('newForm')">
      <el-form :model="newForm"
               ref="newForm">
        <input type="hidden"
               v-model="newForm._id">
        <el-form-item label="类别名称"
                      prop="name">
          <el-input v-model="newForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="handleEdit">保存</el-button>
          <el-button type="primary"
                     @click="resetForm('newForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getClassifyList, createClassify, deleteClassify, editClassify } from '@/api/classify'
export default {
  name: 'ProductClassify',
  data () {
    return {
      tableData: [],
      listLoading: true,
      listQuery: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      showDialog: false,
      newForm: {
        name: '',
        _id: ''
      }
    }
  },
  methods: {
    getList () {
      this.listLoading = true
      getClassifyList(this.listQuery).then(res => {
        this.tableData = res.data.list
        this.listQuery = res.data.listQuery
        this.listLoading = false
      })
    },
    handleDelete (index, row) {
      this.$confirm('确认删除此类别？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteClassify({ _id: row._id }).then(res => {
          this.getList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => { })
    },
    handleEdit () {
      if (this.newForm._id) {
        editClassify(this.newForm).then(res => {
          this.resetForm('newForm')
          this.getList()
          this.$message({
            type: 'success',
            message: '编辑成功！'
          })
        })
      } else {
        createClassify({ name: this.newForm.name }).then(res => {
          this.resetForm('newForm')
          this.getList()
          this.$message({
            type: 'success',
            message: '添加成功！'
          })
        })
      }
    },
    resetForm (formName) {
      this.showDialog = false
      this.$refs[formName].resetFields()
    }
  },
  created () {
    this.getList()
  },
  components: { Pagination }
}
</script>

<style>
</style>
