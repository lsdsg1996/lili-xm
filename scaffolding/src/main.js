import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import less from 'less'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Toast } from 'vant';
axios.defaults.baseURL = '/api'
Vue.prototype.axios = axios;
Vue.prototype.$msg = Toast;
Vue.config.productionTip = false
Vue.use(less)
Vue.use(Vant)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
