import Vue from 'vue'
import App from './App.vue'
import router from './router'
import promise from 'es6-promise'

promise.polyfill()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')
