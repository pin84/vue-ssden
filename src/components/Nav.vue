<template>
  <div class="wrapper" @click="SHNav">
    <h1 class="bookname">新时代大学英语</h1>
    <ul class="nav">
      <li class="preview">目录</li>
    </ul>
    <!-- the demo root element -->
    <ul id="nav">
      <item class="item" :model="data.unitOne" />
      <!-- <item class="item" :model="data.unitTwo" /> -->
    </ul>
  </div>

</template>
<script>
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
                { name: 'Text A Waiting for Ages!' },
                { name: 'Section 1 Vocabulary' },
                { name: 'Section 2 Sentence Analysis' }
              ]
            },
            {
              name: 'Part Two Grammar Focus',
              children: [
                {
                  name: '名词',
                  children: [
                    { name: '1. 名词的分类' },
                    { name: '2. 名词的格' }
                  ]
                },
              ]
            },
            {
              name: 'Part Three Practical Writing',
              children: [
                {
                  name: 'Business Card',
                  // children: [
                  //   { name: 'hello' },
                  //   { name: 'wat' }
                  // ]
                },
              ]
            },
            {
              name: 'Part Four Translation Focus',
              children: [
                {
                  name: '词义的选择',
                  children: [
                    { name: '1. 根据搭配确定词义' },
                    { name: '2. 根据上下文确定词义' },
                    { name: '3. 根据词性确定词义' }
                  ]
                },
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
      },
      flag: true,
      exclude: ['Unit 1 Communication', 'Part One Reading', 'Part Two Grammar Focus', '名词', 'Part Three Practical Writing', 'Part Four Translation Focus', '词义的选择', '[+]', '[-]']
    }
  },
  components: {
    item
  },
  mounted() {
    this.$root.eventHub.$on('SHNav', this.SHNav)
  },
  methods: {
    SHNav(e) {
      let target = e.target
      if (this.exclude.indexOf(target.innerText.trim()) === -1) {
        if (this.flag) {
          this.$el.style.transform = 'translateX(0%)'
          this.flag = false
        } else {
          this.$el.style.transform = 'translateX(-100%)'
          this.flag = true
        }
      }
    },




  }
}
</script>
<style lang='stylus' scoped>
.wrapper
  width 100% 
  height 100%
  background #003333
  color #fff
  position relative
  overflow-y auto
  overflow-x auto
  transition 800ms
  transform translateX(-100%)
  // opacity .8
  .bookname
    text-align center
    font-size 18px
    padding-top 10px
  .nav .preview
    margin-left -8px
    padding 10px 0 5px 10px
    box-sizing border-box
    border-bottom 1px solid #000
  #nav
    margin-top 10px
    margin-left -5px
    line-height 1.8em
    list-style-type disc
    box-sizing:border-box;

</style>