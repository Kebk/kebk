import './iconfont.js'
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 开发组件 https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6
Vue.use({
  install: Vue => {
    Vue.component('SvgIcon', SvgIcon)
  }
})
