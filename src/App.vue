<template>
  <div id="app">
    <Book />
  </div>
</template>

<script>
import Book from './components'

export default {
  name: 'app',
  components: {
    Book
  }
}
</script>

<style>
@import url('./assets/css/myreset.css');
@font-face{
  font-family:'myFont';
  src:url('./assets/fonts/Ksphonet.ttf')
}
#app {
  font-family: 'Avenir', Helvetica, Arial,'myFont', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  color: #000;
  /* margin-top: 60px; */
  -webkit-tap-highlight-color: transparent;
  font-size:1.6rem
}

.router-link-active{
  background: #006699;
}

</style>
