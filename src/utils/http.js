import axios from "axios";
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/user";
import router from '@/router'
import 'element-plus/theme-chalk/el-message.css'


const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 20000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res, e => {
    ElMessage({
        type: 'warning',
        message: e.response.data.msg
    })
    const userStore = useUserStore()

    if (e.response.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }

    return Promise.reject(e)

})
export default httpInstance