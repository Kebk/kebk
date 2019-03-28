import axios from 'axios'
import { Message } from 'element-ui'

const instance = axios.create({
  baseURL: 'http://localhost:8700',
  timeout: 5000
})

// 请求拦截 request
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.token
    // token && (config.headers.Authorization = token)
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
    } else {
      console.log('http:1')
      return Promise.reject(response)
    }
  },
  // 请求接口失败
  error => {
    if (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
)

export default instance
