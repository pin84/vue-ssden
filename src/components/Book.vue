<template>
  <div class="wrapper">
    <Detail />
    <PageToggle />
  </div>
</template>
<script>

import Detail from './Detail'
import PageToggle from './PageToggle'
export default {
  components: {
    Detail,
    PageToggle,
  },
  mounted() {
  },


}
</script>
<style lang='stylus' scoped>
.wrapper
  padding 5px

</style>