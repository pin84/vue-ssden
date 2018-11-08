<template>
  <div class="wrapper">
    <span class="preview" @click="preview" v-if="previewFlag"> {{spanPre}}</span>
    <span class="next" @click="next" v-if="nextFlag">{{spanTNext}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spanText:['WaitingforAges','Vocabulary','SentenceAnalysis'],
      routers: ['/TextAWaitingforAges!', '/Section1Vocabulary', '/Section2SentenceAnalysis'],
      previewFlag: true,
      nextFlag: true,
      currtUrl:''
    }
  },
  computed:{
    spanPre: function(){
      return  this.spanText[this.routers.indexOf(this.currtUrl)-1] 
    },
    spanTNext: function(){
      return  this.spanText[this.routers.indexOf(this.currtUrl)+1]
    }
  },
  created() {
    this.currtUrl = window.location.href.split('#')[1]
    
    this.previewFlag = window.location.href.split('#')[1] === this.routers[0] ? false : true
    this.nextFlag = window.location.href.split('#')[1] === this.routers[this.routers.length-1] ? false : true
  },
  methods: {
    preview() {
      let curUrl = window.location.href.split('#')[1]
      let url = this.routers[this.routers.indexOf(curUrl) - 1]

      if (curUrl === this.routers[0]) {
        return
      }
      this.$router.push(`${url}`)
    },

    next() {
      let curUrl = window.location.href.split('#')[1]
      let url = this.routers[this.routers.indexOf(curUrl) + 1]
      if (curUrl === this.routers[this.routers.length - 1]) {
        return
      }
      this.$router.push(`${url}`)
    }
  }
}
</script>


<style lang='stylus' scoped>
.wrapper
  width 100%
  display flex
  justify-content space-between
  border-top 1px solid #000
  color green
  margin-top 20px
  box-sizing border-box
  span
    padding 10px
  .next
    padding-right 20px
    box-sizing border-box
  .preview::before, .next::after
    display inline-block
    content ''
    width 20px
    height 20px
    vertical-align top
  .preview::before
    background url(../assets/icon/toLeft.png) no-repeat center center
  .next::after
    transform rotate(180deg)
    background url(../assets/icon/toLeft.png) no-repeat center center
      
</style>
