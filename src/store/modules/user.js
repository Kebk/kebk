export default {
  state: {
    user: JSON.parse(sessionStorage.getItem('user')),
    token: sessionStorage.getItem('token')
  },
  mutations: {
    LOGIN (state, payload) {
      state.user = payload.user
      sessionStorage.setItem('user', JSON.stringify(payload.user))
      state.token = payload.token
      sessionStorage.setItem('token', payload.token)
    },
    LOGOUT (state, payload) {
      state.user = null
      state.token = null
      sessionStorage.clear('user')
      sessionStorage.clear('token')
    }
  },
  actions: {}
}
