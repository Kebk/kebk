<template>
  <div class="order-start kebk-container">
    <div class="order-info">
      <el-table class="order-table"
                :data="orderData"
                border
                style="width: 100%">
        <el-table-column label="商品信息"
                         width="400">
          <template slot-scope="scope">
            <div slot="reference">
              <img width="100"
                   :src=" scope.row.productId.image"
                   style="float:left">
              <span style="float:left;margin-left:10px;line-height:100px">{{ scope.row.productId.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="productId.salesPrice"
                         label="单价（￥）"
                         width="180">
        </el-table-column>
        <el-table-column prop="number"
                         label="数量"
                         width="180">
        </el-table-column>
        <el-table-column prop="total"
                         label="小计（￥）">
        </el-table-column>
      </el-table>
      <div class="order-total">
        <div>
          <span class="title">商品合计：</span>
          <span>￥{{totalPrice}}</span>
        </div>
        <div>
          <span class="title">运费：</span>
          <span>￥0</span>
        </div>
        <div>
          <span class="title">应付总金额：</span>
          <span style="color:#d4282d;font-size:20px">￥{{totalPrice}}</span>
        </div>
        <el-button style="margin-top:40px"
                   type="primary"
                   @click="handlePay">点击付款</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrder, payOrder } from '@/api/order'
export default {
  name: 'OrderStart',
  data () {
    return {
      orderData: [],
      totalPrice: 0 // 商品总价
    }
  },
  methods: {
    handlePay () {
      payOrder({ _id: this.$route.query._id }).then(res => {
        this.$message({
          type: 'success',
          message: '成功付款！'
        })
        this.$router.push({ path: '/user/order' })
      })
    }
  },
  created () {
    getOrder({ _id: this.$route.query._id }).then(res => {
      let arr = []
      arr.push(res.data)
      this.orderData = arr
      this.orderData.forEach(obj => {
        this.totalPrice += obj.total
      })
    })
  }
}
</script>

<style scoped lang="stylus">
.order-table>>>.el-table__body tr:hover>td
  background-color #fff !important
.order-table>>>.el-table__body tr.current-row>td
  background-color #fff !important
.order-start
  padding 50px 0
  .order-total
    background #f5f5f5
    padding 20px 40px 40px 30px
    font-size 16px
    .title
      display inline-block
      width 100px
      margin-top 9px
</style>
