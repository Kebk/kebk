<template>
  <div class="layout">
    <MainHeader />
    <CommonHeader />
    <div class="container">
      <div class="kebk-container">
        <div class="content-left">
          <div class="left-title">全部功能</div>
          <ul class="left-list">
            <li class="nav-list"
                v-for="(item, index) of navList"
                :key="index">
                <router-link  :to="item.path">{{item.text}}</router-link>
            </li>
          </ul>
        </div>
        <div class="content-right">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <MainBottom />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainBottom from './components/MainBottom.vue'
import CommonHeader from './components/CommonHeader.vue'
export default {
  name: 'CommonLayout',
  data () {
    return {
      navList: [
        {
          path: '1',
          text: '我的购物车'
        },
        {
          path: '2',
          text: '已买到的宝贝'
        },
        {
          path: '3',
          text: '我的收藏'
        },
        {
          path: '4',
          text: '我的足迹'
        },
        {
          path: '5',
          text: '退款维权'
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
      margin 0 auto
      .content-left
        float left
        width 178px
        border 1px solid #eaeaea
        margin-right 20px
        margin-top 20px
        padding-top 20px
        .left-title
          text-align center
          color #bd0200
          font-size 20px
          margin-bottom 4px
        .left-list
          line-height 20px
          li
            font-size 16px
            line-height 50px
            text-align center
            a
              padding 0 9px
              color black
              &:hover
                color #f10215
                text-decoration underline
      .content-right
        padding-top 20px

</style>
