import axios from 'axios'
import { useMessage } from 'naive-ui'
import { getToken } from "@/utils/auth";



// 创建axios实例
const service = axios.create({
    // baseURL: 'http://192.168.1.69:5000',
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 80000, // 请求超时时间
    withCredentials: true,
    // crossDomain: true
})
// request拦截器
service.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        config.headers['Content-Type'] = 'application/Json'
        return config
    },
    error => {
        Promise.reject(error)
    }
)
// response 拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        const message = useMessage()
        // 兼容blob下载出错Json提示
        if (error.response.data instanceof Blob && error.response.data.type.toLowerCase().indexOf('Json') !== -1) {
            const reader = new fileReader()
            reader.readAsText(error.response.data, 'utf-8')
            reader.onload = function (e) {
                const errorMsg = JSON.parse(reader.result).message
                message.error(errorMsg)
            }
        } else {
            let code = 0
            try {
                code = error.response.data.status
            } catch (e) {
                if (error.toString().indexOf('Error: timeout') !== -1) {
                    message.error('网络请求超时')
                    return Promise.reject(error)
                }
            }
            if (code) {
                if (code === 401) {

                } else if (code === 403) {
                } else {
                    const errorMsg = error.response.data.message
                    if (errorMsg !== undefined) {
                        message.error(errorMsg)
                    }
                }
            } else {
                message.error('接口请求失败')
            }
        }
        return Promise.reject(error)
    }
)
export default service
