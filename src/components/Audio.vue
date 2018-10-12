<template>

  <audio ref="audio"  @click="_play">
    <source :src="require('../assets/mp3/'+mp3_name+'.mp3')">
  </audio>
</template>
<script>
export default {
  props: {
    mp3_name: '',
    flag: true
  },

  data() {
    return {

    }
  },

  mounted() {
    // this._playa()
    this.$root.eventHub.$on('stopPlay', () => {
      this.stopPlay()
    })
    // this.$root.eventHub.$on('_play', () => {
    //   this._play()
    // })
  },

  methods: {
    stopPlay(){
      let audio = this.$refs.audio
      if(audio){
        audio.pause()
        audio.currentTime = 0.0
      }
      
    },
    _play() {
      let oAudio =Array.from(document.querySelectorAll('audio'))
      oAudio.forEach((audio)=>{
        audio.pause()
        audio.currentTime = 0.0
      })
      
      let audio = this.$refs.audio
      if (audio.paused) {
        audio.play()
      } else {
        audio.pause()
        audio.currentTime = 0.0
      }
    }
  }

}
</script>
<style lang='stylus' scoped>

</style>