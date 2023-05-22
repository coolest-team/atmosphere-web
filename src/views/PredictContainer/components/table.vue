<template>
  <el-table
            :data="tableData"
            stripe="true"
            style="width: 120%;top:20%;">
      <el-table-column
                       prop="date"
                       label="名称">
      </el-table-column>
      <el-table-column
                       prop="PM25"
                       label="PM2.5">
      </el-table-column>
      <el-table-column
                       prop="O3"
                       label="O3">
      </el-table-column>
      <el-table-column
                       prop="AQI"
                       label="AQI">
      </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "table",
  data(){
        return {
            tableData: [
            {
                date: '2019-01-01',
                PM25: 500,
                O3: 3500,
                AQI: 22000
            },{
                date: '2019-01-02',
                PM25: 500,
                O3: 3500,
                AQI: 22000
            },{
                date: '2019-01-03',
                PM25: 500,
                O3: 3500,
                AQI: 22000
            },

            ]
        }
    }
}
</script>

<style scoped>

</style>