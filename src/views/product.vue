<template>
  <div class="product">
    <MainHeader />
    <NavHeader />
    <div class="sort-container"></div>
    <div class="kebk-container">
      <div class="product-container clearfix">
        <Product class="product-box"
                 v-for="(item,index) in goodsList"
                 :key="index"
                 :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/mainHeader.vue'
import NavHeader from '@/components/navHeader.vue'
import Product from '@/components/product.vue'
export default {
  name: 'product',
  data: function () {
    return {
      goodsList: [
        {
          name: '【春节不打烊，电视送到家】下单减400，8499元抢购！买即送叮咚音箱，数量有限，送完即止！2.5+32GB大存储，MEMC立体防抖更多爆款，点击进入',
          title: '【春节不打烊，电视送到家】下单减400，8499元抢购！买即送叮咚音箱，数量有限，送完即止！2.5+32GB大存储，MEMC立体防抖更多爆款，点击进入',
          img: 'https://img14.360buyimg.com/n7/jfs/t1/6605/9/2451/113789/5bd159b5E8036ce07/a586d0cbaaf754ec.jpg',
          price: 8999,
          shop: 'AOC京东自营旗舰店'
        },
        {
          name: '年货节逛遍整条GAI,还选AOC!出彩4K，还原本色！领券下单，立减200元！点入领券》》',
          title: '年货节逛遍整条GAI,还选AOC!出彩4K，还原本色！领券下单，立减200元！点入领券》》',
          img: 'https://img11.360buyimg.com/n7/jfs/t1/6134/10/4000/295624/5bd7c650Eee34681d/e2a45eba33b7ee39.jpg',
          price: 2289,
          shop: 'AOC京东自营旗舰店'
        }
      ]
    }
  },
  components: {
    MainHeader, NavHeader, Product
  }
}
</script>

<style scoped lang="stylus">
.product-box
  float left
  margin 10px 10px 0 0
</style>
