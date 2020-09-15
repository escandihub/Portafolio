import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/theme.css'
import './assets/css/bootstrap.min.js'

Vue.config.productionTip = true

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
