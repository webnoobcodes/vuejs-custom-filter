import Vue from 'vue'
import App from './App.vue'

import './filters/format-date'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
