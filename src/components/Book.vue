<template>
  <!-- <div class="book" @click="toggleNav"> -->
  <div class="book" >
    <Top />
    <div class="main">
      <Detail ref="detail" />
      <!-- <PageToggle /> -->
      <Nav class="nav" ref="preview" />
    </div>
    <Foot class="foot"/>
  </div>
</template>
<script>

import Detail from './Detail'
import PageToggle from './PageToggle'
import Nav from './Nav'
import Top from './topFoot/Top'
import Foot from './topFoot/Foot'
export default {
  data(){
    return{
      flag:true
    }
  },
  components: {
    Detail,
    PageToggle,
    Nav,
    Top,
    Foot
  },
  created(){

    },
  updated() {
    // this.toggleNav()
    this.$root.eventHub.$on('abc',()=>{
      this.aaab()
    })

  },

  methods: {
    toggleNav(e) {
      let wrapper = this.$refs.wrapper,
        preview = this.$refs.preview.$el
      let target = e.target
      if (this.flag) {
        
        if (target.className === 'text' || target.className === 'content' || target.className === 'book') {
          preview.style.transform = `translateX(0%)`
          this.flag = false
        }
      } else {
        preview.style.transform = `translateX(-100%)`
        this.flag = true
      }
    },


    aaab(){
      console.log('showNav');
      
    }



  }

}
</script>
<style lang='stylus' scoped>
.book
  position relative
  // height 100vh
  .main
    padding 5px
    position relative
    box-sizing border-box
    margin-bottom 60px
    .nav
      position fixed
      top 0
      left 0
      width 80%
      transition 800ms
      transform translateX(-100%)
      // border 1px solid red
  .foot
    position fixed
    left 0
    bottom 0


</style>