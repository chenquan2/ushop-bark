import { seckillList} from '../../request/seckill'

export default {
    namespaced: true,
    state: {
        seckillList: [],
    },
    getters: {

    },
    mutations: {
        setSeckillList(state, list) {
            state.seckillList = list
        }
    },
    actions: {
        getSeckillListAction({ commit }) {
            seckillList().then(res => {
                        commit('setSeckillList', res.list)

                
            })
        }
    }
}