<template>
  <div class="dashboard">
    <el-row style="margin-bottom:10px">今日概况</el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="data-container">
          <p class="number">{{statistics.user.today}}</p>
          <p class="title">今日新增用户数</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="data-container">
          <p class="number">{{statistics.product.today}}</p>
          <p class="title">今日新增商品数</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="data-container">
          <p class="number">{{statistics.order.today}}</p>
          <p class="title">今日订单数</p>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin:50px 0 10px 0">昨日数据</el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="data-container">
          <p class="number">{{statistics.user.yesterday}}</p>
          <p class="title">昨日新增用户数</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="data-container">
          <p class="number">{{statistics.product.yesterday}}</p>
          <p class="title">昨日新增商品数</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="data-container">
          <p class="number">{{statistics.order.yesterday}}</p>
          <p class="title">昨日订单数</p>
        </div>
      </el-col>
    </el-row>
    <!-- <DataChart class="charts" height="350px"
               width="100%" /> -->
  </div>
</template>

<script>
import { getStatistics } from '@/api/home'
import { mapGetters } from 'vuex'
// import DataChart from './components/DataChart'
export default {
  name: 'Dashboard',
  data () {
    return {
      statistics: {
        user: {},
        supplier: {},
        product: {},
        order: {}
      }
    }
  },
  created () {
    getStatistics().then(res => {
      this.statistics = res.data
    })
  },
  computed: {
    ...mapGetters(['user'])
  }
  // components: { DataChart }
}
</script>

<style scoped lang="stylus">
.charts
  background #f0f2f5
.data-container
  width 80%
  padding 40px 0
  background #eee
  text-align center
  border-radius 5px
  .number
    font-size 24px
    margin-bottom 10px
  .title
    font-size 16px
</style>
