import Vue from 'vue'
import Router from 'vue-router'
// Layout
import HomeLayout from './views/layout/HomeLayout.vue'
import CommonLayout from './views/layout/CommonLayout.vue'
import UserLayout from './views/layout/UserLayout.vue'

Vue.use(Router)

// component: () => import(/* webpackChunkName: "errorPage" */ './views/home/home.vue')

/**
 * title 导航栏标题
 * navActive 激活的导航栏名称
 * requireAuth 需要登录后进行访问
 */
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: HomeLayout,
      redirect: '/home',
      meta: { navActive: 'home' },
      children: [
        {
          path: 'home',
          name: 'homeIndex',
          component: () => import('./views/home/home.vue')
        }
      ]
    },
    {
      path: '/register',
      component: CommonLayout,
      meta: { title: '欢迎注册' },
      children: [
        {
          path: '',
          name: 'register',
          component: () => import('./views/home/register.vue')
        }
      ]
    },
    {
      path: '/login',
      component: CommonLayout,
      meta: { title: '欢迎登录' },
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('./views/home/login.vue')
        }
      ]
    },
    {
      path: '/product',
      component: HomeLayout,
      redirect: '/product/index',
      meta: { navActive: 'product' },
      children: [
        {
          path: 'index',
          name: 'productIndex',
          component: () => import('./views/product/index.vue')
        },
        {
          path: 'list',
          name: 'productList',
          component: () => import('./views/product/list.vue')
        },
        {
          path: 'detail',
          name: 'productDetail',
          component: () => import('./views/product/detail.vue')
        }
      ]
    },
    {
      path: '/agent',
      component: CommonLayout,
      redirect: '/agent/start',
      meta: { requireAuth: true, title: '代理中心' },
      children: [
        {
          path: 'start',
          name: 'agentStart',
          component: () => import('./views/agent/agentStart.vue')
        },
        {
          path: 'applySup',
          name: 'applySup',
          component: () => import('./views/agent/applySup.vue')
        },
        {
          path: 'applyAgent',
          name: 'applyAgent',
          component: () => import('./views/agent/applyAgent.vue')
        }
      ]
    },
    {
      path: '/user',
      component: UserLayout,
      redirect: '/user/index',
      meta: { requireAuth: true, title: '个人中心' },
      children: [
        {
          path: 'index',
          name: 'userIndex',
          component: () => import('./views/user/index.vue')
        },
        {
          path: 'address',
          name: 'userAddress',
          component: () => import('./views/user/address.vue')
        },
        {
          path: 'information',
          name: 'userInfo',
          component: () => import('./views/user/information.vue')
        },
        {
          path: 'order',
          name: 'userOrder',
          component: () => import('./views/user/order.vue')
        }
      ]
    },
    {
      path: '*',
      component: () => import('./views/error/404.vue')
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
