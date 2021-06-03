<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <side-bar>
      <router-view/>
  </side-bar>
</template>

<script>
import Sidebar from './components/SideBar.vue';

export default {
  components: {
    'side-bar': Sidebar
  },
  data() {
    return {
      template: ''
    }
  },
  mounted(){
      // Clear the browser cache data in localStorage when closing the browser window
      window.onbeforeunload = function () {
          var storage = window.localStorage;
          storage.clear()
      }
  }
}
</script>

<style lang="scss">
html{
  // overflow-y: scroll;
}

html, body {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2b2b2b;
  background-color: #F5F9FC;
  height: 100vh;
  overflow-y: scroll;
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
