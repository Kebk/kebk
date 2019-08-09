import axios from '@/utils/http.js'

/* user */
export function getUserList (params) {
  return axios({
    url: '/user/list',
    method: 'get',
    params
  })
}

export function getUserById (data) {
  return axios({
    url: '/user/detail',
    method: 'post',
    data
  })
}

export function lockUser (data) {
  return axios({
    url: '/user/lock',
    method: 'post',
    data
  })
}

export function createUser (data) {
  return axios({
    url: '/user/create',
    method: 'post',
    data
  })
}

/* agent */
export function getAgentList (params) {
  return axios({
    url: '/agent/list',
    method: 'get',
    params
  })
}

export function verifyAgent (data) {
  return axios({
    url: '/agent/verify',
    method: 'post',
    data
  })
}

/* supplier */
export function getSupplierList (params) {
  return axios({
    url: '/supplier/list',
    method: 'get',
    params
  })
}

export function verifySupplier (data) {
  return axios({
    url: '/supplier/verify',
    method: 'post',
    data
  })
}
