<template>
  <div class="main-header">
    <div class="kebk-container">
      <div class="header-left"></div>
      <ul class="header-right clearfix">
        <li>
          <router-link to="login">您好，请登录</router-link>
        </li>
        <li class="header-register">
          <router-link to="register">免费注册</router-link>
        </li>
        <li class="header-list"
            v-for="(item, index) of headerList"
            :key="index">
          <router-link :to="item.path">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainHeader',
  data () {
    return {
      headerList: [{
        path: '1',
        text: '卖家中心'
      }, {
        path: '2',
        text: '买家中心'
      }, {
        path: '3',
        text: '买家建议'
      }, {
        path: '4',
        text: '联系客服'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
.main-header
  height 30px
  background $c-light
  .kebk-container
    height 30px
    .header-left
      float left
    .header-right
      float right
      li
        float left
        line-height 30px
        a
          color #999
          margin-left 9px
          padding-left 9px
        &:hover
          color $c-hover
          text-decoration underline
      .header-register a
        color $c-hover
      .header-list a
        border-left 1px solid #999
</style>
