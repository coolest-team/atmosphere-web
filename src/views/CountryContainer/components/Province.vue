<template>
  <div>
    <div :id="id" class="provinceCharts"></div>
    <Button type="button" class="back" @click="goBack()">返回</Button>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {getCityMap} from "@/request/api";
export default {
  name: 'Province',
  data () {
    return {
      dataupdate:[],
      id: 'echarts_' + new Date().getTime() + Math.floor(Math.random() * 1000),
      echartObj: null,
      option: {
        title: {
          text: '',
          top: '8%',
          left: '2%',
          textStyle: {
            fontSize: 14,
            fontWeight: 300,
            color: '#000'
          }
        },
        tooltip: {
          padding: 0,
          // 数据格式化
          formatter: function (params) {
            return params.name + '：' + (params.value || 0)
          }

        },
        // visualMap: {
        //   min: 0,
        //   max: 500,
        //   left: 'left',
        //   top: 'bottom',
        //   text: ['高', '低'], // 取值范围的文字
        //   inRange: {
        //     color: ['#e0ffff', 'blue'] // 取值范围的颜色
        //   },
        //   show: true // 图注
        // },
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
          right:0,
          top:380

        },
        geo: {
          map: '',
          roam: false, // 不开启缩放和平移
          zoom: 0.7, // 视角缩放比例
          label: {
            normal: {
              show: false,
              fontSize: 8,
              color: '#000'
            },
            emphasis: {
              show: true,
              color: 'blue',
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: 'skyblue', // 鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        },
        series: [
          {
            name: '省份数据',
            type: 'map',
            geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
            data: this.dataupdate
          }
        ],
        provinceJSON: {},
      }
    }
  },
  created() {

  },
  props: {
    date: String,
    name:String,
    ename:String
  },
  mounted () {
    this.init();
    this.resizeListener();
  },
  watch:{
    name: function ()
    {
      this.init()
    },
    dataupdate: function (value) {
      this.option.series[0].data = value;
      this.echartObj.setOption(this.option);
    },
  },
  methods: {
    init(){
      if(this.name!='中国'){
        getCityMap({province:this.name,date:this.date}).then(resp => {
          var temp=[]
          for(let i=0;i<resp.data.length;i++)
          {
            temp.push({"name":resp.data[i][7],"value":resp.data[i][0]})
          }
          this.dataupdate=temp
          temp.sort((a, b) => {
            return b.value - a.value;
          });
          this.$emit("provincedata",temp);
          this.initData()
        })
      }
    },
    initData(){
      const provinceName = this.name
      const province = this.ename
      this.provinceJSON = require('@/utils/省份数据/json(省份)/' + province)
      this.option.title.text = provinceName;
      this.option.geo.map = province
      this.echartObj = echarts.init(document.getElementById(this.id))
      echarts.registerMap(province, this.provinceJSON)
      this.echartObj.setOption(this.option);
    },
    resizeListener(){
      window.addEventListener('resize', () => {
        if (this.echartObj && this.echartObj.resize) {
          this.echartObj.resize()
        }
      })
    },
    goBack () {
      this.$emit("getdrill", false);
      this.$emit("getname",'中国');
    },
  }

}
</script>
<style scoped>
.provinceCharts {
  height: 520px;
  width: 650px;
  margin: auto;
}
.back{
  margin-left: 25px;
}
</style>
