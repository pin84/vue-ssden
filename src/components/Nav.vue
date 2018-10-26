<template>
  <div class="wrapper" @click="SHNav" >
    <h1 class="bookname">新时代大学英语</h1>
    <ul class="nav">
      <li class="preview">目录</li>
    </ul>
    <!-- the demo root element -->
    <ul id="list">
      <item class="item" :model="data.unitOne" />
      <item class="item" :model="data.unitTwo"  />
    </ul>
  </div>

</template>
<script>
import axios from 'axios'
import item from './topFoot/Tree'
export default {
  data() {
    return {
      data: {
        unitOne: {
          name: 'Unit 1 Communication',
          children: [
            // { name: 'Part One Reading' },
            // { name: 'wat' },
            // { name: 'aaa' },
            {
              name: 'Part One Reading',
              children: [
                {
                  name: 'Text A Waiting for Ages!',
                  children: [
                    { name: 'Section 1 Vocabulary' },
                    { name: 'Section 2 Sentence Analysis' }
                  ]
                },
              ]
            },
            {
              name: 'Part Two Grammar Focus',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            },
            {
              name: 'Part Three Practical Writing',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            },
          ]
        },
        unitTwo: {
          name: 'Unit 2 Communication',
          children: [
            // { name: 'Part One Reading' },
            // { name: 'wat' },
            // { name: 'aaa' },
            {
              name: 'Part One Reading',
              children: [
                {
                  name: 'Text A Waiting for Ages!',
                  children: [
                    { name: 'Section 1 Vocabulary' },
                    { name: 'Section 2 Sentence Analysis' }
                  ]
                },
              ]
            },
            {
              name: 'Part Two Grammar Focus',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            },
            {
              name: 'Part Three Practical Writing',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            },
          ]
        },
        flag: false
      }
    }
  },
  components: {
    item
  },
  mounted() {
    // this.initData()
    this.$root.eventHub.$on('SHNav', this.SHNav)
  },
  methods: {
    abc(){
      console.log('abc')
    },
    SHNav(e) {
      if(e){
        // console.log(e.target);

      }

      // if (!this.flag) {
      //   this.$el.style.transform = 'translateX(0%)'
      //   this.flag = true
      // } else {
      //    this.$el.style.transform = 'translateX(-100%)'
      //    this.flag = false
      // }

    },

    // liTouchstart(e) {
    //   e.target.style.background = '#FFCC00'
    // },

    // toDetailPage(e) {
    //   let target = e.target
    //   target.style.background = ''
    //   this.$root.eventHub.$emit('getData', target.innerText) //detail.vue
    //   this.$root.eventHub.$emit('showNav') //book.vue
    // },

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
  overflow-y auto
  overflow-x auto
  transition 800ms
  transform translateX(0%)
  opacity .8
  .bookname
    text-align center
    font-size 18px
    padding-top 10px
  .nav .preview
    margin-left -8px
    padding 10px 0 5px 10px
    box-sizing border-box
    border-bottom 1px solid #CCCCCC
  #list
    margin-top 10px
    margin-left -5px
    line-height 1.5em
    list-style-type disc
    box-sizing:border-box;
  // .list
  //   padding 10px
  //   box-sizing border-box
  //   position fixed
  //   width 97%
  //   top 66px
  //   bottom 0
  //   overflow-y scroll
  //   overflow-x hidden
  //   li
  //     padding 5px
  //     border-bottom 1px solid #ccc
  //     &:first-child
  //       padding-top 10px

</style>