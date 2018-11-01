<template>
  <div id="wrapper" class="wrapper" ref="detail">
    <h1 class="title">{{title}}</h1>
    <div class="content" v-for="(item,index) in contents" :key="index" @click="_play">
      <span class="text">
        {{item.text}}
      </span>
      <span class="audio" ref="audiobox">
        <Audio :mp3_name='item.mp3' />
      </span>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Audio from '../../Audio'
export default {
  data() {
    return {
      title: '',
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
    // this.getData('Waiting for Ages!')
    //给侧边导航用
    // this.$root.eventHub.$on('getData', (keyword) => {
    //   this.getData(keyword)
    // })
  },
  methods: {
    _test() {
      let detail = this.$refs.detail
      detail.addEventListener('click', function (e) {
        console.log(e.target);

      }, false)
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


    getData(keyword) {
      // axios.post('http://data.iathena.top/web/dfbook/findAll',
      axios.post('http://localhost:9000/web/dfbook/findAll',
        { keyword: keyword })
        .then((myJson) => {
          this.contents = myJson.data
          this.title = myJson.data[0].title
          this.$root.eventHub.$emit('changeChapter',myJson.data[0].chapter) //paggeToggle.vue
        })
    },

  }

}
</script>


<style lang='stylus' scoped>
*
  margin 0
  padding 0



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
      background url(../../../assets/audio.png) no-repeat center
      // background-color #6699CC
      z-index 9999
      &.start
        background url(../../../assets/audio.png) no-repeat center
      &.stop
        background url(../../../assets/audio-off.png) no-repeat center

  
</style>
