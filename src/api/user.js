import axios from '@/utils/http.js'

const user = {
  test (params) {
    return axios.post('/user/register')
  }
}

export default user
