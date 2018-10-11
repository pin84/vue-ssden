<template>
  <div class="book" ref="wrapper">
    <Detail  ref="detail"/>
    <PageToggle />
    <!-- <Nav  class="nav" ref="preview"/> -->
  </div>
</template>
<script>

import Detail from './Detail'
import PageToggle from './PageToggle'
import Nav from './Nav'
export default {
  components: {
    Detail,
    PageToggle,
    Nav
  },
  mounted() {
    // this.toggleNav()
  },

  methods:{
    toggleNav(){
      let flag = true
      let wrapper = this.$refs.wrapper,
      preview = this.$refs.preview.$el
      wrapper.addEventListener('click',(e)=>{
        if(flag && e.target.className.split(' ')[0] !== 'audiobox'){
          preview.style.transform = `translateX(0%)`
          flag = false
        } else {
          preview.style.transform = `translateX(-100%)`
          flag = true
        }
      })
    }


  }

}
</script>
<style lang='stylus' scoped>
.book
  padding 5px
  position relative
  height 100vh
  box-sizing border-box
  // border 1px solid red
  .nav
    position fixed
    top 0
    left 0
    width 80%
    transition 800ms
    transform translateX(-100%)
    // border 1px solid red

</style>