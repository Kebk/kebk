import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/home.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ './views/shop.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ './views/product.vue')
  },
  {
    path: '/mime',
    name: 'mime',
    component: () => import(/* webpackChunkName: "mime" */ './views/mime.vue')
  }
  ]
})
