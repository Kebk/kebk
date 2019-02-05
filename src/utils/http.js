import axios from 'axios'
// import config from './config'
// import { Loading } from 'element-ui'

const instance = axios.create({
  baseURL: 'http://localhost:8700',
  timeout: 5000
})

// let loadingInstance // 全屏loading动画

const errorHandle = status => {
  switch (status) {
    case 401:
      // 未登录状态,跳转至登录页
      break
    case 403:
      // 登录过期 请重新登录
      break
    // case 404:
    //   // 请求的资源不存在
    //   break
    default:
      console.log('服务器繁忙')
  }
}

// 请求拦截 request
instance.interceptors.request.use(
  config => {
    // loadingInstance = Loading.service({
    //   target: '.container',
    //   lock: true,
    //   text: 'loading...',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // })
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.token
    // token && (config.headers.Authorization = token)
    return config
  },
  error => {
    // loadingInstance.close()
    console.log('request error: ' + error)
    Promise.reject(error)
  }
)

// 响应拦截器 response 请求服务器成功
instance.interceptors.response.use(
  // 请求接口成功
  response => {
    // console.log(response)
    // loadingInstance.close()
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 请求接口失败
  error => {
    // loadingInstance.close()
    // console.log(error.response)
    if (error) {
      errorHandle(error.response.status)
      return Promise.reject(error)
    }
  }
)

export default instance
