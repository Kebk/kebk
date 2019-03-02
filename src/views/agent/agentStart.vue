<template>
  <div class="kebk-container">
    <p class="tips">请选择您需要申请的代理类型 </p>
    <div class="header clearfix">
      <router-link class="type" to="/agent/applySup"><i class="iconfont">&#xe68c;</i><p>供应商</p></router-link>
      <router-link class="type" to="/agent/applyAgent"><i class="iconfont">&#xe614;</i><p>代理</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'agent-start'
}
</script>

<style scoped lang="stylus">
.kebk-container
  padding 100px 0
  text-align center
  .tips
    line-height 100px
    font-size 24px
  .header
    a
      float left
      width 50%
      padding 200px 0
      font-size 24px
      color #000
      cursor pointer
      transition all .2s
      &:hover
        background #eee
      i
        display block
        font-size 48px
</style>
