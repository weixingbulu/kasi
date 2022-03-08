import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import http from './network/http'
let {infofun,infotwo} = http
Vue.prototype.$infofun = infofun
Vue.prototype.$infotwo = infotwo

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
