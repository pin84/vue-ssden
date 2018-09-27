<template>
  <div class="wrapper">
    <div class="content">
      <ul>
        <li>
          <span>
            I know it might sound strange, but recently I’ve started thinking about what the places you arrange to meet say about you. Let me give you an example of what I mean. The other day, I arranged to meet a friend of mine outside the post office in Moss Side, a particularly rough area of Manchester. My friend was late—as usual. I had to wait for half an hour in the street, watching the police drive by and the rain come down. While I was there, two people asked me for money and a big guy came up to me and said, “What are you looking at?” I suddenly thought, “What am I doing here? This is a terrible place to meet!
          </span>
          <span class="audiobox start" ref="audiobox" @click="toggle">
            <Audio ref="audio" />
          </span>
        </li>
        <li>
          <span>
            I know it might sound strange, but recently I’ve started thinking about what the places you arrange to meet say about you. Let me give you an example of what I mean. The other day, I arranged to meet a friend of mine outside the post office in Moss Side, a particularly rough area of Manchester. My friend was late—as usual. I had to wait for half an hour in the street, watching the police drive by and the rain come down. While I was there, two people asked me for money and a big guy came up to me and said, “What are you looking at?” I suddenly thought, “What am I doing here? This is a terrible place to meet!
          </span>
          <span class="audiobox start" ref="audiobox" @click="toggle">
            <Audio ref="audio" />
          </span>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
import Audio from './Audio'
export default {
  components: {
    Audio
  },

  mounted() {
    console.log(this.$refs.audio.$el);
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
  display flex
  .content
    // flex 0 0 80%
    height 200px
    border 1px solid pink
    .audiobox
      display block
      width 32px
      height 32px
      &.start
        background url(../assets/start.png) no-repeat center
      &.stop
        background url(../assets/stop.png) no-repeat center
      &:hover
        cursor pointer

</style>