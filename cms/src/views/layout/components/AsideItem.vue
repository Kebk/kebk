<template>
  <div class="aside-item">
    <el-menu-item v-if="route.children.length===0||route.children.length===1"
                  :index="route.redirect?route.redirect:route.path">
      <SvgIcon style="margin-right:16px"
               :icon="route.meta.icon" />
      <span slot="title">{{route.meta.title}}</span>
    </el-menu-item>

    <el-submenu v-else
                :index="route.path">
      <template slot="title">
        <SvgIcon style="margin-right:16px"
                 :icon="route.meta.icon" />
        <span slot="title">{{route.meta.title}}</span>
      </template>
      <el-menu-item v-for="item in route.children"
                    :key="item.path"
                    :index="route.path + '/' + item.path">{{item.meta.title}}</el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'AsideItem',
  props: {
    route: { type: Object, required: true }
  }
}
</script>
