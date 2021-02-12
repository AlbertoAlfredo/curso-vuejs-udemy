import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import Vue2Filters from "vue2-filters"
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.use(Vue2Filters)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
