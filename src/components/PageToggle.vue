<template>
  <ul class="wrapper">
    <li class="preview" ref="pre" @click="toPre">上一篇</li>
    <li class="next" ref="next" @click="toNext">下一篇</li>
  </ul>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      chapter: 1,
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
      if (this.chapter === this.countData) {
        this.chapter = 4
      }
      this.$refs.next.style.background = '#99CCCC'
      this.$root.eventHub.$emit('getData', this.chapter)
      this.chapter--
      if (this.chapter < 1) {
        this.chapter = 1
        this.$refs.pre.style.background = 'gray'
      }
    },
    toNext() {
      if (this.chapter === 1) {
        this.chapter = 2
      }
      this.$refs.pre.style.background = '#99CCCC'
      this.$root.eventHub.$emit('getData', this.chapter)
      this.chapter++
      if (this.chapter > this.countData) {
        this.chapter = this.countData
        this.$refs.next.style.background = 'gray'
      }

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
  .preview , .next
    background #99CCCC
    padding 3px 15px
    border-radius 5px
    &.preview
      background gray
    // &.next
    //   margin-left 10px
</style>
