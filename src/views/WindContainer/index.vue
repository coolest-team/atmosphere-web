<template>
  <a-spin :spinning="spinning" size="small">
    <div id="map" style="margin:0 auto;width: 100%;height: 640px;"></div>
  </a-spin>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-velocity/dist/leaflet-velocity.css";
import "leaflet-velocity/dist/leaflet-velocity";
import "leaflet.chinatmsproviders";
import datas from "./wind-global.json";
//  注：this.datas为风场数据 格式类型可参照wind-js-server 的grib2json格式
//  至此结束，风场数据已经可以展示在地图中！
//  有什么不理解的地方或者报错的地方欢迎留言
export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // var Esri_WorldImagery = L.tileLayer(
      //   "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      //   {
      //     attribution:
      //       "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, " +
      //       "AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      //   }
      // );
      var normalm = L.tileLayer.chinaProvider("Google.Normal.Map");
      //生成风场实例
      var velocityLayer = L.velocityLayer({
        displayValues: true,
        displayOptions: {
          velocityType: "GBR Wind",
          displayPosition: "bottomleft",
          displayEmptyString: "No wind data"
        },
        data: datas, //风场数据
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
        center: [33.59, 107.29],
        zoom: 5,
        maxZoom: 20,
        minZoom: 5,
        layers: [normalm]
      });
      // 风场实例添加到地图上
      velocityLayer.addTo(this.map);
      // var velocityLayer = L.velocityLayer({
      //   displayValues: true,
      //   displayOptions: {
      //     velocityType: "Global Wind",
      //     position: "bottomleft",
      //     emptyString: "No wind data"
      //   },
      //   data: datas,
      //   maxVelocity: 15
      // });
      // layerControl.addOverlay(velocityLayer, "Wind - Global");
      // $.getJSON("wind-global.json", function(data) {
      //   var velocityLayer = L.velocityLayer({
      //     displayValues: true,
      //     displayOptions: {
      //       velocityType: "Global Wind",
      //       position: "bottomleft",
      //       emptyString: "No wind data"
      //     },
      //     data: data,
      //     maxVelocity: 15
      //   });

      //   layerControl.addOverlay(velocityLayer, "Wind - Global");
      // });
    }
  }
};
</script>

