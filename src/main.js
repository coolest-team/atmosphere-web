import Vue from 'vue'
import App from './App.vue'
import * as echarts from "echarts"
import dataV from '@jiaminghi/data-view'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(dataV)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
