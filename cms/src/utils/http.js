import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8700',
  timeout: 5000
})

// const errorHandle = error => {
//   switch (error) {
//     case 401:
//       Message({
//         message: '未登录状态,跳转至登录页',
//         type: 'error',
//         duration: 2 * 1000
//       })
//       break
//     case 403:
//       Message({
//         message: '登录过期 请重新登录',
//         type: 'error',
//         duration: 2 * 1000
//       })
//       break
//     case 404:
//       Message({
//         message: '请求的资源不存在',
//         type: 'error',
//         duration: 2 * 1000
//       })
//       break
//     case 405:
//       Message({
//         message: '请求方式错误',
//         type: 'error',
//         duration: 2 * 1000
//       })
//       break
//     default:
//       Message({
//         message: '服务器繁忙',
//         type: 'error',
//         duration: 2 * 1000
//       })
//   }
// }

// 请求拦截 request
instance.interceptors.request.use(
  config => {
    const token = store.getters.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    console.log('request error: ' + error)
    Promise.reject(error)
  }
)

// 响应拦截器 response 请求服务器成功
instance.interceptors.response.use(
  // 请求接口成功
  response => {
    const result = response.data
    if (result.code === 200) {
      return Promise.resolve(result)
    } else if (result.code === 0) {
      Message({
        message: result.msg,
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject(result)
    } else {
      return Promise.reject(response)
    }
  },
  // 请求接口失败
  error => {
    if (error) {
      Message({
        message: '服务器繁忙',
        type: 'error',
        duration: 2 * 1000
      })
      // console.log(error.response)
      // errorHandle(error.response.status)
      return Promise.reject(error)
    }
  }
)

export default instance
