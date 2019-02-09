<template>
  <div class="mime">
    <MainHeader />
    <NavHeader />
    <!-- 硬件 整机 店家推荐 -->
    <span>排行榜</span>
  </div>
</template>

<script>
import MainHeader from '@/components/common/mainHeader.vue'
import NavHeader from '@/components/common/navHeader.vue'
export default {
  name: 'rank',
  components: {
    MainHeader, NavHeader
  }
}
</script>

<style>
</style>
