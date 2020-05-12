<template>
  <div id="app">
<!--    router-view是这个网址对应的组件，这里其实是引用了index.js路由引用的Home.vue组件-->
   <keep-alive exclude="Detail">
<!--     exclude="Detail"代表detail组件不会被缓存-->
<!--     keep-alive是路由加载一次后存储在缓存中，防止每次更换页面都要发送ajax请求-->
    <router-view/>
   </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 0px;
}
</style>
