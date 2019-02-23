/*jslint esversion: 6*/
import Vue from 'vue';
import Router from 'vue-router';
import Sidebar from '@/components/GiMiSai-sidebar';
import GMS2 from '@/components/layout/GiMiSai-nav-gms2';
import GMS from '@/components/layout/GiMiSai-nav-gms';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: Sidebar},
    {path: '/', component: GMS2},
    {path: '/', component: GMS}
  ]
});