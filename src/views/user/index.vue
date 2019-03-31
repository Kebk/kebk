<template>
  <div class="buyerCenter clearfix">
    <div class="main-content">
      <Sidebar/>
      <div class="kebk-container">
        <div class="content-right">
          <div class="buyer-information">
            <div class="information-content">
              <div class="touxiang">头像</div>
              <div class="account">某某某（账号）</div>
              <div class="buyer-address">我的收获地址</div>
            </div>
          </div>
          <div class="buyer-box">
            <ul class="box-list clearfix">
              <li class="state-list"
                  v-for="(item, index) of stateList"
                  :key="index">
                <router-link :to="item.path">{{item.text}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'buyerCenter',
  data () {
    return {
      stateList: [
        {
          path: '1',
          text: '待付款'
        },
        {
          path: '2',
          text: '待发货'
        },
        {
          path: '3',
          text: '待收货'
        },
        {
          path: '4',
          text: '待评价'
        },
        {
          path: '5',
          text: '退款'
        }
      ]
    }
  },
  created () {
    this.navActive = this.$route.meta.nav
  },
  components: {
    Sidebar
  }
}
</script>

<style scoped lang="stylus">
.main-content
  width 100%
  .kebk-container
    width 1140px
    margin 0 auto
    .content-right
      float left
      width 940px
      .buyer-information
        width 938px
        border 1px solid gray
        height 120px
        background #f5f8fa
        .information-content
          line-height 80px
          width 898px
          margin 20px
          .touxiang
            float left
            height 80px
            width 80px
          .account
            float left
            margin-left 10px
          .buyer-address
            float right
      .buyer-box
        border 1px solid gray
        height 100px
        .box-list
          line-height 100px
          li
            float left
            line-height 100px
            font-size 20px
            a
              padding 0 64px
              color #999
              &:hover
                color #f10215
                text-decoration underline
          .state-list
            a
              border-left 1px solid #999
            &:first-child a
              border-left none
</style>
