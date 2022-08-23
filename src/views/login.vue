<template>
  <div class="login">
    <n-card title="后台管理登陆">
      <n-form
          ref="formRef"
          :model="state.form"
          :rules="rules"
          label-placement="left"
          label-width="auto"
          require-mark-placement="right-hanging"
          size="medium"
          :style="{
      maxWidth: '640px'
    }"
      >
        <n-form-item label="账号" path="userName">
          <n-input v-model:value="state.form.userName" placeholder="请输入账号" />
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input v-model:value="state.form.password" placeholder="请输入密码" />
        </n-form-item>
        <n-form-item label="记住" path="rePass">
          <n-checkbox v-model:checked="state.form.rePass" />
        </n-form-item>
        <n-button type="info" size="large" @click="login">
          登录
        </n-button>
      </n-form>
    </n-card>
  </div>
</template>
<!-- @login -->
<script>
export default {
  name: "login"
};
</script>
<script setup>
import {getCurrentInstance, reactive, onMounted,ref} from 'vue'
import {adminStore} from "@/store/index";
import Cookies from "js-cookie";
import { useRouter } from "vue-router";

const {proxy} = getCurrentInstance();
const formRef = ref(null);
const userStore = adminStore();
const router = useRouter();
const rules = {
  userName: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入账号'
  },
  password: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入密码'
  }
}

/*------------------------------------------------变量----------------------------------------------------*/
const state = reactive({
  form: {
    userName: '',
    password: '',
    rePass: false
  },
  redirect: undefined
});

//表格数据
/*----------------------------------------------生命周期--------------------------------------------------*/
onMounted(() => {
});

/*----------------------------------------------事件函数--------------------------------------------------*/

const login = (e) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      // 勾选了需要记住密码设置在cookie中设置记住用户明和名命
      if (state.form.rePass) {
        Cookies.set("userName", state.form.userName, { expires: 30 });
        Cookies.set("password", state.form.password, {
          expires: 30
        });
        Cookies.set("rePass", state.form.rePass, { expires: 30 });
      } else {
        // 否则移除
        Cookies.remove("userName");
        Cookies.remove("password");
        Cookies.remove("rePass");
      }
      userStore
          .login(state.form)
          .then(() => {
            router.push({ path: state.redirect || "/test" });
          })
    }else {
      console.log(errors)
    }
  })
}

</script>
<style rel="stylesheet/scss" lang="scss">
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  width:600px;
  height:400px;
  margin-left:-300px;
  margin-top:-200px;
}
</style>
