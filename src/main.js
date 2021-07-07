import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header.vue'
import Filter from './components/Filter.vue'
import Card from './components/Card.vue'

Vue.component('nm-header', Header)
Vue.component('nm-filter', Filter)
Vue.component('nm-card', Card)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
