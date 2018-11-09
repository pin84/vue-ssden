import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import TextA from '../components/article/unit_01/TextA'
import Section01 from '../components/article/unit_01/Section01'
import Section02 from '../components/article/unit_01/Section02'
import partTwo_01 from '../components/article/unit_01/partTwo/P01'
import partTwo_02 from '../components/article/unit_01/partTwo/P02'

import partThree from '../components/article/unit_01/partThree'
import partFour from '../components/article/unit_01/partFour'

export default new Router({

  // mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    // console.log(to.path, from, savedPosition);
    let position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    switch (to.path) {
      case '/TextAWaitingforAges!':
        position.y = 0
        break
      case '/PartFourTranslationFocus02':
        position.y = 812
        break
      case '/PartFourTranslationFocus03':
        position.y = 1183
        break
    }
    return position
  },
  routes: [
    {
      path:'/',
      redirect:'/TextAWaitingforAges!'
    },
    {
      path: '/TextAWaitingforAges!',
      component: TextA,
      meta: { scrollToTop: true }
    },
    {
      path: '/Section1Vocabulary',
      component: Section01,
      meta: { scrollToTop: true }
    },
    {
      path: '/Section2SentenceAnalysis',
      component: Section02,
      meta: { scrollToTop: true }
    },
    {
      path: '/PartTwoGrammarFocus01',
      component: partTwo_01,
    },
    {
      path: '/PartTwoGrammarFocus02',
      component: partTwo_02,
    },
    {
      path: '/BusinessCard',
      component: partThree,
    },
  
    {
      path: '/PartFourTranslationFocus01',
      component: partFour,
    },
    {
      path: '/PartFourTranslationFocus02',
      component: partFour,
      meta: { scrollToTop: true }
    },
    {
      path: '/PartFourTranslationFocus03',
      component: partFour,
      meta: { scrollToTop: true }
    },
   
  ]

})