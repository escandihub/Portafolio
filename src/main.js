import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/theme.css'
Vue.config.productionTip = true

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
