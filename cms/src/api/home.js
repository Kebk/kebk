import axios from '@/utils/http.js'

export function getStatistics (params) {
  return axios({
    url: '/admin/statistics',
    method: 'get',
    params
  })
}
