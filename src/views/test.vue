<template>
  <div>
    <div v-for="(item) in state.linksList">
      <p>网站名称：{{item.title}}</p>
      <p>网站地址：{{item.url}}</p>
      <p>网站简介：{{item.disc}}</p>
      <p>网站图标：{{item.avatar}}</p>
    </div>
  </div>
</template>
<!-- @test -->

<script setup>
import { getCurrentInstance,reactive,onMounted } from 'vue'
import { getLinks } from '@/api/links'
const {proxy} = getCurrentInstance();

/*------------------------------------------------变量----------------------------------------------------*/
const state = reactive({
  linksList: []
});

//表格数据
/*----------------------------------------------生命周期--------------------------------------------------*/
onMounted(() => {
  getLinkInfo()
});

/*----------------------------------------------事件函数--------------------------------------------------*/
const getLinkInfo = () => {
  getLinks()
      .then((res) => {
        state.linksList = res
      })
}

</script>
<style rel="stylesheet/scss" lang="scss">
.test {
}
</style>
