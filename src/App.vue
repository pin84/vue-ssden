<template>
  <div id="app">
    <Index />
    <!-- <FileBtn /> -->
  </div>
</template>

<script>
import Index from './components/index.vue'
import FileBtn from './components/FileBtn.vue'

export default {
  name: 'app',
  components: {
    Index,
    FileBtn
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
