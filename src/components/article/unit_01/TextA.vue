<template>
  <div id="wrapper" class="wrapper" ref="detail">
    <h2 class="title">{{this.title}}</h2>
    <div class="text" v-for="(item,index) in texts" :key="index" @click="_play">
      <span class="text_en">
        {{item.text}}
      </span>
      <span class="text_ch">
        {{item.text_ch}}
      </span>
      <span class="CH_EN" @click="CH_EN"></span>
      <span class="audio" ref="audiobox">
        <Audio :mp3_name='item.mp3' />
      </span>
    </div>

    <!-- <PageToggle /> -->
  </div>
</template>


<script>
import Audio from '../../Audio'
import PageToggle from '../../PageToggle'
import url from '../../../config/env'
export default {
  data() {
    return {
      title: '',
      texts: [],
      flag: true,
      CH_EN_flag: true
    }
  },

  components: {
    Audio,
    PageToggle
  },

  computed: {

  },

  created() {
    this._initDataText()
    
  },
  methods: {
    CH_EN(e) {
      let text_ch = e.target.previousSibling,
        text_en = text_ch.previousSibling
      if (this.CH_EN_flag) {
        text_en.style.opacity = '0'
        text_ch.style.opacity = '1'
        setTimeout(() => {
          text_ch.style.display = 'inline'
          text_en.style.display = 'none'
        }, 600)
        e.target.className = 'CH_EN en'
        this.CH_EN_flag = false
      } else {
        text_ch.style.opacity = '0'
        text_en.style.opacity = '1'
        setTimeout(() => {
          text_en.style.display = 'inline'
          text_ch.style.display = 'none'
        }, 600)
        e.target.className = 'CH_EN ch'
        this.CH_EN_flag = true
      }

    },

    _play(e) {
      // console.log('lick');
      let target = e.target
      let audio = target.children[0]
      if (target.className.split(' ')[0] === 'audio') {
        if (target.flag) {
          audio.pause()
          audio.currentTime = 0.0
          target.className = 'audio start'
          target.flag = false
          return
        }
        let audiosbox = Array.from(document.querySelectorAll('.audio'))
        audiosbox.forEach((item) => {
          item.flag = false
          item.children[0].pause()
          item.className = 'audio start'
          item.children[0].currentTime = 0.0
        })
        if (!target.flag) {
          target.flag = true
          audio.play()
          target.className = 'audio stop'
        } else {
          audio.pause()
          audio.currentTime = 0.0
          target.className = 'audio start'
          target.flag = false
        }
      }
    },
    _initDataText(keyword) {
      fetch(`http://${url.env}/web/xsden/initDataText_1`).then((res) => {
        return res.json()
      }).then((myJson) => {
        this.title = myJson[0].title
        this.texts = myJson
      })
    },

  }

}
</script>


<style lang='stylus' scoped>
#wrapper
  box-sizing border-box
  background #f6f6f6
  .title
    width 80%
    color #fff
    text-align center
    margin 0 auto
    padding 20px 0
    background url(../../../assets/img/s1_item_bg.jpg) no-repeat center center 
    background-size cover
    transform skewX(160deg)
  .text
    line-height 24px
    text-indent 2em
    color #000
    background #FFCC99
    margin-bottom 10px
    padding 10px 5px
    margin-top 20px
    box-sizing border-box
    border-radius 10px
    .text_en
      transition 800ms
    .text_ch
      transition 800ms
      display none
    .audio
      display inline-block
      width 24px
      height 24px
      padding 0px 5px
      background url(../../../assets/audio.png) no-repeat center
      z-index 9999
      vertical-align top
      &.start
        background url(../../../assets/audio.png) no-repeat center
      &.stop
        background url(../../../assets/audio-off.png) no-repeat center
    .CH_EN
      display inline-block
      transition 800ms
      width 24px
      height 24px 
      vertical-align top
      padding 0px 5px
      background url(../../../assets/icon/text_ch.png) no-repeat center
      &.en
        background url(../../../assets/icon/text_en.png) no-repeat center
      &.ch
        background url(../../../assets/icon/text_ch.png) no-repeat center


  
</style>
