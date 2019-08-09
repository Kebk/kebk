<template>
  <div class="order-list">
    <el-row>
      <el-form :inline="true"
               :model="searchForm">
        <el-form-item label="订单状态">
          <el-select v-model="searchForm.status"
                     placeholder="请选择订单状态">
            <el-option label="请选择订单状态"
                       value=""></el-option>
            <el-option label="已取消"
                       value="0"></el-option>
            <el-option label="待付款"
                       value="1"></el-option>
            <el-option label="待发货"
                       value="2"></el-option>
            <el-option label="已发货"
                       value="3"></el-option>
            <el-option label="已完成"
                       value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="getList">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-table v-loading="listLoading"
              :data="tableData"
              border
              style="width: 100%">
      <el-table-column label="用户"
                       width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover"
                      placement="top">
            <p>用户名: {{ scope.row.userId.username }}</p>
            <p>手机号码: {{ scope.row.userId.phone }}</p>
            <div slot="reference">
              <el-tag size="medium">{{ scope.row.userId.username }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="status"
                       label="订单状态"
                       width="180"
                       :formatter="formatStatus">
      </el-table-column>
      <el-table-column label="订单商品">
        <template slot-scope="scope">
          <el-popover trigger="hover"
                      placement="top">
            <p>商品名称: {{ scope.row.productId.name }}</p>
            <p>单价: {{ scope.row.productId.price }}</p>
            <p>数量: {{ scope.row.number }}</p>
            <img :src="scope.row.productId.image"
                 width="100">
            <div slot="reference">
              <el-tag size="medium">{{ scope.row.productId.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="订单创建时间"
                       width="180">
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
          <el-button v-if="scope.row.status===1"
                     size="mini"
                     type="danger"
                     @click="handleCancel(scope.row._id)">取消订单</el-button>
          <el-button v-if="scope.row.status===2"
                     size="mini"
                     type="success"
                     @click="showDialog=true;newForm._id=scope.row._id">发货</el-button>
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
        <el-form-item prop="_id"
                      hide-required-asterisk>
          <input type="hidden"
                 v-model="newForm._id">
        </el-form-item>
        <el-form-item label="快递公司"
                      prop="expressCompany"
                      :rules="[{required: true, message: '请输入快递公司', trigger: 'blur' }]">
          <el-input v-model="newForm.expressCompany"></el-input>
        </el-form-item>
        <el-form-item label="物流单号"
                      prop="expressNumber"
                      :rules="[{required: true, message: '请输入物流单号', trigger: 'blur' }]">
          <el-input v-model="newForm.expressNumber"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="handleDelivery('newForm')">确定</el-button>
          <el-button type="primary"
                     @click="resetForm('newForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getOrderList, deliveryOrder, cancelOrder } from '@/api/order'
import Pagination from '@/components/Pagination'
export default {
  name: 'OrderList',
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
        status: ''
      },
      showDialog: false,
      newForm: {
        _id: '',
        expressCompany: '',
        expressNumber: ''
      }
    }
  },
  methods: {
    handleDetail (_id) {
      this.$router.push({ path: '/order/detail', query: { _id } })
    },
    handleCancel (_id) {
      this.$confirm('确认取消订单？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        cancelOrder({ _id }).then(res => {
          this.$message({
            type: 'success',
            message: '成功取消订单'
          })
          this.getList()
        })
      }).catch(() => { })
    },
    handleDelivery (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          deliveryOrder(this.newForm).then(res => {
            this.$message({
              type: 'success',
              message: '发货成功'
            })
            this.resetForm('newForm')
            this.getList()
          })
        }
      });

    },
    resetForm (formName) {
      this.showDialog = false
      this.$refs[formName].resetFields()
    },
    getList () {
      this.listLoading = true
      getOrderList({ ...this.listQuery, ...this.searchForm }).then(res => {
        this.tableData = res.data.list
        this.listQuery = res.data.listQuery
        this.listLoading = false
      })
    },
    formatStatus (row, colum, value) {
      if (value === 0) {
        return '已取消'
      } else if (value === 1) {
        return '待付款'
      } else if (value === 2) {
        return '待发货'
      } else if (value === 3) {
        return '已发货'
      } else if (value === 4) {
        return '已完成'
      }
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
