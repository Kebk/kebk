import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import './assets/css/iconfont.css'
import './assets/css/reset.css'

// plugin
import './plugin/element'

Vue.prototype.$api = api // axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
