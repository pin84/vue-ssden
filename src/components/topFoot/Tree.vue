<template>

  <li>
    <div class="title" :class="{bold: isFolder}" @click="toggle" @dblclick="changeType" >

      <span  @touchstart='ts'  @touchend="toRouter">  {{ model.name }}</span>
      <!-- <router-link tag="span" :to="this.url" @touchstart.native='ts'  @click.native="toRouter">  {{ model.name }}</router-link> -->

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
      url:''
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
    ts() {
      this.$el.style.background = '#6699CC'
    },
    toRouter(e){
       this.$el.style.background = ''
      let url = e.target.innerText.replace(/\s/g,'')
      console.log('toRouter====',url);
      this.$router.push(`/${url}`)

      // if(!this.open){
      //   let  url = this.$el.innerText.match(/[a-z0-9A-Z]/g).join('')
      //   this.url = '/'+ url
      // }


      // console.log(url);
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