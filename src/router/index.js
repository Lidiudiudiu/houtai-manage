import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Index from '../pages/index.vue'
import About from '../pages/about.vue'
import NotFound from '../pages/404.vue'
//路由规则
const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/:pathMatch(.*)',
        component: NotFound
    }
]

//创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//暴露路由
export default router