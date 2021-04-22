import axios from '../utils/http'

// 商品列表
export function seckillList(){
    let res = axios.get('/secklist')
    return res
}

// 添加商品
export function addSeckill(data){
    let res = axios.post('/seckadd',data)
    return res
}

// 编辑商品
export function editSeckill(data) {
    let res = axios.post('/seckedit',data)
    return res
}

// 删除商品
export function delSeckill(id) {
    let res = axios.post('/seckdelete',{id:id})
    return res
}