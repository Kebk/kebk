import axios from '@/utils/http.js'

const user = {
  find (params) {
    return axios.get('/user', { params })
  },
  register (params) {
    return axios.post('/user/register', params)
  },
  login (params) {
    return axios.post('/user/login', params)
  }
}

export default user
