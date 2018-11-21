<template>
  <audio ref="audio" @ended="resetAudioBoxImg"  @audioPlay="aaa">
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

  created(){

    // console.log(this.mp3_name);
  },

  mounted() {

    this.$root.eventHub.$on('stopPlay', () => {

      this.stopPlay()
    })
  },

  methods: {

    aaa(){
      console.log('audioPlay');
      
    },
    stopPlay() {
      console.log('stopPlay');
      
      let audio = this.$refs.audio
      if (audio) {
        audio.pause()
        audio.currentTime = 0.0
        audio.parentNode.className = 'audio start'
      }
    },

    resetAudioBoxImg() {
      console.log('resetAudioBoxImg');
      
      this.$el.parentNode.className = 'audio start'
    },
  }

}
</script>
<style lang='stylus' scoped>

</style>