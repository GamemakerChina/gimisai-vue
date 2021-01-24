import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/GiMiSai-main'
import GMS2 from '@/components/layout/apps/app-gms2'
import GMS from '@/components/layout/apps/app-gms'
import Apps from '@/components/layout/GiMiSai-apps'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Main},
    {path: '/', component: GMS2},
    {path: '/', component: GMS},
    {path: '/apps', component: Apps}
  ]
})
