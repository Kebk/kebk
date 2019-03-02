<template>
  <div class="agent-index">
    <MainHeader />
    <router-view />
    <MainBottom />
  </div>
</template>

<script>
import MainHeader from '@/components/common/mainHeader.vue'
import MainBottom from '@/components/common/mainBottom.vue'
export default {
  name: 'agent-index',
  components: {
    MainHeader, MainBottom
  }
}
</script>
