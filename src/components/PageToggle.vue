<template>
  <div class="wrapper">
    <input class="preview" ref="pre" value="上一篇" readonly unselectable="on" @touchstart="toPreTouchstart" @touchend="toPreTouchend" />
    <input class="next" ref="next" value="下一篇" readonly unselectable="on" @touchstart="toNextTouchstart" @touchend="toNextTouchend" />
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      chapter: 1,
      countData: 0
    }
  },
  mounted() {
    this.initData()
    this.$root.eventHub.$on('changeChapter',(chapter)=>{
      this.chapter = chapter
    })
  },
  methods: {
    initData() {
      axios.get('http://192.168.3.107:9000/web/xsden/countData').then((json) => {
        this.countData = json.data[0].count
      })
    },

    toPreTouchstart() {
      let pre = this.$refs.pre
      if (this.chapter <= 1) {
        return
      }
      pre.style.background = '#666699'
    },
    toPreTouchend() {
      let pre = this.$refs.pre
      if (this.chapter <= 1) {
        return
      }
      pre.style.background = '#99CCCC'
      this.chapter--
      this.$root.eventHub.$emit('stopPlay')
      this.$refs.next.style.background = '#99CCCC'
      if (this.chapter <= 1) {
        this.chapter = 1
        pre.style.background = 'gray'
      }
      this.$root.eventHub.$emit('getData', this.chapter) //detail.vue
    },
    toNextTouchstart() {
      if (this.chapter >= this.countData) {
        return
      }
      let next = this.$refs.next
      next.style.background = '#666699'
    },

    toNextTouchend() {
      if (this.chapter >= this.countData) {
        return
      }
      let next = this.$refs.next
      next.style.background = '#99CCCC'
      this.chapter++
      this.$root.eventHub.$emit('stopPlay')
      this.$refs.pre.style.background = '#99CCCC'
      if (this.chapter >= this.countData) {
        this.chapter = this.countData
        next.style.background = 'gray'
      }
      this.$root.eventHub.$emit('getData', this.chapter)
    }

  }
}
</script>


<style lang='stylus' scoped>
.wrapper
  display flex
  justify-content space-around
  margin-top 10px
  margin-bottom 10px
  .preview , .next
    width 60px
    height 20px
    text-align center
    background #99CCCC
    outline none
    border 0
    // padding 3px 15px
    border-radius 5px
    &.preview
      background gray
    // &.next
    //   margin-left 10px
</style>
