import axios from '@/utils/http.js'

export function getProductList (data) {
  return axios({
    url: '/product/list',
    method: 'get',
    data
  })
}

export function getProductDetail (data) {
  return axios({
    url: '/product/detail',
    method: 'post',
    data
  })
}
