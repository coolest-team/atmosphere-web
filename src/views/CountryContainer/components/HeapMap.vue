<template>
  <div class="main">
    <div id="heapMap" style="width:1300px; height: 600px"></div>
  </div>
</template>
      
      <script>
  export default {
    data() {
      return {
        renderData: []
      };
    },
    //   computed: {
    //     province: function() {
    //       return this.$store.state.province2;
    //     },
    //     year: function() {
    //       return this.$store.state.year;
    //     }
    //   },
    // created() {
    //   this.initData();
    // },
    mounted() {
      this.initData();
    },
    methods: {
      initData() {
        this.mapFn();
        //   getProvinceByYear({
        //     province2: this.province,
        //     year: this.year
        //   }).then(res => {
        //     // console.log(res);
        //     this.renderData = res;
        //     this.mapFn();
        //   });
      },
      mapFn() {
        var mapChart = this.$echarts.init(
          document.getElementById("heapMap")
        );
        // x轴数据
        var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p'];
        // y轴数据
        var days = ['1月', '2月', '3月',
            '4月', '5月', '6月', '7月'];

        /*
        数据解释：
        [y轴，x轴，value]（注意第一个是y，第二个才是x！！！）
        例如[0,1,1]表示坐标为(1,0)的点的值为1
        因为y轴为一周，所以如果按天分，数据可以分为六行
        x轴为一天，按小时分，可以分为24个小时
        如下所示
         */
        var data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 1], [0, 5, 0], [0, 6, 0], [0, 7, 1], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5]
            , [1, 0, 7], [1, 1, 1], [1, 2, 1], [1, 3, 1], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2]
            , [2, 0, 1], [2, 1, 1], [2, 2, 1], [2, 3, 1], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 1], [2, 8, 0], [2, 9, 1], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4]
            , [3, 0, 7], [3, 1, 3], [3, 2, 2], [3, 3, 2], [3, 4, 0], [3, 5, 0], [3, 6, 1], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1]
            , [4, 0, 1], [4, 1, 3], [4, 2, 3], [4, 3, 1], [4, 4, 1], [4, 5, 1], [4, 6, 0], [4, 7, 2], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0]
            , [5, 0, 2], [5, 1, 1], [5, 2, 1], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0]
            , [6, 0, 1], [6, 1, 0], [6, 2, 2], [6, 3, 1], [6, 4, 2], [6, 5, 3], [6, 6, 4], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];

        data = data.map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });
        var option = {
            // 移到每个值上的文本提示框
            tooltip: {
                position: 'top'
            },
            // 关闭动画
            animation: true,
            // 直角坐标系内绘图网格
            grid: {
                height: '50%',
                top: '10%'
            },
            xAxis: {
                show: false,
                // 坐标轴类型，（value数值轴,category类目轴,time时间轴,log对数轴）
                type: 'category',
                data: hours,
                // 分隔区域
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: days,
                splitArea: {
                    show: true
                }
            },
            // 视觉映射组件
            visualMap: {
                min: 0,
                max: 10,
                // grid 区域包含坐标轴的刻度标签
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%'
            },
            series: [{
                name: 'Punch Card',
                type: 'heatmap',
                data: data,
                label: {
                    show: false 
                },
                // 当鼠标移到某个值上强调显示的格式（通过visualMap可以明显的看出这个效果）
                emphasis: {
                    itemStyle: {
                        // 图形阴影的模糊大小
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        }
        mapChart.setOption(option);
  
        window.addEventListener("resize", () => {
          // 自动渲染echarts
          mapChart.resize();
        });
      }
    }
    //   watch: {
    //     year() {
    //       this.initData();
    //     },
    //     province() {
    //       this.initData();
    //     }
    //   }
  };
  </script>
      
      <style scoped>
.main {
  width: 100%;
}
</style>
      