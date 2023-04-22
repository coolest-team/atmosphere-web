<template>
  <div class="radioBox" style="position:absolute;z-index:1;">
    地图上展示的：
    <label v-for="(item,index) in radioData" :key="index">
      <input type="radio" :value="item.value" :id="item.id" @click="getRadioVal(item.value)" name="pollutant"/>
      {{item.value}}
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radioData: [
        { value: "AQI", id: "AQI" },
        { value: "SO2", id: "SO2" },
        { value: "O3", id: "O3" },
      ]
    };
  },
  methods: {
    getRadioVal(pollu) {
      console.log(pollu);
      this.$emit("getPollu", pollu);
    }
  }
};
</script>