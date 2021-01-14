<template>
  <div id="app">
    <mu-appbar title="GiMiSai" class="gimisai-appbar">
        <!---<mu-button icon slot="left" @click="toggle()"><span class="iconfont icon-home_menu"></span></mu-icon></mu-button>-->
        <mu-button flat slot="right"><span class="iconfont icon-upload-demo"></span></mu-button>
        <mu-button flat slot="right"><span class="iconfont icon-mzicon-setting"></span></mu-button>
        <mu-button flat slot="right"><span class="iconfont icon-aboutus"></span></mu-button>
        <mu-button flat slot="right" v-on:click="min">_</mu-button>
        <mu-button flat slot="right" v-on:click="close">X</mu-button>
    </mu-appbar>
    <Mainform></Mainform>
    <!---<sidebar :show="open" v-on:changeState="toggle"></sidebar>-->
  </div>
</template>

<script>
import Mainform from './components/GiMiSai-main'
import { ipcRenderer } from 'electron' //for web
export default {
  name: 'App',
  data(){
    return {
        open: true
    }
  },
  components: {
    Mainform
  },
  methods: {
    toggle(msg){
      console.log(msg);
      this.open = !this.open
    },
    min:function(){
        ipcRenderer.send('min');
    },
    close:function(){
        ipcRenderer.send('close');
    }
  }
}
</script>
