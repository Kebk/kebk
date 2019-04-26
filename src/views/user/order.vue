<template>
  <div class="order">
    <el-tabs v-model="status"
             @tab-click="handleChangeTab"
             style="margin-bottom:20px">
      <el-tab-pane label="全部订单"
                   name="99"></el-tab-pane>
      <el-tab-pane label="已取消"
                   name="0"></el-tab-pane>
      <el-tab-pane label="待付款"
                   name="1"></el-tab-pane>
      <el-tab-pane label="待发货"
                   name="2"></el-tab-pane>
      <el-tab-pane label="已发货"
                   name="3"></el-tab-pane>
      <el-tab-pane label="已完成"
                   name="4"></el-tab-pane>
    </el-tabs>
    <div v-if="orderList.length===0"
         class="order-list">暂无订单</div>
    <div class="order-list">
      <div class="order-detail"
           v-for="order in orderList"
           :key="order._id">
        <div class="header">
          <span>下单时间：{{order.createTime|dataFormat}}</span>
          <span style="margin-left:50px;">订单状态：{{order.status|statusFileter}}</span>
        </div>
        <div class="body">
          <div class="product-container">
            <img :src="order.productId.image">
            <span class="name">{{order.productId.name}}</span>
          </div>
          <div class="price-container">
            <p class="price">￥{{order.total}}</p>
          </div>
          <div class="operation-container">
            <el-button v-if="order.status===1"
                       type="primary"
                       size="small"
                       @click="handleCancel(order._id)">取消订单</el-button>
            <el-button v-if="order.status===1"
                       type="primary"
                       size="small"
                       @click="handlePay(order._id)">付款</el-button>
            <el-button v-if="order.status===3"
                       type="primary"
                       size="small"
                       @click="handleFinish(order._id)">确认收货</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getOrderList, cancelOrder, payOrder, finishOrder } from '@/api/order'
export default {
  name: 'UserOrder',
  data () {
    return {
      status: '99',
      orderList: []
    }
  },
  methods: {
    handleCancel (_id) {
      this.$confirm('确认取消订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        cancelOrder({ _id }).then(res => {
          this.$message({
            type: 'success',
            message: '取消成功!'
          })
          this.getList()
        })
      }).catch(() => { })
    },
    handlePay (_id) {
      this.$confirm('确认付款?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        payOrder({ _id }).then(res => {
          this.$message({
            type: 'success',
            message: '付款成功!'
          })
          this.getList()
        })
      }).catch(() => { })
    },
    handleFinish (_id) {
      this.$confirm('确认收货?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        finishOrder({ _id }).then(res => {
          this.$message({
            type: 'success',
            message: '付款成功!'
          })
          this.getList()
        })
      }).catch(() => { })
    },
    handleChangeTab (tab, event) {
      this.status = tab.name
      this.getList()
    },
    getList () {
      const params = {
        userId: this.user._id,
        status: this.status
      }
      getOrderList(params).then(res => {
        this.orderList = res.data.list
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
    statusFileter: function (value) {
      switch (value) {
        case 0:
          return '已取消'
        case 1:
          return '待付款'
        case 2:
          return '待发货'
        case 3:
          return '已发货'
        case 4:
          return '已完成'
        default:
          return ''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.order-list
  width 890px
  .order-detail
    width 100%
    margin-bottom 20px
    border 1px solid #e8e8e8
    .header
      width 100%
      padding 0 20px
      line-height 40px
      background #f5f5f5
      box-sizing border-box
    .body
      display flex
      align-items center
      padding 20px
      .product-container
        display flex
        flex 4
        border-right 1px solid #e5e5e5
        img
          width 100px
          height 100px
        .name
          width 350px
          margin-left 10px
          line-height 100px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
      .price-container
        flex 1
        line-height 100px
        border-right 1px solid #e5e5e5
        .price
          padding 0 20px
          font-size 16px
          font-weight bold
          text-align center
      .operation-container
        flex 2
        text-align center
</style>
