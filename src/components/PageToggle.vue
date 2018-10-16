<template>
  <div class="wrapper">
    <input class="preview" ref="pre" @click="toPre" value="上一篇" readonly unselectable="on" />
    <input class="next" ref="next" value="下一篇" readonly unselectable="on" />
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      chapter: 3,
      countData: 0
    }
  },
  mounted() {
    this.initData()
    this.toNext()
    this.toPre()
  },
  updated() {
  },

  methods: {
    initData() {
      axios.get('http://192.168.3.107:8081/web/dfbook/countData').then((json) => {
        this.countData = json.data[0].count
      })
    },

    toPre() {
      let pre = this.$refs.pre
      pre.addEventListener('touchstart', () => {
        if (this.chapter <= 1) {
          return
        }
        pre.style.background = '#666699'
      })
      pre.addEventListener('touchend', () => {
        pre.style.background = '#99CCCC'
        this.chapter--
        this.$root.eventHub.$emit('stopPlay')
        this.$refs.next.style.background = '#99CCCC'
        if (this.chapter <= 1) {
          this.chapter = 1
          pre.style.background = 'gray'
        }
        this.$root.eventHub.$emit('getData', this.chapter)
      }, { once: true })
    },
    toNext() {
      let next = this.$refs.next
      next.addEventListener('touchstart', () => {
        if (this.chapter >= this.countData) {
          return
        }
        next.style.background = '#666699'
      })

      next.addEventListener('touchend', () => {
        next.style.background = '#99CCCC'
        this.chapter++
        this.$root.eventHub.$emit('stopPlay')
        this.$refs.pre.style.background = '#99CCCC'
        if (this.chapter >= this.countData) {
          this.chapter = this.countData
          next.style.background = 'gray'
        }
        this.$root.eventHub.$emit('getData', this.chapter)
      })
    },
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
