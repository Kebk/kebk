<template>
  <div class="user-list">
    <el-form :inline="true"
             :model="searchForm"
             class="demo-form-inline">
      <el-form-item label="用户类型">
        <el-select v-model="searchForm.userType"
                   placeholder="请选择用户类型">
          <el-option label="请选择用户类型"
                     value=""></el-option>
          <el-option label="管理员"
                     value="99"></el-option>
          <el-option label="供应商"
                     value="2"></el-option>
          <el-option label="用户"
                     value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="handleSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading"
              :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="username"
                       label="用户名"
                       width="180">
      </el-table-column>
      <el-table-column prop="phone"
                       label="手机号"
                       width="180">
      </el-table-column>
      <el-table-column prop="sex"
                       label="性别"
                       width="180"
                       :formatter="formatSex">
      </el-table-column>
      <el-table-column prop="userType"
                       label="用户类型"
                       width="180"
                       :formatter="formatUserType">
      </el-table-column>
      <el-table-column prop="isLock"
                       label="是否封禁"
                       width="180"
                       :formatter="formatIsLock">
      </el-table-column>
      <el-table-column label="注册时间">
        <template slot-scope="scope">
          <span>{{scope.row.createTime|dataFormat}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="200">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="primary"
                     @click="handleDetail(scope.row._id)">查看</el-button>
          <el-button size="mini"
                     type="success"
                     v-if="scope.row.isLock"
                     @click="handleLock(scope.row._id,false)">解封</el-button>
          <el-button size="mini"
                     type="danger"
                     v-else
                     @click="handleLock(scope.row._id,true)">封禁</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination v-show="listQuery.total>0"
                :page.sync="listQuery.page"
                :size.sync="listQuery.pageSize"
                :total="listQuery.total"
                @pagination="getList" />
  </div>
</template>

<script>
import { getUserList, lockUser } from '@/api/user'
import Pagination from '@/components/Pagination'
export default {
  name: 'UserList',
  data () {
    return {
      listLoading: true,
      tableData: [],
      listQuery: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      searchForm: {
        userType: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.getList()
    },
    handleDetail (id) {
      this.$router.push({ path: `/user/detail/${id}` })
    },
    handleLock (_id, isLock) {
      let lockMsg = {}
      if (isLock) {
        lockMsg = {
          title: '确认封禁此用户？',
          message: '成功封禁！'
        }
      } else {
        lockMsg = {
          title: '确认解封此用户？',
          message: '成功解除禁！'
        }
      }
      this.$confirm(lockMsg.title, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        lockUser({ _id, isLock }).then(res => {
          this.getList()
          this.$message({
            message: lockMsg.message,
            type: 'success'
          })
        })
      }).catch(() => { })
    },
    getList () {
      this.listLoading = true
      getUserList({ ...this.listQuery, ...this.searchForm }).then(res => {
        this.tableData = res.data.list
        this.listQuery = res.data.listQuery
        this.listLoading = false
      })
    },
    formatSex (row, colum, value) {
      if (value === 1) {
        return '男'
      } else if (value === 2) {
        return '女'
      } else if (value === 0) {
        return '保密'
      }
    },
    formatUserType (row, colum, value) {
      if (value === 99) {
        return '管理员'
      } else if (value === 2) {
        return '供应商'
      } else if (value === 1) {
        return '代理'
      } else if (value === 0) {
        return '用户'
      }
    },
    formatIsLock (row, colum, value) {
      return value ? '是' : '否'
    }
  },
  created () {
    this.getList()
  },
  components: { Pagination }
}
</script>
