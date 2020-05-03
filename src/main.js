import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import './assets/styles/iconfont.css'
import fastClick from 'fastclick'
// reset.css用于统一不用浏览器的效果 border.css用于不同像素分辨率的边框问题
// iconfont.css是图标文件
//fastClick是为了防止点击事件三秒后才出发的问题
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
