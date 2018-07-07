<template>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
     <!--    <a class="btn btn-success" href="add.html">Add</a> -->
     <router-link class="btn btn-success" to="/heroes/add">Add</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="item.id" v-for="(item,index) in list">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                  <a href="edit.html">edit</a>
                  &nbsp;&nbsp;
                  <a href="" @click.prevert="handelDelete(item.id)">delete</a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
  // 导入模块
  import axios from 'axios';

  export default {
    data(){
      return {
        list:[]
      }
    },
    created(){
       this.loadDate();
    },
    methods:{
      loadDate(){
        axios
             .get('http://localhost:3000/heroes')
             .then((res)=>{
                const {data , status} = res;
                if(status === 200){
                  this.list = data;
                }
             });
        },
      handelDelete(id){
          if(!confirm('是否确认删除？')){
            return;
          }
          axios
               .delete(`http://localhost:3000/heroes/${id}`)
               .then((res)=>{
                if(res.status === 200){
                   this.loadDate();
                 }else{
                  alert('删除失败')
                 }
               })
               .catch((err)=>{
                 console.log(err)
               })


        }
     }
  }
</script>

<style>

</style>
