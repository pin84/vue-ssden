<template>
  <div id="app">
    <!-- <Index /> -->
    <!-- <FileBtn /> -->
    <Book />
  </div>
</template>

<script>
import Index from './components/index.vue'
import FileBtn from './components/FileBtn.vue'
import Book from './components/Book'

export default {
  name: 'app',
  components: {
    Index,
    FileBtn,
    Book
  }
}
</script>

<style>
@import url('../public/css/myreset.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  -webkit-tap-highlight-color: transparent;
}
/* li{
  list-style: none;
} */
</style>
