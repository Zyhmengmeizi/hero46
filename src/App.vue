<template>
<div>
 <!-- 头部 -->
 <app-header></app-header>
 <!-- 侧边栏 -->
 <app-sidebar></app-sidebar>
 <!-- 主内容区域 -->
  <router-view></router-view>
</div>
</template>

<script>
 // 导入header组件
 import AppHeader from './components/AppHeader.vue';
 import AppSidebar from './components/AppSidebar.vue';
  // ES6到出模块的语法
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components:{
      AppHeader,
      AppSidebar
    }
}
// webpack支持各种模块化的语法 CommonJS AMD ES6
// module.exports = {

// }
</script>

<style>

</style>
