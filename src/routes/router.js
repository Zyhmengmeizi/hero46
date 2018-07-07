// 导入vue-router
import vue  from 'vue';
import VueRouter from 'vue-router';
// 注册组件
import HeroList from '../views/heroes/list.vue';
import EquipList from '../views/equips/list.vue';
import WeaponList from '../views/weapons/list.vue';
import HeroAdd from '../views/heroes/app.vue'

vue.use(VueRouter);
// 创建路由对象，配置路由规则
const router = new VueRouter({
  linkExactActiveClass :'active',
  routes:[
    // {name:'home',path:'/',redirect:'/heroes'},
    {name:'home',path:'/',redirect:{name:'heroes'}},
    {name:'heroes',path:'/heroes',component:HeroList },
    {name:'equips',path:'/equips',component:EquipList},
    {name:'weapons',path:'/weapons',component:WeaponList},
    {name:'heroadd',path:'/heroes/add',component:HeroAdd}
  ]
});
// 导出模块
export default router;
