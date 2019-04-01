import axios from '@/utils/http.js'

export function doLogin (data) {
  return axios({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function doRegister (data) {
  return axios({
    url: '/user/register',
    method: 'post',
    data
  })
}
