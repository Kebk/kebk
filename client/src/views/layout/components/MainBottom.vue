<template>
  <div class="main-bottom">
    <div class="kebk-container clearfix">
      <div class="header">KEBK</div>
      <div class="border"></div>
      <div class="info">
        <ul>
          <li>
            <i class="iconfont">&#xe616;</i>
            <span>{{item.name}}</span>
          </li>
          <li>
            <i class="iconfont">&#xe609;</i>
            <span>{{item.school}}</span>
          </li>
          <li>
            <i class="iconfont">&#xe663;</i>
            <span>{{item.phone}}</span>
          </li>
          <li>
            <i class="iconfont">&#xe69a;</i>
            <span>{{item.email}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBottom',
  data () {
    return {
      item: {
        name: '张聪',
        school: '丽水学院',
        phone: '13773040464',
        email: 'heisenberg0519@outlook.com'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.main-bottom
  padding 37px 0
  background #414141
  color #fff
  .kebk-container
    .header
      color #fff
      font-size 24px
      text-align center
    .border
      height 1px
      background-color #4f4f4f
      margin 27px 0
    .info
      color #999
      font-size 12px
      .iconfont
        margin-right 8px
</style>
