<template>
  <div id="app">
    <!-- <Index /> -->
    <!-- <FileBtn /> -->
    <Abc />
  </div>
</template>

<script>
import Index from './components/index.vue'
import FileBtn from './components/FileBtn.vue'
import Abc from './components/abc'

export default {
  name: 'app',
  components: {
    Index,
    FileBtn,
    Abc
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
li{
  list-style: none;
}
</style>
