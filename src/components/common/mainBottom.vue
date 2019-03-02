<template>
  <div class="main-bottom">
    <div class="kebk-container clearfix">
      <ul class="msg-container">
        <li><i class="iconfont">&#xe616;</i><span>张聪</span></li>
        <li><i class="iconfont">&#xe609;</i><span>丽水学院</span></li>
        <li><i class="iconfont">&#xe663;</i><span>13773040464</span></li>
        <li><i class="iconfont">&#xe69a;</i><span>heisenberg0519@outlook.com</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-bottom'
}
</script>

<style scoped lang="stylus">
.main-bottom
  background $c-dark
  color $c-white
  .kebk-container
    padding 50px
    .msg-container
      float left
      li
        margin-top 10px
        font-size 16px
        i
          margin-right 9px
</style>
