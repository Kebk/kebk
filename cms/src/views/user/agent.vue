<template>
  <div class="user-list">
    <el-tabs v-model="status"
             @tab-click="handleChangeTab">
      <el-tab-pane label="代理列表"
                   name="1"></el-tab-pane>
      <el-tab-pane label="待审核列表"
                   name="0"></el-tab-pane>
      <el-tab-pane label="未通过审核列表"
                   name="-1"></el-tab-pane>
    </el-tabs>
    <el-table v-loading="listLoading"
              :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="agentId.name"
                       label="姓名"
                       width="100">
      </el-table-column>
      <el-table-column prop="agentId.idCard"
                       label="身份证号码"
                       width="180">
      </el-table-column>
      <el-table-column label="身份证正面照片"
                       width="300">
        <template slot-scope="scope">
          <el-popover trigger="hover"
                      placement="top">
            <img :src="scope.row.agentId.idCardFront"
                 width="300">
            <div slot="reference">
              <el-tag size="medium">身份证正面照片</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="身份证背面照片"
                       width="300">
        <template slot-scope="scope">
          <el-popover trigger="hover"
                      placement="top">
            <img :src="scope.row.agentId.idCardBehind"
                 width="300">
            <div slot="reference">
              <el-tag size="medium">身份证正面照片</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="用户信息"
                       width="150">
        <template slot-scope="scope">
          <el-popover trigger="hover"
                      placement="top">
            <p>手机号码: {{ scope.row.phone }}</p>
            <p>电子邮箱: {{ scope.row.email }}</p>
            <p>等级: {{ scope.row.level }}</p>
            <div slot="reference">
              <el-tag size="medium">{{ scope.row.username }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="申请时间">
        <template slot-scope="scope">
          <span>{{scope.row.createTime|dataFormat}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="300">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="primary"
                     @click="handleDetail(scope.row._id)">查看</el-button>
          <el-button size="mini"
                     type="success"
                     v-if="scope.row.status===0"
                     @click="handlePass(scope.row._id)">通过</el-button>
          <el-button size="mini"
                     type="danger"
                     v-if="scope.row.status===0"
                     @click="handleRefuse(scope.row._id)">不通过</el-button>
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
import { getAgentList, verifyAgent } from '@/api/user'
import Pagination from '@/components/Pagination'
export default {
  name: 'AgentList',
  data () {
    return {
      listLoading: true,
      tableData: [],
      listQuery: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      status: '1'
    }
  },
  methods: {
    handleChangeTab (tab) {
      this.status = tab.name
      this.getList()
    },
    handleDetail (id) {
      this.$router.push({ path: `/user/detail/${id}` })
    },
    handlePass (_id) {
      this.$confirm('通过审核？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        verifyAgent({ _id, status: 1 }).then(res => {
          this.getList()
          this.$message({
            message: '审核通过',
            type: 'success'
          })
        })
      }).catch(() => { })
    },
    handleRefuse (_id) {
      this.$prompt('请填写不通过理由', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '请填写理由'
      }).then(({ value }) => {
        verifyAgent({ _id, status: -1, reason: value }).then(res => {
          this.getList()
          this.$message({
            type: 'success',
            message: '审核不通过！'
          })
        })
      }).catch(() => { })
    },
    getList () {
      this.listLoading = true
      this.listQuery.status = this.status
      getAgentList(this.listQuery).then(res => {
        this.tableData = res.data.list
        this.listQuery = res.data.listQuery
        this.listLoading = false
      })
    }
  },
  created () {
    this.getList()
  },
  components: { Pagination }
}
</script>
