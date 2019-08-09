<template>
  <div class="common-header">
    <div class="collapse-btn">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right" style="cursor:pointer">
      <span @click="handleLogout">退出登录</span>
    </div>
    <div class="header-right">
      <span style="margin-right:20px">{{userType}}：{{username}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CommonHeader',
  data () {
    return {
      username: '',
      userType: ''
    }
  },
  methods: {
    handleLogout () {
      this.$router.push('/login')
      this.$store.commit('LOGOUT')
    }
  },
  mounted () {
    this.username = '' || this.user.username
    if (this.user.userType === 1) {
      this.userType = '代理'
    } else if (this.user.userType === 2) {
      this.userType = '供应商'
    } else if (this.user.userType === 99) {
      this.userType = '管理员'
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped lang="stylus">
.common-header
  width 100%
  height 70px
  background-color #242f42
  color #fff
  .collapse-btn
    padding 0 21px
    float left
    line-height 70px
    cursor pointer
    .el-icon-menu
      font-size 20px
      color #fff
  .logo
    float left
    width 250px
    line-height 70px
  .header-right
    float right
    padding-right 24px
    line-height 70px
</style>
