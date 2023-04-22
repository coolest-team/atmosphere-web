<template>
  <div ref="char" class="char"></div>
</template>

<script>
import { getProvinceMap } from "../../../request/api";
import * as echarts from 'echarts';
import china from '@/assets/China.json';
echarts.registerMap('china', china);
let pinyin = require('js-pinyin');
pinyin.setOptions({checkPolyphone: true, charCase: 1});
export default {
  name: "China",
  data() {
    return {
      titledata: [],
      citydata:[],
      resultdata0: [],
      yMax: 1000,
      dataShadow: [],
      option: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false
        },
        grid: {
          // 仅仅控制条形图的位置
          show: false,
          containLabel: false,
          top: 'center',
          right: 0,
          width: '20%',
          height: '40%'
        },
        visualMap: {
          type: 'piecewise',
          pieces: [
            {min: 300, max: 500,label: '严重污染',color: '#990000'},
            {min: 200, max: 300,label: '重度污染',color: '#d7301f'},
            {min: 150, max: 200,label: '中度污染',color: '#ef6548'},
            {min: 100, max: 150,label: '轻度污染',color: '#fc8d59'},
            {min: 50, max: 100,label: '良',color: '#fdbb84'},
            {min: 0, max: 50, label: '优',color: '#fdd49e'},
          ],
          right:530,
          top:400
        },
        toolbox: {
          show: false
        },
        xAxis: [
          {
            type: 'value',
            position: 'top',
            inside: false,
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            },
            margin: 10
          }
        ],
        yAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLine: {
              show: false
            },
            axisLabel: {
              align: 'right',
              color: '#000',
              margin: 10,
              showMaxLabel: true
            },
            axisTick: {
              show: false
            },
            data: this.titledata
          }
        ],
        series: [
          {
            name: '数值',
            type: 'map',
            mapType: 'china',
            left: "8%",
            right: "8%",
            top: "8%",
            bottom: "15%",
            roam: 'move',
            mapValueCalculation: 'sum',
            zoom: 1,
            selectedMode: false,
            showLegendSymbol: false,
            label: {
              normal: {
                textStyle: {
                  color: '#000000',
                  fontSize: 8
                },
                show: true
              },
              emphasis: {
                textStyle: {
                  color: '#234EA5'
                }
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#EEEEEE',
                borderColor: '#FFFFFF'
              },
              emphasis: {
                areaColor: '#E5F39B'
              }
            },
            data: this.citydata
          },
        ]
      }
    };
  },
  props: {
    date: String
  },
  methods: {
    initData(){
      getProvinceMap({"date":this.date}).then(resp => {
        //this.$mapdata=resp.data.data
        var temp=[]
        for(let i=0;i<resp.data.length;i++)
        {
          temp.push({"name":resp.data[i][7],"value":resp.data[i][0]})
        }
        this.citydata=temp
      })
      this.init()
    },
    init() {
      var _this=this
      this.myChart = echarts.init(this.$refs.char);
      this.myChart.setOption(this.option);
      this.myChart.on("click", function(params) {
        var ename=pinyin.getFullChars(params.name)
        if(params.name=='内蒙古')
        {
          ename='neimenggu'
        }
        else if(params.name=='西藏'){
          ename='xizang'
        }
        else if(params.name=='陕西'){
          ename="shanxi1"
        }
        console.log(ename)
        _this.$emit("getdrill", true);
        _this.$emit("getname", params.name);
        _this.$emit("getename", ename);
      })
    },
  },
  mounted() {
    this.initData();
  },
  created() {

  },
  watch: {
    titledata(value) {
      this.option.yAxis[0].data = value;
      this.myChart.setOption(this.option);
    },
    citydata(value) {
      console.log("中国监听")
      this.option.series[0].data = value;
      this.myChart.setOption(this.option);
    },
    dataShadow(value) {
      this.option.series[1].data = value;
      this.myChart.setOption(this.option);
    },
    date: function() {
      this.initData();
    }
  }
}
</script>

<style scoped>

.char {
  width: 100%;
  height: 100%;
}
</style>
