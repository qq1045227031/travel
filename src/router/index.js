import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home/Home";
import City from "../pages/city/City"
import Detail from "../pages/detail/Detail"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      //如果项目很大，使用异步组件，每加载一次页面发送一次http请求,可以删除上面的import
      // component: ()=>import("../pages/home/Home")
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
    //:id是动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 解决页面切换页面滚轮位置不变的问题
  scrollBehavior (to, from, savedPosition) {
    //x y 是初始位置设置
    return { x: 0, y: 0 }
  }
})
