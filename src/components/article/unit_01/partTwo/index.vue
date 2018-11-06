<template>
<div class="partTwo">
  <h2>Part Two Grammar Focus</h2>
  <div class="index">
    <strong>名词:</strong>
    <span>名词是表示人或物的名称的词。</span>
  </div>
  <P01 />
  <P02 />
</div>
</template>
<script>
import P01 from './P01'
import P02 from './P02'
export default {
  components:{
    P01,
    P02
  }
}
</script>
<style lang='stylus' scoped>
.partTwo
  position relative
  width 100%
  h2
    padding 10px 0
    text-align center 
    padding 20px 0 5px 0
    background #339999
    box-shadow 3px 3px 5px #666
    margin-bottom 6px
  .index
    padding-bottom 10px
    padding 5px 
    box-sizing border-box

</style>