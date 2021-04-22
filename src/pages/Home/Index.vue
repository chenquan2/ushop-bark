<template>
 <div>
     <h1>管理中心</h1>
     <Line-box/>
     <el-divider></el-divider>
     <Pie/>
 </div>
</template>

<script>
import LineBox from './LineBox'
import Pie from './Pie'
export default {
    data(){
         return{}
    },
    created(){},
    methods:{},
    components:{
        LineBox,Pie
    }
}

</script>
<style scoped>
</style>