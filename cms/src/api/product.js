import axios from '@/utils/http.js'

export function publishProduct (data) {
  return axios({
    url: '/product/publish',
    method: 'post',
    data
  })
}

export function getProductList (params) {
  return axios({
    url: '/product/list',
    method: 'get',
    params
  })
}

export function getProductDetail (data) {
  return axios({
    url: '/product/detail',
    method: 'post',
    data
  })
}

export function deleteProduct (data) {
  return axios({
    url: '/product/delete',
    method: 'post',
    data
  })
}

export function recoveryProduct (data) {
  return axios({
    url: '/product/recovery',
    method: 'post',
    data
  })
}
