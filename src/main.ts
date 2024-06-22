import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import App from './App.vue'
import router from './router'
// import echarts from './plugins/echarts/index'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
