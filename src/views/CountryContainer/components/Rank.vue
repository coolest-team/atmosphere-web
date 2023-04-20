<template>
  <div class="echart" id="ranking" :style="myChartStyle"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Rank",
  data() {
    return {
      xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //横坐标
      yData: [23, 24, 18, 25, 27, 28, 25], //数据
      myChartStyle: { float: "left", width: "100%", height: "100%" } //图表样式
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      // 基本柱状图
      // const option = {
      //   xAxis: {
      //     data: this.xData
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       type: "bar", //形状为柱状图
      //       data: this.yData
      //     }
      //   ]
      // };
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '1%',
          left: '10%',
          right: '10%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          show: true,
          axisLabel: {
            formatter: '{value} ',
            show: true
          },
          splitLine: { show: false },
          axisLine: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          inverse: true, // 倒叙
          axisLabel: {
            color: 'black',
            formatter: (val) => {
              return `${val}`;
            }
          },
          axisLine: {
            show: false // 轴线
          },
          axisTick: {
            show: false // 刻度线
          },
          data: ['北京', '上海', '重庆', '四川', '湖北','浙江', '广东', '河南', '山东', '山西']
        },
        series: [
          {
            name: 'AQI',
            type: 'bar',
            barWidth: 10,
            showBackground: true,
            barMaxWidth: 20,
            barMinWidth: 5,
            itemStyle: {
              borderRadius: [0, 10, 10, 0],
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: 'red' },
                { offset: 1, color: 'yellow' }
              ]),
              borderWidth: 1,
              borderColor: "black"
            },
            data: [480,420,400, 396, 390, 380, 350,290,280,268]
          }
        ]
      };
      const myChart = echarts.init(document.getElementById("ranking"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
}
</script>

<style scoped>

</style>
