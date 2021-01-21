// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import axios from 'axios'
// import { getToken, removeToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://127.0.0.1:7001', // api 的 base_url
  baseURL: process.env.NODE_ENV === 'production' ? 'http://www.midawch.com:7001' : window.location.origin + '/api', // api 的 base_url
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: any) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response: any ) => {
    if (response.status === 200 || response.status === 201) {
      if (response.data.code === -1) {
        // removeToken()
        // return false
        return response
      } else {
        return response
      }
    }
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default service
