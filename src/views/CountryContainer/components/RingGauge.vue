<template>
  <div id="ringGauge" style="width:100%;height: 88%"></div>
</template>
    
<script>
// import { getProvincePollutedParallel } from "@/request/api";
export default {
  data() {
    return {
      renderData: []
    };
  },
  props: {
    date: String
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.mapFn();
      //   getProvincePollutedParallel({
      //     date: this.date
      //   }).then(res => {
      //     // console.log("平行坐标的res", res.data);
      //     this.renderData = res.data;
      //     this.mapFn();
      //   });
    },
    mapFn() {
      var myChart = this.$echarts.getInstanceByDom(
        document.getElementById("ringGauge")
      );
      if (myChart == null) {
        myChart = this.$echarts.init(document.getElementById("ringGauge"));
      }
      // Schema:
      // PM2.5,PM10,CO,NO2,SO2,O3,
      var gaugeData = [
        {
          value: 20,
          name: "PM2.5",
          title: {
            offsetCenter: ["-200%", "-60%"]
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ["-200%", "-35%"]
          }
        },
        {
          value: 40,
          name: "PM10",
          title: {
            offsetCenter: ["-200%", "0%"]
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ["-200%", "25%"]
          }
        },
        {
          value: 60,
          name: "SO2",
          title: {
            offsetCenter: ["-200%", "60%"]
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ["-200%", "85%"]
          }
        },
        {
          value: 80,
          name: "NO2",
          title: {
            offsetCenter: ["200%", "-60%"]
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ["200%", "-35%"]
          }
        },
        {
          value: 20,
          name: "CO",
          title: {
            offsetCenter: ["200%", "0%"]
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ["200%", "25%"]
          }
        },
        {
          value: 40,
          name: "03",
          title: {
            offsetCenter: ["200%", "60%"]
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ["200%", "85%"]
          }
        }
      ];

      var option = {
        grid: {
          show: false,
          left: "0.2%",
          right: "0.2%",
          top: "1%",
          bottom: "1%",
          containLabel: false
        },
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: "#464646"
              }
            },
            axisLine: {
              lineStyle: {
                width: 35
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: gaugeData,
            title: {
              fontSize: 14
            },
            detail: {
              width: 20,
              height: 4,
              fontSize: 14,
              color: "inherit",
              borderColor: "inherit",
              borderRadius: 20,
              borderWidth: 1,
              formatter: (params)=>{
                console.log("this is ringgauge",params)
                return params
              }
            //   "{value}%"
            }
          }
        ]
      };
      myChart.setOption(option);

      window.addEventListener("resize", () => {
        // 自动渲染echarts
        myChart.resize();
      });
    }
  },
  //   watch: {
  //     year() {
  //       this.initData();
  //     },
  //     province() {
  //       this.initData();
  //     }
  //   }
  watch: {
    date: function(newVal, oldVal) {
      console.log(newVal, oldVal);
      console.log("有没有在watch啊");
      this.initData();
    }
  }
};
</script>

<style scoped>
</style>
    