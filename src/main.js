import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
