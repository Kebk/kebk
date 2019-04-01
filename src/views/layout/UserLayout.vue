<template>
  <div class="layout">
    <MainHeader/>
    <CommonHeader/>
    <div class="container">
      <div class="kebk-container clearfix">
        <div class="content-left">
          <div v-for="items in navList">
            <div class="left-title">{{items.name}}</div>
            <ul class="left-list">
              <li class="nav-list"
                  v-for="(item, index) of items.children"
                  :key="index">
                <router-link :to="item.path">{{item.text}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="content-right">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <MainBottom/>
  </div>
</template>

<script>
  import MainHeader from './components/MainHeader.vue'
  import MainBottom from './components/MainBottom.vue'
  import CommonHeader from './components/CommonHeader.vue'

  export default {
    name: 'UserLayout',
    data() {
      return {
        navList: [
          {
            name: '账号管理',
            children: [
              {
                path: '/user/index',
                text: '个人中心'
              }, {
                path: '/user/information',
                text: '账号信息'
              }, {
                path: '/user/address',
                text: '地址管理'
              }
            ]
          }, {
            name: '交易管理',
            children: [
              {
                path: '/user/order',
                text: '订单管理'
              }
            ]
          }
        ]
      }
    },
    components: {
      MainHeader, MainBottom, CommonHeader
    }
  }
</script>

<style scoped lang="stylus">
  .layout
    height 100%

    .container
      min-height 700px

      .kebk-container
        width 1140px
        margin 20px auto 0

        .content-left
          float left
          width 178px
          border 1px solid #eaeaea
          padding-top 24px
          padding-bottom 24px
          margin-left 20px

          .left-title
            padding-left 40px
            color #333
            font-size 16px
            font-weight bold
            margin-bottom 4px
            margin-top 10px

          .left-list
            line-height 20px

            li
              font-size 14px
              line-height 30px
              padding-left 40px

              a
                color black

                &:hover
                  color $blue


        .content-right
          float left
          margin-left 30px
</style>
