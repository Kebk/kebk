<template>
  <div class="product-list">
    <el-form :inline="true"
             :model="searchForm"
             class="demo-form-inline">
      <el-form-item label="商品名称">
        <el-input placeholder="请输入商品名称"
                  v-model="searchForm.keywords"></el-input>
      </el-form-item>
      <el-form-item label="是否下架">
        <el-select v-model="searchForm.isDelete"
                   placeholder="请选择是否下架">
          <el-option label="请选择是否下架"
                     value=""></el-option>
          <el-option label="已发布"
                     value="false"></el-option>
          <el-option label="已下架"
                     value="true"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="getList">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading"
              :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="name"
                       label="商品名称"
                       width="280">
      </el-table-column>
      <el-table-column label="商品图片"
                       width="150">
        <template slot-scope="scope">
          <el-popover trigger="hover"
                      placement="top">
            <img :src="scope.row.image"
                 width="250">
            <div slot="reference">
              <el-tag size="medium">商品图片</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="price"
                       label="成本价"
                       width="100">
      </el-table-column>
      <el-table-column prop="salesPrice"
                       label="销售价"
                       width="100">
      </el-table-column>
      <el-table-column label="库存"
                       width="150">
        <template slot-scope="scope">
          <span>{{scope.row.storage}}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品参数"
                       width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover"
                      placement="top">
            <p v-for="(item,index) in scope.row.parameter"
               :key="index">{{item.name}}：{{item.value}}</p>
            <div slot="reference">
              <el-tag size="medium">商品参数</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="supplierId.name"
                       label="供应商"
                       width="180">
      </el-table-column>
      <el-table-column label="是否下架"
                       width="100">
        <template slot-scope="scope">
          <span>{{scope.row.isDelete|formatIsDelete}}</span>
        </template>
      </el-table-column>
      <el-table-column label="发布时间">
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
                     @click="handleDetail(scope.row._id)">查看详情</el-button>
          <el-button v-if="scope.row.isDelete"
                     size="mini"
                     type="success"
                     @click="handleRecovery(scope.row._id)">上架</el-button>
          <el-button v-else
                     size="mini"
                     type="danger"
                     @click="handleDelete(scope.row._id)">下架</el-button>
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
import { getProductList, deleteProduct, recoveryProduct } from '@/api/product'
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex'
export default {
  name: 'ProductList',
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
        isDelete: '',
        keywords: ''
      }
    }
  },
  methods: {
    handleRecovery (_id) {
      this.$confirm('确认上架此商品?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        recoveryProduct({ _id }).then(res => {
          this.$message({
            type: 'success',
            message: '上架成功!'
          })
          this.getList()
        })
      }).catch(() => { })
    },
    handleDelete (_id) {
      this.$confirm('确认下架此商品?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteProduct({ _id }).then(res => {
          this.$message({
            type: 'success',
            message: '下架成功!'
          })
          this.getList()
        })
      }).catch(() => { })
    },
    handleDetail (id) {
      this.$router.push({ path: `/product/detail/${id}` })
    },
    getList () {
      this.listLoading = true
      getProductList({ ...this.listQuery, ...this.searchForm, user: this.user }).then(res => {
        this.tableData = res.data.list
        this.listQuery = res.data.listQuery
        this.listLoading = false
      })
    }
  },
  created () {
    this.getList()
  },
  computed: {
    ...mapGetters(['user'])
  },
  filters: {
    formatIsDelete (value) {
      if (value) {
        return '已下架'
      } else {
        return '已发布'
      }
    }
  },
  components: { Pagination }
}
</script>
