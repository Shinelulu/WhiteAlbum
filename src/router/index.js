import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import EarthHome from "@/components/earthHome";
import WindowManage from "@/components/home/windowManage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WindowManage',
      component: WindowManage
    }
  ]
})
