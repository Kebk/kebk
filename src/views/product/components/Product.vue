<template>
  <div class="product"
       @click="handleClick">
    <img class="product-img"
         :src="item.image">
    <p class="product-name"
       :title="item.name">{{item.name}}</p>
    <p class="product-price">￥{{item.salesPrice}}</p>
    <p class="product-shop">{{item.supplierId.name}}</p>
    <div style="text-align:center">
      <el-button type="primary"
                 size="small">查看详情</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick () {
      this.$router.push({ path: '/product/detail', query: { _id: this.item._id } })
    }
  }
}
</script>

<style scoped lang="stylus">
.product
  padding-bottom 20px
  &:hover
    box-shadow 1px 1px 8px rgba(0, 0, 0, 0.2)
    background-color #f4f0ea
  .product-img
    width 100%
    height 250px
    margin-bottom 20px
  .product-name
    padding 0 10px
    margin-bottom 10px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
  .product-price
    margin-bottom 10px
    color #d4282d
    text-align center
    font-size 16px
  .product-shop
    margin-bottom 10px
    padding-right 10px
    text-align center
    // text-decoration underline
</style>
