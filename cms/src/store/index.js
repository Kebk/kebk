import Vue from 'vue'
import Vuex from 'vuex'

import routes from './modules/routes'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    routes,
    user
  },
  getters
})

export default store
