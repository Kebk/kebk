import { asyncRoutes } from '@/router.js'

// 过滤与身份不匹配的路由
function hasPremission (role, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(role)
  }
}

// 过滤hidden为true的路由
function filterRouter (routes, role) {
  let res = []
  routes.forEach(route => {
    if (hasPremission(role, route)) {
      if (route.hidden) return
      route.children = route.children.filter(item => {
        if (!item.hidden) return item
      })
      res = res.concat(route)
    }
  })
  return res
}

const aside = {
  state: {
    routes: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routes = [].concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const { role } = data
        let accessedRouters = filterRouter(asyncRoutes, role)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default aside
