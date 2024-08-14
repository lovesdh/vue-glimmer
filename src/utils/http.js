import axios from 'axios'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://127.0.0.1:4523/m2/4917162-4574075-default/',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })
    return Promise.reject(e)
})

export default http
