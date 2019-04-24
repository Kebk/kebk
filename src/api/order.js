import axios from '@/utils/http.js'

export function startOrder (data) {
  return axios({
    url: '/order/create',
    method: 'post',
    data
  })
}

export function payOrder (data) {
  return axios({
    url: '/order/pay',
    method: 'post',
    data
  })
}

export function getOrder (params) {
  return axios({
    url: '/order/detail',
    method: 'get',
    params
  })
}
