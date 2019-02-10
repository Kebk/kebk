import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "homePage" */ './views/home.vue'),
      meta: {
        nav: 'home'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import(/* webpackChunkName: "homePage" */ './views/product.vue'),
      meta: {
        nav: 'product'
      }
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import(/* webpackChunkName: "homePage" */ './views/rank.vue'),
      meta: {
        nav: 'rank'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "homePage" */ './views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "registerPage" */ './views/register.vue')
    },
    {
      path: '/mime',
      name: 'mime',
      component: () => import(/* webpackChunkName: "userPage" */ './views/user/mime.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "errorPage" */ './views/error/404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // TODO:根据是否需要权限 是否登录跳转到相应的页面
    // const token = store.state.token ? store.state.token : sessionStorage.getItem('token')
  } else {
    next()
  }
})

export default router
