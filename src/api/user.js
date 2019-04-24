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

export function getMessage (data) {
  return axios({
    url: '/message',
    method: 'post',
    data
  })
}

export function applyAgent (data) {
  return axios({
    url: '/agent/apply',
    method: 'post',
    data
  })
}

export function applySupplier (data) {
  return axios({
    url: '/supplier/apply',
    method: 'post',
    data
  })
}

export function getSupplierList (data) {
  return axios({
    url: '/supplier/allList',
    method: 'get'
  })
}
