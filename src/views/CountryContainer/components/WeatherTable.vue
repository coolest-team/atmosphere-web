<template>
  <div class="weathertable" style="width:100%; height: 85%">
    <div class="winddir">
      <!-- 风向角度：{{ this.winddir }}
      风力速率：{{ this.windnum }}-->
      <div class="smallicon">
        <!-- <img :src="windUrl" width="50px" height="50px"> -->
        {{ this.winddir }}
      </div>
      <div class="numeric">
        {{ this.windnum }}m/s
      </div>
    </div>
    <div class="udir">
      <div class="smallicon">
        U
      </div>
      <div class="numeric">{{ this.udir }}m/s</div>
    </div>
    <div class="vdir">
      <div class="smallicon">
        V
      </div>
      <div class="numeric">{{ this.vdir }}m/s</div>
    </div>
    <div class="temp">
      <div class="smallicon">
        气温
      </div>
      <div class="numeric">{{ this.temp }}℃</div>
    </div>
    <div class="rh">
      <div class="smallicon">
        湿度
      </div>
      <div class="numeric">{{ this.rh }}%</div>
    </div>
    <div class="psfc">
      <div class="smallicon">
        气压
      </div>
      <div class="numeric">{{ this.psfc }}kPa</div>
    </div>
  </div>
</template>
      
<script>
import { getProvinceGauge } from "@/request/api";
export default {
  data() {
    return {
      winddir: [],
      windnum: [],
      udir: [],
      vdir: [],
      temp: [],
      rh: [],
      psfc: [],
      windUrl: require('../../../assets/icons/6042.png_860.png'),
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
      getProvinceGauge({
        date: this.date,
        province: "安徽省"
      }).then(res => {
        var alldata = res.data;
        this.udir = alldata[7].toFixed(2);
        this.vdir = alldata[8].toFixed(2);
        this.temp = alldata[9].toFixed(1);
        this.rh = alldata[10].toFixed(1);
        this.psfc = alldata[11].toFixed(0);
        this.winddir = this.windDir(this.udir, this.vdir);
        this.windnum = Math.sqrt(
          this.udir * this.udir + this.vdir * this.vdir
        ).toFixed(2);
        // this.mapFn();
      });
    },
    windDir(u, v) {
      var dir = 180 + (Math.atan2(u, v) * 180) / Math.PI;
      if(dir<90 && dir>0){
        dir = "东北风";
      }
      else if(dir>90 &&dir<180){
        dir = "西北风";
      }
      else if(dir>180 &&dir <270){
        dir = "西南风";
      }
      else if(dir>270 &&dir<360){
        dir = "东南风";
      }
      return dir;
    }
  },
  watch: {
    date: function() {
      this.initData();
    }
  }
};
</script>

<style scoped>
.weathertable {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.smallicon {
  /* float: left; */
  /* width: 30%; */
  margin-left: 12px;
  position: absolute;
  font-size: 27px;
  color: grey;
  z-index: 1;
}
.numeric {
  /* float: right; */
  /* width: 70%; */
  position: absolute;
  margin-top: 25px;
  margin-left:60px;
  font-size: 17px;
  text-align: center;
  z-index: 2;
}
.winddir {
  grid-area: 1 / 1 / 2 / 2;
  display: relative;
  border: 1px solid #9d9d9d;
}
.udir {
  grid-area: 2 / 1 / 3 / 2;
  display: relative;
  border: 1px solid #9d9d9d;
}
.vdir {
  grid-area: 3 / 1 / 4 / 2;
  display: relative;
  border: 1px solid #9d9d9d;
}
.temp {
  grid-area: 1 / 2 / 2 / 3;
  display: relative;
  border: 1px solid #9d9d9d;
}
.rh {
  grid-area: 2 / 2 / 3 / 3;
  display: relative;
  border: 1px solid #9d9d9d;
}
.psfc {
  grid-area: 3 / 2 / 4 / 3;
  display: relative;
  border: 1px solid #9d9d9d;
}
</style>
    