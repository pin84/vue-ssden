<template>
  <ul class="wrapper">
    <li class="preview" ref="pre" @click="toPre" >上一篇</li>
    <li class="next" ref="next" @click="toNext">下一篇</li>
  </ul>
</template>


<script>
export default {
  data(){
    return{
      chapter:0
    }
  },
  mounted() {
      
  },

  methods: {
    
    toPre() {
      
      --this.chapter
      this.$root.eventHub.$emit('getData',this.chapter)
      console.log(this.chapter);
    },
    toNext() {
      
      this.chapter++
      this.$root.eventHub.$emit('getData',this.chapter)
      console.log(this.chapter);

    },

    getData(){

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
    // &.next
    //   margin-left 10px
</style>
