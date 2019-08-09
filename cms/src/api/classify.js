import axios from '@/utils/http.js'

export function getClassifyList (params) {
  return axios({
    url: '/classify/list',
    method: 'get',
    params
  })
}

export function createClassify (data) {
  return axios({
    url: '/classify/create',
    method: 'post',
    data
  })
}

export function deleteClassify (data) {
  return axios({
    url: '/classify/delete',
    method: 'post',
    data
  })
}

export function editClassify (data) {
  return axios({
    url: '/classify/edit',
    method: 'post',
    data
  })
}

export function getAllClassifyList () {
  return axios({
    url: '/classify/alllist',
    method: 'get'
  })
}
