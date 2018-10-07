<template>
  <div class="wrapper">
    <div class="content">
      <span class="text">
        I know it might sound strange, but recently I’ve started thinking about what the places you arrange to meet say about you. Let me give you an example of what I mean. The other day, I arranged to meet a friend of mine outside the post office in Moss Side, a particularly rough area of Manchester. My friend was late—as usual. I had to wait for half an hour in the street, watching the police drive by and the rain come down. While I was there, two people asked me for money and a big guy came up to me and said, “What are you looking at?” I suddenly thought, “What am I doing here? This is a terrible place to meet!
      </span>
      <span class="audiobox start" ref="audiobox" @click="toggle">
        <Audio ref="audio" />
      </span>
    </div>
  </div>
</template>


<script>
import Audio from './Audio'
export default {
  components: {
    Audio
  },
  methods: {
    toggle() {
      let audiobox = this.$refs.audiobox
      let audio = this.$refs.audio.$el
      if (audio.paused) {
        audio.play()
        audiobox.className = 'audiobox stop'
      } else {
        audio.pause()
        audiobox.className = 'audiobox start'
      }
    }
  }

}
</script>


<style lang='stylus' scoped>
.wrapper
  position relative
  text-indent 2em 
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
