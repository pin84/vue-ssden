import Vue from 'vue'
import App from './App.vue'
import promise from 'es6-promise'

promise.polyfill()

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
