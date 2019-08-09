<template>
  <div class="product-container">
    <div class="kebk-container">
      <div class="product-list clearfix">
        <el-row v-if="goodsList.length===0">暂无商品</el-row>
        <el-row :gutter="20">
          <el-col :span="6"
                  v-for="(item,index) in goodsList"
                  :key="index"
                  style="margin-bottom:50px">
            <Product class="product-box"
                     :item="item" />
          </el-col>
        </el-row>
        <Pagination v-show="listQuery.total>0"
                    :page.sync="listQuery.page"
                    :size.sync="listQuery.pageSize"
                    :total="listQuery.total"
                    @pagination="getList" />
      </div>
    </div>
  </div>
</template>

<script>
import { getProductList } from '@/api/product'
import Product from './components/Product.vue'
import Pagination from './components/Pagination'
export default {
  name: 'ProductIndex',
  data: function () {
    return {
      goodsList: [],
      listQuery: {
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    getList () {
      getProductList(this.listQuery).then(res => {
        this.goodsList = res.data.list
        this.listQuery = res.data.listQuery
      })
    }
  },
  created () {
    this.getList()
  },
  components: { Product, Pagination }
}
</script>

<style scoped lang="stylus">
.product-container
  padding 30px 0 80px
  background #f5f5f5
  .product-list
    padding 30px 40px
    background #fff
</style>
