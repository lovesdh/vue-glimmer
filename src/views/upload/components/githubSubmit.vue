<script setup>
import { ref } from 'vue';
import {useUserStore} from '@/stores/user'

const username = ref('');
const password = ref('');
const student_ID = ref('');
const name = ref('');

const login = ref(true);

const checkInputs = () => {
    if(login.value){
        if (student_ID.value !== '' && password.value !== '') {
            return true;
        } else {
            alert("请输入学号和密码！");
            return false;
        }
    }
    else{
        if (username.value !== '' && student_ID.value !== '' && name.value !== '' && password.value !== '') {
            return true;
        } else {
            alert("请完善个人注册信息！");
            return false;
        }
    }
};

const userStore =  useUserStore()

const dologin = ()=>{
    if(checkInputs()){
        loginAPI({ student_ID, password })
        // 1. 提示用户
        ElMessage({ type: 'success', message: '登录成功' })

        userStore.getUserInfo({ student_ID, password })

        // 2. 跳转首页
        router.replace({ path: '/' })
    }
}
</script>

<template>

  <div class="main">
    <div class="right">
      <div class="right_main">
        <div class="input_area">
            <div v-if="!login" class="user_name">
                <input v-model="username" type="text" placeholder="用户名">
            </div>
            <div class="student_ID">
                <input v-model="student_ID" type="text" placeholder="学号">
            </div>
            <div v-if="!login" class="name">
                <input v-model="name" type="text" placeholder="姓名">
            </div>
            <div class="password">
                <input v-model="password" type="password" placeholder="密码">
            </div>
            <div v-if="login" class="input_btn">
                <button @click="dologin">登录</button>
            </div>
            <div v-else class="input_btn">
                <button @click="checkInputs">注册</button>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>