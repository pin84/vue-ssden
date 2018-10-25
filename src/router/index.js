import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import UnitOne from '../components/article/unit_01'
import UnitTwo from '../components/article/unit_02'

export default new Router({

  routes: [
    {
      path: '/Unit1Communication' || '/PartOneReading',
      component: UnitOne
    },
    {
      path: '/Unit2Communication',
      component: UnitTwo
    },
    
  ]

})