import axios from '@/utils/http.js'

const user = {
  verify (params) {
    return axios.post('/user/verify', params)
  },
  register (params) {
    return axios.post('/user/register', params)
  },
  login (params) {
    return axios.post('/user/login', params)
  }
}

export default user
