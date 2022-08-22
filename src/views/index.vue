<template>
  <div class="index">
   <div id="header">
     <div class="header">
       <div class="logo">logo</div>
       <div class="user">user</div>
     </div>
   </div>
   <div id="content">
     <n-divider>Self 响应式</n-divider>
     <n-grid cols="2 400:3 600:4 900:5" :x-gap="12" :y-gap="8" :cols="4">
       <n-grid-item v-for="item in 12">
         <div :class="item % 2 === 0 ?'light-green' : 'green'">
           {{item}}
         </div>
       </n-grid-item>
     </n-grid>
   </div>
   <div id="footer"></div>
  </div>
</template>
<!-- @index -->
<script>
export default {
  name: "index"
};
</script>
<script setup>
import { getCurrentInstance,reactive,onMounted } from 'vue'
const {proxy} = getCurrentInstance();

/*------------------------------------------------变量----------------------------------------------------*/
const state = reactive({});

//表格数据
/*----------------------------------------------生命周期--------------------------------------------------*/
onMounted(() => {
});

/*----------------------------------------------事件函数--------------------------------------------------*/

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
#header {
  position: fixed;
  width: 100%;
  top: 0;
  .header {
    height: 80px;
    display: flex;
    background-color: #ebf0f6;
    border-bottom: 3px solid #e8e8e8;
    justify-content: space-between;
  }
  .logo,.user{
    margin-top: 25px;
  }
  .logo{
    margin-left: 75px;
  }
  .user {
    margin-right: 75px;
  }
}
#content {
  margin: 95px 200px;
  .light-green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  .green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.24);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
}
#footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 100px;
  background-color: rgba(0, 128, 0, 0.12);
  border-top: 3px solid #e8e8e8;
}
</style>
