<template>
  <div class="common-header">
    <div class="kebk-container">
      <div class="left">
        <router-link to="/"
                     class="pull-left logo">KEBK</router-link>
        <div class="pull-left">
          <span class="title">{{title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  data () {
    return { title: '' }
  },
  created () {
    this.title = this.$route.matched[0].meta.title
  }
}
</script>

<style scoped lang="stylus">
.common-header
  height 100px
  box-shadow 0 0 3px 0 rgba(0, 0, 0, 0.2)
  .kebk-container
    height 100px
    margin 0 auto
    .left
      float left
      height 100px
      line-height 100px
    .logo
      color #000
      font-size 36px
    .title
      margin-left 20px
      padding-left 17px
      font-size 18px
      border-left 1px solid #000
</style>
