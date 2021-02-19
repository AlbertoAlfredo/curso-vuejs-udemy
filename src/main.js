import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import Vue2Filters from "vue2-filters"
import './plugins/bootstrap-vue'
import store from './store/store'
import router from './router/routes'
import App from './App.vue'

Vue.use(Vue2Filters)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
