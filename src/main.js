import Vue from 'vue'
import App from './App.vue'
import * as echarts from "echarts"
import dataV from '@jiaminghi/data-view'
import router from './router'
// import L from 'leaflet';
// import 'leaflet-velocity/dist/leaflet-velocity.css';
// import 'leaflet-velocity/dist/leaflet-velocity';

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(dataV)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
