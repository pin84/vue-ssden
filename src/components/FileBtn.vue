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
  props:{
    flag:{
      type:Boolean,
      default:true
    }
  },
  computed:{
    msg:function(){
      return this.flag ? '重新选择' : '选择文件'
    }
  }
}
</script>
<style lang='stylus' scoped>
.wrapper
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