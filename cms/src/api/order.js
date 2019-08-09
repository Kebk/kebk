import axios from '@/utils/http.js'

export function getOrderList (params) {
  return axios({
    url: '/order/list',
    method: 'get',
    params
  })
}

export function getOrderDetail (data) {
  return axios({
    url: '/order/detail',
    method: 'post',
    data
  })
}

export function deliveryOrder (data) {
  return axios({
    url: '/order/delivery',
    method: 'post',
    data
  })
}

export function cancelOrder (data) {
  return axios({
    url: '/order/cancel',
    method: 'post',
    data
  })
}
