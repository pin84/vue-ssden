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
      routers: ['TextAWaitingforAges!', 'Section1Vocabulary', 'Section2SentenceAnalysis','PartTwoGrammarFocus01','PartTwoGrammarFocus02','BusinessCard','PartFourTranslationFocus01'],
      previewFlag: false,
      nextFlag: false,
      currtUrl: ''
    }
  },
  computed: {
    
    spanPre: function () {
      return this.routers[this.routers.indexOf(this.currtUrl) - 1]
    },
    spanTNext: function () {
      return this.routers[this.routers.indexOf(this.currtUrl) + 1]
    }
  },
  mounted(){
    this.currtUrl = window.location.href.split('#')[1].substr(1)
    this.previewFlag = this.currtUrl === this.routers[0] ? false : true
    this.nextFlag = this.currtUrl === this.routers[this.routers.length - 1] ? false : true

    this.$root.eventHub.$on('toPreview',()=>{
       this.preview()
    })
    this.$root.eventHub.$on('toNext',()=>{
       this.next()
    })
  },
  created() {
  },

  methods: {
    preview() {
      let url = this.routers[this.routers.indexOf(this.currtUrl) - 1]
      if (this.currtUrl === this.routers[0]) {
        return
      }
      this.$router.push(`${url}`)
    },

    next() {
      let url = this.routers[this.routers.indexOf(this.currtUrl) + 1]
      if (this.currtUrl === this.routers[this.routers.length - 1]) {
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
  .preview, .next
    width 40%
    padding 20px 0
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
    &.next
      padding-right 20px
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
