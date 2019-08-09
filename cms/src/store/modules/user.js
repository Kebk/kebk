export default {
  state: {
    user: JSON.parse(sessionStorage.getItem('user')),
    token: sessionStorage.getItem('token'),
    role: ''
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
      state.role = ''
      sessionStorage.clear('user')
      sessionStorage.clear('token')
    }
  },
  actions: {
    GetRole ({ commit, state }) {
      const userType = state.user.userType
      if (userType === 99) {
        state.role = 'admin'
      }
      if (userType === 2) {
        state.role = 'supplier'
      }
    }
  }
}
