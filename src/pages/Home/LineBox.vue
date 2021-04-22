<template>
  <!-- 容器必须有高度，如果没有高度就显示不了 -->
  <div id="container1"></div>
</template>

<script>
// 1.导入
import * as echarts from "echarts";
export default {
  data() {
    return {
      lineOption: {
        title: {
          text: "折线图堆叠",
          textStyle:{
            color:'red'
          }
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
          show:false
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["aa", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel:{
            color:'blue'
          }
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
    };
  },
  created() {
      
  },
  mounted() {
    //   2.获取元素的dom节点
    let dom1 = document.querySelector("#container1");
    //   3.初始化
    let instance1 = echarts.init(dom1);
    // 4.设置配置对象
    instance1.setOption(this.lineOption)
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
#container1 {
  width: 100%;
  height: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px #eee;
}
</style>