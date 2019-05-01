import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import { Header, Button, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
