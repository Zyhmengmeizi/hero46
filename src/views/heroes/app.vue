<template>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="Sex">
      </div>
      <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Add</button>
    </form>
  </div>
</template>

<script >
  // import axios from 'axios';
  export default {
    data(){
      return {
       formData:{
        name:'',
        gender:''
       }
      }
    },
   methods:{
    handleAdd(){
     this.$http
          .post('heroes',this.formData)
          .then((res)=>{
            const {status,data} =res;
            if(status === 201){
              // 添加成功，跳转到英雄列表
              this.$router.push({name:'heroes'})
            }else{
              alert('添加失败');
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
