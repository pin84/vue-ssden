<template>
  <div class="wrapper">
    <input class="preview" ref="pre" @click="toPre" value="上一篇" />
    <input class="next" ref="next" @click="toNext" value="下一篇" />
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      chapter: 3,
      countData:0
    }
  },
  mounted() {
    this.initData()
  },


  methods: {
    initData(){
      axios.get('http://192.168.3.107:8081/web/dfbook/countData').then((json)=>{
        this.countData = json.data[0].count
      })
    },

    toPre() {
      this.chapter--
      if (this.chapter <= 1) {
        this.chapter = 1
        this.$refs.pre.style.background = 'gray'
      }
      this.$root.eventHub.$emit('stopPlay')
      this.$refs.next.style.background = '#99CCCC'
      this.$root.eventHub.$emit('getData', this.chapter)
    },
    toNext() {
      this.chapter++
      if (this.chapter >= this.countData) {
        this.chapter = this.countData
        this.$refs.next.style.background = 'gray'
      }
      this.$root.eventHub.$emit('stopPlay')
      this.$refs.pre.style.background = '#99CCCC'
      this.$root.eventHub.$emit('getData', this.chapter)
    },

    getData() {

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
    padding 3px 15px
    border-radius 5px
    &.preview
      background gray
    // &.next
    //   margin-left 10px
</style>
