import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//上下是引入轮播图包
import 'swiper/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import './assets/styles/iconfont.css'
import fastClick from 'fastclick'
import store from './store/index'
import 'babel-polyfill'

// reset.css用于统一不用浏览器的效果 border.css用于不同像素分辨率的边框问题
// iconfont.css是图标文件
//fastClick是为了防止点击事件三秒后才出发的问题
Vue.config.productionTip = false
fastClick.attach(document.body)
// 是用轮播图插件
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
