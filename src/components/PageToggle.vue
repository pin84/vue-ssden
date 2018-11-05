<template>
  <!-- <div class="wrapper">
    <input class="preview" ref="pre" value="上一篇" readonly unselectable="on" @touchstart="toPreTouchstart" @touchend="toPreTouchend" />
    <input class="next" ref="next" value="下一篇" readonly unselectable="on" @touchstart="toNextTouchstart" @touchend="toNextTouchend" />
  </div> -->
  <div class="wrapper">
    <span class="preview" > aaaaaaa</span> <span class="next">bbbbbbbb</span>
  </div>
</template>


<script>
export default {
  data() {
    return {
      chapter: 1,
      countData: 0,
      routers: ['a', 'b', 'c', 'd', 'e', 'f']
    }
  },
  mounted() {
    console.log('aaaaaa=====',window.location.href);
    
  },
  methods: {



    /*

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
    */

  }
}
</script>


<style lang='stylus' scoped>
.wrapper
  display flex
  justify-content space-between
  padding-top 20px 
  border-top 1px solid #000
  color green
  .next
    padding-right 20px
  .preview::before, .next::after
    display inline-block
    content ''
    width 20px
    height 20px
    vertical-align top
  .preview::before
    background url(../assets/icon/toLeft.png) no-repeat center center
  .next::after
    transform rotate(180deg)
    background url(../assets/icon/toLeft.png) no-repeat center center
      
</style>
