<template>

  <audio ref="audio"  @ended="resetAudioBoxImg">
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
    this.$root.eventHub.$on('stopPlay', () => {
      this.stopPlay()
    })
  },

  methods: {
    stopPlay(){
      let audio = this.$refs.audio
      if(audio){
        audio.pause()
        audio.currentTime = 0.0
        audio.parentNode.className = 'audio start'
      }
    },

    resetAudioBoxImg() {
      this.$el.parentNode.className = 'audio start'
    },
  }

}
</script>
<style lang='stylus' scoped>

</style>