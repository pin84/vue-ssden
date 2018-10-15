<template>
  <div id="wrapper" class="wrapper" ref="detail">
    <h1 class="title">{{title}}</h1>
    <div class="content" v-for="(item,index) in contents" :key="index" @click="_play">
      <span class="text">
        {{item.text}}
      </span>
      <div class="audio" ref="audiobox">
        <Audio :mp3_name='item.mp3' />
      </div>
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
      contents: [],
      flag: true
    }
  },
  components: {
    Audio
  },

  computed: {

  },

  mounted() {
    this.getData(3)
    this.$root.eventHub.$on('getData', (chapter) => {
      this.getData(chapter)
    })
    //给侧边导航用
    this.$root.eventHub.$on('getDataByTitle', (title) => {
      this.getDataByTitle(title)
    })


  },
  updated() {
    // this._play()
    // this.resetAudioBoxImg()
    // this._test()
  },
  methods: {
    _test() {
      let detail = this.$refs.detail
      detail.addEventListener('click', function (e) {
        console.log(e.target);

      }, false)
    },
    _play(e) {
      console.log('lick');
      
      let target = e.target
      let audio = target.children[0]
      if (target.className.split(' ')[0] === 'audio') {

        if(target.flag){
          audio.pause()
          audio.currentTime = 0.0
          target.className = 'audio start'
          target.flag= false
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

    resetAudioBoxImg() {
      let audios = this.$refs.audio
      audios.forEach((item, i) => {
        item.$el.addEventListener('ended', function () {
          this.parentNode.className = 'audiobox start'
        })
      })
    },


    getData(chapter) {
      axios.post('http://192.168.3.107:8081/web/dfbook/findAll',
        { chapter: chapter })
        .then((myJson) => {
          this.contents = myJson.data
          // console.log(this.contents);
        })
      // this._play()
    },

    getDataByTitle(title) {
      axios.post('http://192.168.3.107:8081/web/dfbook/getDataByTitle',
        { title: title })
        .then((response) => {
          this.contents = response.data
        })
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
    .audio
      display inline-block
      width 24px
      height 24px
      background url(../assets/audio.png) no-repeat center
      z-index 9999
      &.start
        background url(../assets/audio.png) no-repeat center
      &.stop
        background url(../assets/audio-off.png) no-repeat center
</style>
