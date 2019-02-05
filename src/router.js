import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/home.vue'),
      meta: {
        nav: 'home'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ './views/product.vue'),
      meta: {
        nav: 'product'
      }
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import(/* webpackChunkName: "rank" */ './views/rank.vue'),
      meta: {
        nav: 'rank'
      }
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "errorPage" */ './views/404.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "loginPage" */ './views/login.vue')
    }

  ]
})
