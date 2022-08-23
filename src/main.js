import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/index.css'
import router from "@/router";
import { createPinia } from 'pinia'

const adminStore = createPinia()
const app = createApp(App)

app.use(router)
app.use(adminStore)

app.mount('#app')
