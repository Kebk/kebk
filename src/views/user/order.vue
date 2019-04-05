<template>
  <div class="order">
    <div class="order-header">
      <div class="header-left">
        <ul class="header-title">
          <li class="titleName"
              v-for="(item,index) of titleList"
              :key="index">
            <router-link :to="item.path">{{item.text}}</router-link>
          </li>
        </ul>
      </div>
      <div class="header-right">
        <input type="text" class="header-input" placeholder="输入商品名称或订单号搜索">
        <input type="submit" class="header-button" value="搜索">
      </div>
    </div>
    <div class="order-info">
      <table class="order-table">
        <tbody class="tableBody">
          <tr class="table-header">
            <th>
              <span class="time">
                <span>下单时间: </span>
                <span>2019-02-14 17:52:54</span>
              </span>
              <span class="number">
                <span>订单号：</span>
                <span>75625474</span>
                <router-link :to="1" class="delete-icon"></router-link>
              </span>
            </th>
          </tr>
          <tr class="table-body">
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tbody class="table-content"></tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "order",
    data() {
      return {
        titleList: [
          {
              id:"1",
              path:'/user/order',
              text:"全部订单"
          },{
            id:"2",
            path:'/1',
            text:"待付款"
          },{
            id:"3",
            path:'/1',
            text:"待发货"
          },{
            id:"4",
            path:'/1',
            text:"已发货"
          },{
            id:"5",
            path:'/1',
            text:"待评价"
          }]
      }
    }
  }
</script>

<style scoped lang="stylus">
.order
  width 890px
  .order-header
    margin-bottom 10px
    width 890px
    .header-left
      float left
      .header-title
        height 40px
        border-bottom 2px solid #eaeaea
        list-style none
        li
          float left
          width 110px!important
          padding 10px 0
          font-weight 900
          font-size 18px
          text-align center
          a
            color #333
            border none
            line-height 1
            text-decoration none
            &:hover
              color $blue

    .header-right
      float right
      padding-top 14px
      padding-bottom 6px
      .header-input
        width 240px
        height 26px
        border 1px solid #ddd
        display inline-block
        float left
        padding-left 12px
      .header-button
        width 51px
        height 28px
        margin-left -1px
        border 1px solid #ddd
        border-radius 0
        display inline-block
        float left
  .order-info
    width 890px
    margin-top 30px
    .order-table
      width 890px
      margin-bottom 20px
      border 1px solid #e8e8e8
      .tableBody
        width 890px
        .table-header
          width 890px
          background #f5f5f5
          height 43px
          th
            text-align left
            font-weight 400
            font-size 12px
            .time
              float left
              margin-left 20px
              width 265px
            .number
              float left
              text-align center
              a
                float right
                margin-left 440px
                margin-right 20px
                background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-web/p/20150730/style/img/x1/icon-normal-s33e647f656-a21248af33.png)
                background-repeat no-repeat
                background-position 0 -927px
                height 16px
                width 14px
</style>
