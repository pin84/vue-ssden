import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import UnitOne from '../components/article/unit_01'
import UnitTwo from '../components/article/unit_02'

export default new Router({

  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    // console.log(to.path, from, savedPosition);
    let position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    switch (to.path) {
      case '/Unit1Communication':
        position.y = 0
        break
      case '/PartOneReading':
        position.y = 22
        break
      case '/TextAWaitingforAges!':
        position.y = 40
        break
      case '/Section1Vocabulary':
        position.y = 865
        break
      case '/Section2SentenceAnalysis':
        position.y = 1333
        break
    }
    return position
  },
  routes: [
    {
      path:'/',
      component: UnitOne,
    },
    {
      path: '/Unit1Communication',
      component: UnitOne,
      meta: { scrollToTop: true }
    },
    {
      path: '/PartOneReading',
      component: UnitOne,
      meta: { scrollToTop: true }
    },
    {
      path: '/TextAWaitingforAges!',
      component: UnitOne,
      meta: { scrollToTop: true }
    },
    {
      path: '/Section1Vocabulary',
      component: UnitOne,
      meta: { scrollToTop: true }
    },
    {
      path: '/Section2SentenceAnalysis',
      component: UnitOne,
      meta: { scrollToTop: true }
    },


    {
      path: '/Unit2Communication',
      component: UnitTwo,
      meta: { scrollToTop: true }
    },

  ]

})