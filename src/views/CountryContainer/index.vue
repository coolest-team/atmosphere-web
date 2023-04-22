<template>
  <div class="parent">
    <div class="map">
      <small-title title="地图面板" />
      <mapc-chart v-show="drill==false" :date="date" @getdrill="changeDrill" @getname="changename" @getename="changeename"/>
      <mapp-chart v-show="drill==true" :date="date" :ename="ename" :name="name" @getdrill="changeDrill" />
    </div>
    <div class="timeline">
      <small-title title="时间轴面板" />
      <timeline-chart @getDate="changeDate" />
    </div>
    <div class="parallel">
      <small-title title="平行坐标" />
      <pollution-chart :date="date" />
    </div>
    <div class="ranking">
      <small-title title="污染TOP10排名" />
      <ranking />
    </div>
    <div class="div5">{{ this.date }}</div>
    <div class="div6">
      <small-title title="数值显示" />
      <ring-gauge :date="date" />
    </div>
    <div class="div7">aaa</div>
  </div>
</template>

<script>
import smallTitle from "@/components/smallTitle";
import pollutionChart from "./components/pollutionChart";
import ranking from "./components/Rank";
import timelineChart from "./components/TimelineChart";
import mapcChart from "./components/China";
import mappChart from "./components/Province";
import RingGauge from "./components/RingGauge";
export default {
  name: "index",
  components: {
    pollutionChart,
    smallTitle,
    ranking,
    timelineChart,
    mapcChart,
    mappChart,
    RingGauge,
  },
  data() {
    return {
      drill:false,
      date: "2016-01-01",
      ename:"zhejiang",
      name:"浙江"
    };
  },
  methods: {
    changeDate(date) {
      this.date = date;
    },
    changeDrill(drill){
      this.drill=drill;
    },
    changename(name){
      this.name=name;
    },
    changeename(ename){
      this.ename=ename;
    }
  }
  // components: { smallTitle }
};
</script>

<style scoped>
/* div {
  box-shadow: 0 4px 8px 0 rgba(67, 67, 67, 0.2), 0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
} */
.parent {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

.map {
  grid-area: 1 / 4 / 9 / 10;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
.timeline {
  grid-area: 9 / 4 / 11 / 10;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
.parallel {
  position: relative;
  grid-area: 7 / 1 / 11 / 4;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
  /* width: 500px;
  height: 500px; */
}
.ranking {
  grid-area: 1 / 10 / 7 / 13;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
.div5 {
  grid-area: 7 / 10 / 11 / 13;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
.div6 {
  grid-area: 1 / 1 / 4 / 4;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
.div7 {
  grid-area: 4 / 1 / 7 / 4;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
</style>
