import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      createTime: '2019-02-10T06:35:02.313Z',
      credit: 0,
      isLock: 0,
      level: 0,
      modifyTime: '2019-02-10T06:35:02.000Z',
      password: '123456',
      phone: '123456',
      userType: 0,
      username: 'test',
      __v: 0,
      _id: '5c5fc83a3638d54da4691220'
    }
  },
  getters: {
    userData: state => {
      console.log(state.user)
      let { username, _id } = state.user
      return { username, _id }
    }
  },
  mutations: {},
  actions: {}
})
