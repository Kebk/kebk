<template>
  <div class="product-detail kebk-container">
    <div class="product-content clearfix">
      <div class="img-container">
        <img class="image"
             :src="detail.image" />
      </div>
      <div class="content-container">
        <h1>{{detail.name}}</h1>
        <div class="content-main">
          <p>
            <span class="title">价格</span>
            <span class="price">￥{{detail.salesPrice}}</span>
          </p>
          <p v-for="(item,index) in detail.parameter"
             :key="index">
            <span class="title">{{item.name}}</span>
            <span class="value">{{item.value}}</span>
          </p>
        </div>
        <el-button type="primary"
                   @click="handleBug">立即购买</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductDetail } from '@/api/product'
import { startOrder } from '@/api/order'
import { mapGetters } from 'vuex'
export default {
  name: 'ProductDetail',
  data () {
    return {
      detail: {}
    }
  },
  methods: {
    handleBug () {
      if (!this.token) {
        this.$message({
          type: 'warning',
          message: '请登录！'
        })
        this.$router.push({ path: '/login' })
      } else {
        const data = {
          userId: this.user._id,
          productId: this.$route.query._id,
          number: 1
        }
        startOrder(data).then(res => {
          this.$router.push({ path: '/order/start', query: { _id: res.data._id } })
        })
      }
    }
  },
  created () {
    getProductDetail({ _id: this.$route.query._id }).then(res => {
      this.detail = res.data
    })
  },
  computed: {
    ...mapGetters(['user', 'token'])
  }
}
</script>

<style scoped lang="stylus">
.product-detail
  padding 30px 0 50px
  .product-content
    .img-container
      float left
      width 428px
      height 428px
      .image
        width 100%
        height 100%
    .content-container
      float left
      width 620px
      margin-left 50px
      .content-main
        width 100%
        padding 20px 10px
        margin 20px 0
        background #f5f3ef
        box-sizing border-box
        .title
          display inline-block
          width 60px
          color #666
        .price
          color #d7282d
          font-size 24px
        .value
          line-height 30px
          color #000
</style>
