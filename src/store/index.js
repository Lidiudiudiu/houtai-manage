import { createStore } from 'vuex'
import { getinfo } from '~/api/manager.js'
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            user: {}
        }
    },
    mutations: {
        SET_USERINFO(state, userinfo) {
            state.user = userinfo
        }
    },
    actions: {
        getinfo({ commit }) {
            return new Promise((resolve, reject) => {
                getinfo().then(res => {
                    commit("SET_USERINFO", res)
                    resolve(res)
                }).catch(err => reject(err))
            })
        }
    }
})

export default store