<template>
<ul class="wrapper">
  <li class="preview">上一章</li>
  <li class="next">下一章</li>
</ul>
</template>


<script>
 export default{

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
