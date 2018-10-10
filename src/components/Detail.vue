<template>
  <div class="wrapper">
    <h1 class="title">{{title}}</h1>
    <div class="content" v-for="(item,index) in contents" :key="index">
      <span class="text">
        {{item.text}}
      </span>
      <span class="audiobox start" ref="audiobox">
        <Audio ref="audio" :mp3_name='item.mp3' />
      </span>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Audio from './Audio'
export default {
  data() {
    return {
      title: 'Waiting for Ages!',
      msg: 'I know it might sound strange, but recently I’ve started thinking about what the places you arrange to meet say about you. Let me give you an example of what I mean. The other day, I arranged to meet a friend of mine outside the post office in Moss Side, a particularly rough area of Manchester. My friend was late—as usual. I had to wait for half an hour in the street, watching the police drive by and the rain come down. While I was there, two people asked me for money and a big guy came up to me and said, “What are you looking at?” I suddenly thought, “What am I doing here? This is a terrible place to meet!',
      msg1: 'When I was younger, I used to meet people at bus stops because I didn’t want my parents to see who I was going out with. I didn’t want to meet in a bar because if I was the first one there, I’d look lonely and the manager might ask me my age. Now that I’m older and don’t live with my parents, I don’t care if I have to sit in a café or somewhere like that by myself. I’d rather look a bit lonely than be outside, getting cold and wet.',
      contents: []
    }
  },
  components: {
    Audio
  },

  computed: {

  },

  mounted() {
    this.getData(1)
    this.$root.eventHub.$on('getData', (chapter) => {
      this.getData(chapter)
    })
  },
  updated() {
    this._play()
    this.resetAudioBoxImg()
    this._p()
  },
  methods: {

    _p() {
      let audio = Array.from(document.querySelectorAll('.content'))


      audio.forEach((item, i) => {
        item.addEventListener('click', (e) => {
          if (e.target.className === 'audiobox') {
            console.log(e.target);
          }
        })
      })

    },
    _play() {
      let audioBoxsArr = Array.from(document.querySelectorAll('.audiobox'))
      audioBoxsArr.forEach((item) => {
        item.addEventListener('click', (e) => {
          let audio = e.target.children[0]
          if (audio.paused) {
            // audio.play()
            e.target.className = 'audiobox stop'
          } else {
            // audio.pause()
            // audio.currentTime = 0.0
            e.target.className = 'audiobox start'
          }
        })
      })
    },

    resetAudioBoxImg() {
      let audios = Array.from(document.querySelectorAll('Audio'))
      audios.forEach((item, i) => {
        item.addEventListener('ended', function () {
          console.log('play--ended');
          this.parentNode.className = 'audiobox start'
        })

      })
    },


    getData(chapter) {
      axios.post('http://192.168.3.107:8081/web/dfbook/findAll',
        { chapter: chapter })
        .then((myJson) => {
          this.contents = myJson.data
        })
      this._play()
      // fetch('http://192.168.3.107:8081/web/dfbook/findAll').then((response)=>{
      //   return response.json()
      // })
      // .then((myJson)=>{
      //   this.contents = myJson
      // })
    }



  }

}
</script>


<style lang='stylus' scoped>
.wrapper
  position relative
  text-indent 2em 
  .title
    font-size 18px
    text-align center
    text-indent 0
    padding 5px 0
  .content
    .text, 
      display inline-block
      line-height 24px
    .audiobox
      display inline-block
      width 24px
      height 24px
      &.start
        background url(../assets/audio.png) no-repeat center
      &.stop
        background url(../assets/audio-off.png) no-repeat center
</style>
