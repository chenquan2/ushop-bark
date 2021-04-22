import { memberList,memberCount } from '../../request/member'

export default {
    namespaced: true,
    state: {
        memberList: [],
        memberCount: 0
    },
    getters: {

    },
    mutations: {
        setMemberList(state, list) {
            state.memberList = list
        },
        setMemberCount(state, data) {
            state.memberCount = data
        }
    },
    actions: {
        getMemberListAction({ commit }, params) {
            memberList(params).then(res => {
                commit('setMemberList', res.list)
            })
            memberCount().then(res => {
                commit('setMemberCount',res.list[0].total)
            })
        }
    }
}