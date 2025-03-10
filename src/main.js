import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store/index'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import 'virtual:windi.css'

import './permission.js'

app.mount('#app')
