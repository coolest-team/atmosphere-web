<template>
  <a-spin :spinning="spinning" size="small">
    <div id="map" style="margin:0 auto;width: 100%;height: 800px;"></div>
  </a-spin>
</template>

<script>
import L from "leaflet";
import 'leaflet/dist/leaflet.css'
import "leaflet-velocity/dist/leaflet-velocity.css";
import "leaflet-velocity/dist/leaflet-velocity";
//  注：this.datas为风场数据 格式类型可参照wind-js-server 的grib2json格式
//  至此结束，风场数据已经可以展示在地图中！
//  有什么不理解的地方或者报错的地方欢迎留言
export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var Esri_DarkGreyCanvas = L.tileLayer(
        "http://{s}.sm.mapstack.stamen.com/" +
        "(toner-lite,$fff[difference],$fff[@23],$fff[hsl-saturation@20])/" +
        "{z}/{x}/{y}.png"
      );
      //生成风场实例
      var velocityLayer = L.velocityLayer({
        displayValues: true,
        displayOptions: {
          velocityType: "GBR Wind",
          displayPosition: "bottomleft",
          displayEmptyString: "No wind data"
        },
        //   data: this.datas, //风场数据
        minVelocity: 0, //Velocity：速率
        maxVelocity: 10,
        velocityScale: 0.005,
        particleMultiplier: 1 / 1200, //粒子的数量
        lineWidth: 5, //粒子的粗细
        frameRate: 15, //定义每秒执行的次数
        colorScale: [
          "rgb(47,112,47)",
          "rgb(47,112,47)",
          "rgb(47,112,47)",
          "rgb(47,112,47)",
          "rgb(47,112,47)"
        ]
      });
      //添加风场样式至地图中
      this.map = L.map("map", {
        center: [38.065, 114.61],
        zoom: 13,
        layers: [Esri_DarkGreyCanvas]
      });
      // 风场实例添加到地图上
      velocityLayer.addTo(this.map);
    }
  }
};
</script>

