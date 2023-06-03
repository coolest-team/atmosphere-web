<template>
  <div style="margin-left:10px;">
    当前所选年份：
    <select
      v-model="value"
      style="z-index:2;position:absolute;width:100px;"
      @change="getSelectVal(value)"
    >
      <option v-for="item in kindList" :key="item" v-bind:value="item.id" v-text="item.name"></option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kindList: [
        { name: "2016", id: 2016 },
        { name: "2017", id: 2017 },
        { name: "2018", id: 2018 }
      ],
      value: "2016"
    };
  },
  methods: {
    getSelectVal(year) {
      console.log(year);
      this.$emit("getYear", year);
    }
  }
};
// style="width:200px;height: 30px;margin-top: 5px;margin-bottom: 5px;margin-left: 10px"
</script>

