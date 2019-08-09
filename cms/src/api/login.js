import axios from '@/utils/http.js'

export function loginByPhone (data) {
  return axios({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function getMessage (data) {
  return axios({
    url: '/message',
    method: 'post',
    data
  })
}
