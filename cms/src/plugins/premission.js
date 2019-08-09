import router from '@/router'
import store from '@/store'

router.beforeEach((to, from, next) => {
  const token = store.getters.token ? store.getters.token : sessionStorage.getItem('token')
  if (token) {
    store.dispatch('GetRole')
    const role = store.getters.role
    store.dispatch('GenerateRoutes', { role })
    next()
  } else {
    if (to.meta.commonView) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
