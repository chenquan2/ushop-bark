import axios from '../utils/http'

// 管理员登录 data代表请求体
export function memberLogin(data){
    let res = axios.post('/memberlogin',data)
    return res
}

// 管理员列表
export function memberList(params){
    let res = axios.get('/memberlist',{
        params:params
    })
    return res
}

// 添加管理员
export function addMember(data){
    let res = axios.post('/memberadd',data)
    return res
}

// 编辑管理员
export function editMember(data) {
    let res = axios.post('memberedit',data)
    return res
}

// 删除管理员
export function delMember(uid) {
    let res = axios.post('/memberdelete',{uid:uid})
    return res
}

// 管理员总数
export function memberCount(){
    let res = axios.get('/membercount')
    return res
}