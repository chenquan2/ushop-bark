<template>
  <!-- 容器必须有高度，如果没有高度就显示不了 -->
  <div id="container"></div>
</template>

<script>
// 1.导入
import * as echarts from "echarts";
export default {
  data() {
    return {
      pieOption: {
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 10, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
          },
        ],
      },
    };
  },
  created() {},
  mounted() {
    //   2.获取元素的dom节点
    let dom = document.querySelector("#container");
    //   3.初始化
    let instance = echarts.init(dom);
    // 4.设置配置对象
    instance.setOption(this.pieOption);
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
#container {
  width: 100%;
  height: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px #eee;
}
</style>