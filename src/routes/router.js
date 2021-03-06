// 导入vue-router
import vue  from 'vue';
import VueRouter from 'vue-router';
// 注册组件
import HeroList from '../views/heroes/list.vue';
import EquipList from '../views/equips/list.vue';
import WeaponList from '../views/weapons/list.vue';
import HeroAdd from '../views/heroes/app.vue';
import HeroEdit from '../views/heroes/edit.vue'
vue.use(VueRouter);
// 创建路由对象
const router = new VueRouter({
  // linkExactActiveClass :'active',
  linkActiveClass :'active',
  //配置路由规则
  routes:[
    // {name:'home',path:'/',redirect:'/heroes'},
    {name:'home',path:'/',redirect:{name:'heroes'}},
    {name:'heroes',path:'/heroes',component:HeroList },
    {name:'equips',path:'/equips',component:EquipList},
    {name:'weapons',path:'/weapons',component:WeaponList},
    {name:'heroadd',path:'/heroes/add',component:HeroAdd},
    {name:'heroedit',path:'/heroes/edit/:id',component:HeroEdit}
  ]
});
// 导出模块
export default router;
