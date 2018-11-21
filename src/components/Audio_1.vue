<template>
  <div class="audio" >
    <audio ref="audio" @ended="resetAudioBoxImg">
      <source :src="require('../assets/mp3/'+mp3_name+'.mp3')">
    </audio>
  </div>
</template>
<script>
export default {
  props: {
    mp3_name: ''
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
      this.$el.className = 'audio'
    },
  }

}
</script>
<style lang='stylus' scoped>
.audio
  width 24px
  height 24px
  background url('../assets/audio.png') no-repeat  center
  &.stop
    background url('../assets/audio-off.png') no-repeat center
</style>