<template>
  <div class="address">
    <div class="address-header">
      <div class="header-text">
        已保存收货地址(地址最多20条)
      </div>
      <div class="header-link">
        <router-link to="1">+新增地址</router-link>
      </div>
    </div>
    <div class="address-table">
      <table class="tableborder">
        <tbody>
        <tr class="tableTitle">
          <th class="title1">收货人</th>
          <th class="title2">地址</th>
          <th class="title3">联系方式</th>
          <th class="title4">操作</th>
          <th class="space"></th>
        </tr>
        </tbody>
        <tbody>
        <tr class="userInfo" v-for="(item,index) of infoList"
            :key="index">
          <td class="info1">{{item.userName}}</td>
          <td class="info2">{{item.userAddress}}</td>
          <td class="info3">{{item.userTel}}</td>
          <td class="info4">
            <router-link to="1">编辑</router-link>
            <router-link class="shanchu" to="2">删除</router-link>

          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "address",
    data() {
      return {
        infoList: [{
          id: "1",
          userName: "张聪",
          userAddress: "浙江省杭州市江干区四季青街道水湘人家西苑4幢1单元2002",
          userTel: "137****0464"
        }, {
          id: "2",
          userName: "张梦婷",
          userAddress: "浙江省丽水市莲都区白云街道学院路一号",
          userTel: "159****1102"
        }]
      }
    }

  }
</script>

<style scoped lang="stylus">
  .address
    width 890px

    .address-header
      width 890px
      height 21px

      .header-text
        float left
        font-size 14px
        color #333f

      .header-link
        float right

        a
          color $blue
          font-size 14px

    .address-table
      border 1px solid #e8e8e8
      margin 20px 0
      font-size 14px
      font-weight 400

      .tableTitle
        width 750px
        background #f5f5f5
        font-weight 400
        height 43px
        border-bottom 1px solid #e8e8e8
        color #999
        font-size 14px

        .title1
          width 120px
          text-align center

        .title2
          width 320px
          text-align center

        .title3
          width 170px
          text-align center

        .title4
          width 140px
          text-align center
        .space
          width 140px


      .userInfo
        height 100px
        .info1
          text-align center
        .info2
          text-align left
          padding-left 10px
        .info3
          text-align center
        .info4
          text-align center
          width 140px
          a
            color #69c
          .shanchu
            margin-left 10px

</style>
