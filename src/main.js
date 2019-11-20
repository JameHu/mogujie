import Vue from 'vue'
import App from './App.vue'
import store from '@/store'

import { Toast, Swipe, SwipeItem } from 'mint-ui'

import router from 'router'
import 'normalize.css'

Vue.prototype.$toast = Toast;

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
