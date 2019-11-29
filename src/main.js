import Vue from 'vue'
import App from './App.vue'
import store from '@/store'

import router from 'router'
import 'assets/css/normalize.css'

import { Toast,InfiniteScroll,Spinner,Lazyload  } from 'mint-ui'

Vue.prototype.$toast = Toast;
Vue.use(InfiniteScroll)
Vue.use(Lazyload)
Vue.component(Spinner.name, Spinner);



Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
