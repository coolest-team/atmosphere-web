<template>
  <div class="parent">
    <div class="div1">
      <small-title title="地图面板" />
      <mapc-chart/>
    </div>
    <div class="div2">
      <small-title title="表格面板" />
      <table-chart/>
    </div>
    <div class="div3">
      <small-title title="折线图面板" />
      <line-chart/>
    </div>
  </div>
</template>

<script>
import smallTitle from "@/components/smallTitle";
import mapcChart from "./components/China";
import tableChart from"./components/table";
import lineChart from"./components/line";
export default {
  components: {
    smallTitle,
    mapcChart,
    tableChart,
    lineChart

  }
};
</script>

<style scoped>
.parent {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

.div1 {
  grid-area: 1 / 1 / 3 / 2;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
.div3 {
  grid-area: 2 / 2 / 3 / 3;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
</style>