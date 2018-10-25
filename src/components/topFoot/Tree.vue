<template>


  <li>
    <!-- <div  :class="{bold: isFolder}" @click="toggle" @dblclick="changeType" @touchstart='ts' @touchend='te'>
      {{ model.name }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div> -->
    <div class="title"   :class="{bold: isFolder}" @click="toggle" @dblclick="changeType" @touchstart='ts' @touchend='te'>
      {{ model.name }}
      <span  v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
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
    routPath:function(){
      let path = ''

    }
  },
  mounted(){
    // console.log(this.model.name );
  },
  methods: {
    ts() {
      this.$el.style.background = '#6699CC'
    },
    te(e) {
      let url = (e.target.innerText).match(/[a-zA-Z0-9]/g).join('')
      console.log('tree.vue====te',url.substr(0,4));
      this.$el.style.background = ''
      if(url.substr(0,4) === 'Unit'){
        this.$router.push(`${url}`)
      }
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