<template>
  <div id="app">
    <mu-appbar title="GiMiSai" class="gimisai-appbar">
        <!---<mu-button icon slot="left" @click="toggle()"><span class="iconfont iconhome_menu"></span></mu-icon></mu-button>-->
        <mu-button flat slot="right" @click="openabout"><span class="iconfont iconaboutus"></span></mu-button>
        <mu-button flat slot="right" v-on:click="min">_</mu-button>
        <mu-button flat slot="right" v-on:click="close">X</mu-button>
    </mu-appbar>
    <Mainform></Mainform>
    <mu-dialog transition="slide-bottom" fullscreen :open.sync="aboutFullScreen">
        <mu-appbar title="关于 GiMiSai" class="gimisai-appbar">
          <mu-button flat slot="right" @click="closeaboutFullScreen">X</mu-button>
        </mu-appbar>
    </mu-dialog>
  </div>
</template>

<script>
import Mainform from './components/GiMiSai-main'
import { ipcRenderer } from 'electron' //for web
export default {
  name: 'App',
  data(){
    return {
        aboutFullScreen: false
    }
  },
  components: {
    Mainform
  },
  methods: {
    openabout () {
      this.aboutFullScreen = true;
    },
    closeaboutFullScreen () {
      this.aboutFullScreen = false;
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
