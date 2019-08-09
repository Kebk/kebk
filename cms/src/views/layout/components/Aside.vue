<template>
  <div class="common-aside">
    <el-menu :default-active="$route.path"
             class="el-menu-vertical"
             background-color="#324157"
             text-color="#bfcbd9"
             active-text-color="#20a0ff"
             unique-opened
             router>
      <AsideItem v-for="route in routes"
                 :key="route.path"
                 :route="route" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AsideItem from './AsideItem'
export default {
  name: 'CommonAside',
  computed: {
    ...mapGetters(['routes'])
  },
  components: {
    AsideItem
  }
}
</script>

<style scoped lang="stylus">
.common-aside
  position absolute
  left 0
  top 70px
  bottom 0
  color #fff
  overflow hidden
  .el-menu-vertical
    height 100%
  .el-menu-vertical:not(.el-menu--collapse)
    width 240px
    min-height 400px
.common-aside >>> .aside-item .el-submenu .el-menu, .common-aside >>> .el-submenu .el-menu-item
  background-color $subMenuBg !important
  &:hover
    background-color $menuHover !important
.common-aside >>> .is-active .el-submenu__title
  color #f4f4f5 !important
</style>
