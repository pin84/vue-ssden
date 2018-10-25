<template>
  <div class="part_1">
    <h3>Unit 1 Communication</h3>
    <PartOne />
    <Section01  class="s1"/>
    <Section02  class="s2"/>
  </div>
</template>
<script>
import PartOne from './PartOne'
import Section01 from './Section01'
import Section02 from './Section02'
export default {

  components: {
    PartOne,
    Section01,
    Section02
  }

}
</script>
<style lang='stylus' scoped>
.s1
  transform translateY(0%)
</style>