<template>
  <div class="index">
    <div class="box-left">
      <div class="user-img">
        <img src="//yanxuan.nosdn.127.net/c3a03895c73694d922310c76e4915cdb.png?imageView&thumbnail=76x76&quality=95">
      </div>
      <div class="user-name">yantang</div>
    </div>
    <div class="box-right">
      <ul class="right-list">
        <li class="index-list"
            v-for="(items,index) of indexList"
            :key="index">
          {{items.text}}
          <router-link v-for="(item,index) of items.children"
                       :key="index"
                       :to="item.path">{{item.cldtext}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        indexList: [
          {
            id: '1',
            text: '我的红包',
            children: [
              {
                cldtext: '￥0.00',
                path: '1'
              }
            ]
          },{
            id: '2',
            text: '反馈金',
            children: [
              {
                cldtext: '￥0.00',
                path: '2'
              }
            ]
          },{
            id: '3',
            text: '可兑返利',
            children: [
              {
                cldtext: '￥0.00',
                path: '3'
              }
            ]
          },{
            id: '4',
            text: '优惠券',
            children: [
              {
                cldtext: '0张',
                path: '4'
              }
            ]
          },{
            id: '5',
            text: '我的积分',
            children: [
              {
                cldtext: '68',
                path: '5'
              }
            ]
          },{
            id: '6',
            text: '礼品卡',
            children: [
              {
                cldtext: '￥0.00',
                path: '6'
              }
            ]
          },{
            id: '7',
            text: '待领礼包',
            children: [
              {
                cldtext: '6个',
                path: '7'
              }
            ]
          }]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .index
    width 890px
    border 1px solid #eaeaea
    height 180px
    background url("http://yanxuan.nosdn.127.net/74349c4a78edd25ef03b6aac1db45a8e.png") no-repeat
    padding 40px 0

    .box-left
      float left
      width 345px
      height 150px
      padding-left 60px
      margin-top 30px

      .user-img
        margin-left 40px
        float left

      .user-name
        float left
        margin-left 50px
        line-height 70px
        font-size 20px

    .box-right
      float left
      padding-left 50px
      border-left 1px dashed rgba(180, 160, 120, .38)
      height 180px
      width 434px
      color #333
      font-size 12px
      .index-list
        float left
        width 210px
        margin-bottom 30px
        line-height 22px
        font-size 14px
        a
          margin-left 20px
          color black


</style>
