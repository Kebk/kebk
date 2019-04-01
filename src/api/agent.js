import axios from '@/utils/http.js'

export function applyAgent (data) {
  return axios({
    url: '/agent/apply',
    method: 'post',
    data
  })
}
