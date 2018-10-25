<template>
  <div class="wrapper">
    <h1 class="bookname">新时代大学英语</h1>
    <ul class="nav">
      <li class="preview">目录</li>
    </ul>
    <!-- <ul class="list" ref="list">
      <li v-for="(item,index) in titles" :key="index" @touchstart='liTouchstart' @touchend='toDetailPage' ref="oli">
        {{item.title}}
      </li>
    </ul> -->

    <!-- <ul  v-for="(unit,index) in units" :key="index">
      <span>{{unit}}</span>
      <li  v-for="(part,index) in parts" :key="index">
        {{part}}
      </li>
    </ul> -->
    <div>
      <span class="title">Unit 1 Communication</span>
      <ul>
        <li>
          <span>Part One Reading</span>
          <div>
            <div class="tname">Text A Waiting for Ages! </div>
            <div>
              <span>Section 1 Vocabulary</span>
              <span>Section 2 Sentence Analysis</span>
            </div>
          </div>
        </li>
      </ul>
    </div>



  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      titles: [],

      units: ['Unit 1 Communication', 'Unit 2 Communication'],
      parts: ['Part One Reading', , 'Part Two Grammar Focus', 'Part Three Practical Writing', 'Part Four Translation Focus'],
     


      texts: ['Text A Waiting for Ages!'],
      section: {
        s1: 'Section 1 Vocabulary',
        s2: 'Section 2 Sentence Analysis',
      },


      unit: {
        title: 'Communication',
        parts: {
          part_1: {
            title: 'Reading',
            text: {
              title: 'Text A Waiting for Ages!',
              Section_1: 'Vocabulary',
              Section_2: 'Sentence Analysis',
            }
          },
          part_2: {
            title: 'Part Two Grammar Focus',
            p_detail: {
              title: '名词'

            }
          }
        }
      }
    }
  },


  mounted() {
    this.initData()
  },
  methods: {
    liTouchstart(e) {
      e.target.style.background = '#FFCC00'
    },

    toDetailPage(e) {
      let target = e.target
      target.style.background = ''
      this.$root.eventHub.$emit('getData', target.innerText) //detail.vue
      this.$root.eventHub.$emit('showNav') //book.vue
    },

    initData() {
      axios.get('http://192.168.3.107:9000/web/dfbook/findBookPreview').then((response) => {
        this.titles = response.data
      })
    }


  }
}
</script>
<style lang='stylus' scoped>
.wrapper
  width 100% 
  height 100%
  background #FFFFCC
  position relative
  // transform scale3d(1,1,1)
  .bookname
    text-align center
    font-size 18px
    padding-top 10px
  .nav .preview
    padding 10px 0 0 10px
    box-sizing border-box
    border-bottom 1px solid #CCCCCC
  .list
    padding 10px
    box-sizing border-box
    position fixed
    width 97%
    top 66px
    bottom 0
    overflow-y scroll
    overflow-x hidden
    li
      padding 5px
      border-bottom 1px solid #ccc
      &:first-child
        padding-top 10px

</style>