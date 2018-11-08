<template>

  <li>
    <div class="title" :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">

      <span @touchstart='ts' @touchend="toRouter"> {{ model.name }}</span>

      <span class="symbol" @touchstart="sts" @touchend='ste' v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>

    <ul v-show="open" v-if="isFolder">
      <item class="item" v-for="(model, index) in model.children" :key="index" :model="model">
      </item>
      <!-- <li class="add" @click="addChild">+</li> -->
    </ul>
  </li>

</template>
<script>
export default {
  name: 'item',
  props: {
    model: {}
  },
  data: function () {
    return {
      open: false,
      
        
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    },
    routPath: function () {
      let path = ''

    }
  },
  mounted() {
    // console.log(this.model.name );
  },
  methods: {
    sts(e) {
      e.target.style.background = '#6699CC'
    },
    ste(e) {
      e.target.style.background = ''
    },

    ts() {
      this.$el.style.background = '#6699CC'
    },
    toRouter(e) {
      this.$el.style.background = ''
      let url = e.target.innerText.replace(/\s/g, '')



      switch (url) {
        case '名词':
          // url = 'PartTwoGrammarFocus01'
          return
          break
        case '1.名词的分类':
          // url = 'PartTwoGrammarFocus02'
          return
          break
        case '2.名词的格':
          // url = 'PartTwoGrammarFocus03'
          return
          break
        case '词义的选择':
          url = 'PartFourTranslationFocus01'
          break
        case '1.根据搭配确定词义':
          url = 'PartFourTranslationFocus02'
          break
        case '2.根据上下文确定词义':
          url = 'PartFourTranslationFocus03'
          break
        case '3.根据词性确定词义':
          url = 'PartFourTranslationFocus04'
          break
      }
      this.$router.push(`/${url}`)
    },

    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
ul , li 
  margin-left 8px 
  padding 0px 
  // list-style outside  

.symbol 
  padding 5px

.item {
  cursor: pointer;
}
.bold {
  font-weight: 500;
}
ul {
  line-height: 1.5em;
}

.title
  display inline-block
</style>