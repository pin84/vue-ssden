<template>
  <div class="part_1">
    <div class="title"> 
      <h3 ref="h3">Unit 1 Communication</h3>
      <h4>Part One Reading</h4>
    </div>
    <!-- <TextA /> -->
    <Section01 ref="section1"  class="s1"/>
    <Section02 ref="section2"  class="s2"/>
  </div>
</template>
<script>
import TextA from './TextA'
import Section01 from './Section01'
import Section02 from './Section02'
export default {
  mounted(){
    console.log(this.$refs.h3.offsetTop);
    console.log(this.$refs.section1.$el.offsetTop);
    console.log(this.$refs.section2.$el.offsetTop);
  },

  components: {
    TextA,
    Section01,
    Section02
  }

}
</script>
<style lang='stylus' scoped>
.part_1
  position relative
  .title
    text-align center
</style>