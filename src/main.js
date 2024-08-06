import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

app.use(createPinia())
app.use(router)

app.use(ElementPlus)

app.mount('#app')

//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

//测试接口函数
import { getCategoryAPI } from './apis/testAPI'
getCategoryAPI().then(res=>{
    console.log(res);
})
