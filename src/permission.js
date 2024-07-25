import router from '~/router'
import { getcookies } from '~/composables/auth'
import { toast } from '~/composables/util'
import store from './store'
router.beforeEach(async (to, from, next) => {
    const token = getcookies();
    if (!token && to.path != '/login') {
        toast('请先登录', 'error')
        return next({ path: '/login' })
    }

    if (token && to.path == '/login') {
        toast('请勿重复登录', 'error')
        return next({ path: from.path ? from.path : '/' })
    }
    //如果登录，请求用户信息，存储在vuex中
    if (token) {
        await store.dispatch('getinfo')
    }

    next()

})