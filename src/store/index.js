import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from "@/store/mutations";

Vue.use(Vuex)
  //这里是使用vuex创建公共数据
let deafultCity='伤害'
try {
  if (localStorage.city){
    deafultCity = localStorage.city
  }
}catch (e) {

}
//可以通过module对这个模块进行分类
export default new Vuex.Store({
  state,
  actions: {
    changeCity(ctx, city){
      console.log(city)
      //ctx用于调用mutations
      ctx.commit('changeCity',city)
    }
  },
  //mutations突变
  mutations
// : {
//   //state是上面的数据，city是传入的内容
//   changeCity(state, city){
//     state.city = city
//     //使用localStorage存储当前城市防止刷新就重置成广东
//     try {
//       localStorage.city=city
//     }catch (e) {
//
//     }
//
//   }
// }
  ,getters: {
    doubleCity(state){
      return state.city+' '+state.city
    }
  }
})
