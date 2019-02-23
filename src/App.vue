<template>
  <div id="app">
    <mu-appbar title="GiMiSai" class="gimisai-appbar" color="primary" :class="{'nav-hide': !open}">
        <mu-button icon slot="left" @click="toggle()"><mu-icon value="menu"></mu-icon></mu-button>
        <mu-button flat slot="right">_</mu-button>
        <mu-button flat slot="right">X</mu-button>
    </mu-appbar>
    <sidebar :show="open" v-on:changeState="toggle"></sidebar>
  </div>
</template>

<script>
import Sidebar from './components/GiMiSai-sidebar'
export default {
  name: 'App',
  data(){
    return {
        open: true
    }
  },
  components: {
    Sidebar
  },
  methods: {
    toggle(msg){
      console.log(msg);
      this.open = !this.open
    }
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
}
.gimisai-appbar {
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  transition: all .45s;
}
.gimisai-appbar.nav-hide {
  left: 0;
}
</style>
