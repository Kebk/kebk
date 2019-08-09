import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout/layout.vue' // Layout

Vue.use(Router)

/* 静态页面 */
export const staticRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    meta: { commonView: true }
  }
]

/* 侧边栏动态渲染 */
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: '首页', icon: 'dashboard', requireAuth: true, roles: ['admin', 'supplier'] },

    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboard.vue'),
        hidden: true
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    meta: { title: '用户管理', icon: 'user', roles: ['admin'] },
    children: [
      {
        path: 'list',
        name: 'userList',
        component: () => import('@/views/user/list.vue'),
        meta: { title: '用户列表' }
      },
      {
        path: 'create',
        name: 'userCreate',
        component: () => import('@/views/user/create.vue'),
        meta: { title: '创建用户' },
        hidden: true
      },
      {
        path: 'detail/:id',
        name: 'userDetail',
        component: () => import('@/views/user/detail.vue'),
        meta: { title: '用户详情' },
        hidden: true
      }
    ]
  },
  {
    path: '/supplier',
    component: Layout,
    redirect: '/supplier/list',
    meta: { title: '供应商管理', icon: 'supplier', roles: ['admin'] },
    children: [
      {
        path: 'list',
        name: 'supplierList',
        component: () => import('@/views/supplier/list.vue'),
        meta: { title: '供应商列表' }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/list',
    meta: { title: '商品管理', icon: 'nv-fill-product', roles: ['admin', 'supplier'] },
    children: [
      {
        path: 'list',
        name: 'productList',
        component: () => import('@/views/product/list.vue'),
        meta: { title: '商品列表' }
      },
      {
        path: 'publish',
        name: 'productPublish',
        component: () => import('@/views/product/publish.vue'),
        meta: { title: '发布商品' }
      },
      {
        path: 'detail/:id',
        name: 'productDetail',
        component: () => import('@/views/product/detail.vue'),
        meta: { title: '商品详情' },
        hidden: true
      },
      {
        path: 'classify',
        name: 'productClassify',
        component: () => import('@/views/product/classify.vue'),
        meta: { title: '类别管理' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/list',
    meta: { title: '订单管理', icon: 'order', roles: ['admin', 'supplier'] },
    children: [
      {
        path: 'list',
        name: 'orderList',
        component: () => import('@/views/order/list.vue')
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [...staticRoutes, ...asyncRoutes]
})
