<template>
  <div class="imgDetails">
    <a href="javascript:;"
       class="image-container">
      <img :src="data.img">
    </a>
    <div class="price">
      <span>${{data.price}}</span>
    </div>
    <a href="javacsript:;"
       class="img-name"
       :title="data.title">{{data.name}}</a>
    <div class="shop">
      <a href="javascript:;">{{data.shop}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
.imgDetails
  width 240px
  padding 9px 9px 15px
  border 1px solid #ededed
  transition box-shadow 0.2s
  &:hover
    box-shadow 0 0 2px 2px #f8f8f8
  .image-container
    display block
    width 240px
    height 240px
    img
      width 100%
      height 100%
  .price
    margin 5px 0 5px
    color #e4393c
    font-size 24px
  .img-name
    color #3d3d3d
    font-size 14px
    overflow hidden
    text-overflow ellipsis
    display -webkit-box
    -webkit-box-orient vertical
    -webkit-line-clamp 2
    transition all 2s
    &:hover
      text-decoration underline
  .shop
    margin-top 5px
    a
      color #6c757d
      text-decoration underline
</style>
