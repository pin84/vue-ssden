import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import UnitOne from '../components/article/unit_01'
import TextA from '../components/article/unit_01/TextA'
import Section01 from '../components/article/unit_01/Section01'
import Section02 from '../components/article/unit_01/Section02'
import partTwo from '../components/article/unit_01/partTwo'
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
      case '/PartFourTranslationFocus01':
        position.y = 44
        break
      case '/PartFourTranslationFocus02':
        position.y = 376
        break
      case '/PartFourTranslationFocus03':
        position.y = 780
        break
      case '/PartFourTranslationFocus04':
        position.y = 1160
        break
    }
    return position
  },
  routes: [
    {
      path:'/',
      component: TextA,
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
      path: '/PartTwoGrammarFocus',
      component: partTwo,
    },
    {
      path: '/PartTwoGrammarFocus01',
      component: partTwo,
    },
    {
      path: '/PartTwoGrammarFocus02',
      component: partTwo_01,
    },
    {
      path: '/PartTwoGrammarFocus03',
      component: partTwo_02,
    },
    {
      path: '/PartThreePracticalWriting',
      component: partThree,
    },
    {
      path: '/BusinessCard',
      component: partThree,
    },
    {
      path: '/PartFourTranslationFocus',
      component: partFour,
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
    },
 
    {
      path: '/PartFourTranslationFocus04',
      component: partFour,
    },
 

  ]

})