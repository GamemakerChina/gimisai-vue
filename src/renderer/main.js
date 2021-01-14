import Vue from 'vue'
import axios from 'axios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import App from './App'
import router from './router'
//import store from './store'

const drag = require('electron-drag')

Vue.use(MuseUI)
//if (!process.env.IS_WEB)
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
drag(".mu-appbar")