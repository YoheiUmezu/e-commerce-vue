<template>
  <div id="app">
    <app-header />
    <Home />
    <Menu />
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'

export default {
  name: 'app',
  components: {
    appHeader: Header,
    Home,
    Menu
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
