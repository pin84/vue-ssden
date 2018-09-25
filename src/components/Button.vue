<template>
<div class="wrapper">
  <input type="file"  name="file" id="inputfile">
  <label for="inputfile" class="lab" ref="lable">
    {{msg}}
  </label>
</div>
</template>
<script>
export default {
  data(){
    return{
      msg:'选择文件'
    }
  },
  mounted(){
    this.test()
  },

  methods:{
    test(){
      let lab = this.$refs.lable
      lab.addEventListener('click',() => {
        console.log('aaa')
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
.wrapper
  // display flex
  border 1px solid red
  position relative
  #inputfile
    position absolute
    clip:rect(0,0,0,0);
  .lab
    padding 5px 10px
    background #336699  
    box-sizing border-box
    border-radius 5px 
    color #fff
    font-size 14px
    &:hover
      cursor pointer
      background #336666

</style>