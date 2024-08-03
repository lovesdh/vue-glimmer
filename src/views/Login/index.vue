<script setup>
import { ref } from 'vue';
import {useUserStore} from '@/stores/user'

const userName = ref('');
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
        if (userName.value !== '' && student_ID.value !== '' && name.value !== '' && password.value !== '') {
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

const toggleLoginRegister = () => {
    login.value = !login.value;
    const mainElement = document.querySelector('.main');
    if (mainElement) {
        mainElement.style.height = login.value ? '420px' : '560px';
        mainElement.style.top = login.value ? '57%' : '50%';
    }
};

</script>

<template>
  <div class="main">
    <div class="left">
      <div class="logo">
        <div class="logo_img">
          <img src="/logo1.png" alt="Logo">
        </div>
        <strong>微光</strong>
        <p>心有微光，不惧黑暗</p>
      </div>
      <div class="jober active">
        <ul>
          <li>
            <i class="jober_i1"></i>
            <strong>发展方向</strong>
            <p>Web前后端，机器学习……</p>
          </li>
          <li>
            <i class="jober_i2"></i>
            <strong>招新范围</strong>
            <p>大一和大二友友</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="right_main">
        <h3 v-if="login" class="title">微光账号登录</h3>
        <h3 v-else class="title">微光账号注册</h3>
        <div class="input_area">
            <div v-if="!login" class="user_name">
                <input v-model="userName" type="text" placeholder="用户名">
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
      <div v-if="login" class="toggleLoginRegister" @click="toggleLoginRegister">
        还没有账号，我想注册
      </div>
      <div v-else class="toggleLoginRegister" @click="toggleLoginRegister">
        已有账号，我想登录
      </div>
    </div>
  </div>
</template>

<style>
    a, b, .main, button, dd, div, dl, em, footer, form, h1, h2, h3, h4, h5, h6, i, input, label, li, nav, p, select, span, td, textarea, u, ul {
        padding: 0;
        margin: 0;
        -webkit-tap-highlight-color: transparent;
        -webkit-text-size-adjust: none;
    }
    li, ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: white;
    }
    a:active, a:focus, a:hover, button, input, textarea {
        outline: 0;
    }
    a:hover {
        text-decoration: none;
        -webkit-transition: all linear .2s;
        transition: all linear .2s;
    }
    img {
        border: none;
    }
    @font-face {
        font-family: 'icomoon';
        src: url('../fonts/icomoon.eot?8mntfy');
        src: url('../fonts/icomoon.eot?8mntfy#iefix') format('embedded-opentype'),
             url('../fonts/icomoon.ttf?8mntfy') format('truetype'),
             url('../fonts/icomoon.woff?8mntfy') format('woff'),
             url('../fonts/icomoon.svg?8mntfy#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: block;
    }
    * {
        box-sizing: border-box;
    }
    body {
        height: 100vh;
        width: 100vh;
        background: #4c64ec url(https://img.bosszhipin.com/static/file/2022/zlqc2m9fao1667185843533.png) bottom / 100% auto no-repeat;
    }
    .main {
        position: absolute;
        top: 57%;
        left: 50%;
        width: 728px;
        height: 420px;
        margin-left: -364px;
        margin-top: -290px;
        background: #fff;
        box-shadow: 0 6px 13px 0 rgba(0, 0, 0, .1);
        border-radius: 28px;
        z-index: 2;
        box-sizing: border-box;
    }
    .left {
        float: left;
        width: 240px;
        height: 100%;
        background: linear-gradient(214deg, #dffbff, #faf6f3);
        border-radius: 28px 0 0 28px;
        padding-left: 27px;
        font-size: 14px;
        box-sizing: border-box;
    }
    .logo {
        height: 52px;
        margin-top: 68px;
    }
    .logo_img {
        float: left;
        width: 44px;
        height: 60px;
        overflow: hidden;
        margin-right: 10px;
    }
    .logo_img img {
        height: 59px;
    }
    .logo strong {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: rgb(86, 152, 196);
    }
    .logo p {
        font-size: 14px;
        color: rgb(86, 152, 196);
        line-height: 20px;
        margin-top: 2px;
    }
    .jober {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s, visibility 0.5s;
        position: absolute;
        width: 100%;
    }
    .jober.active {
        opacity: 1;
        visibility: visible;
    }
    .jober li {
        margin-top: 50px;
    }
    .jober i {
        float: left;
        width: 42px;
        height: 42px;
        background: url(https://img.bosszhipin.com/static/file/2022/5j2r4fg3uy1666342531695.png) no-repeat;
        background-size: 42px auto;
    }
    .jober .jober_i1 {
        background-position: 0 0;
    }
    .jober .jober_i2 {
        background-position: 0 -42px;
    }
    .jober strong {
        display: block;
        margin-top: 2px;
        margin-left: 53px;
        font-size: 14px;
        font-weight: 500;
        font-style: normal;
        color: #666;
        line-height: 20px;
    }
    .jober p {
        display: block;
        margin-left: 53px;
        margin-top: 2px;
        font-size: 13px;
        color: #999;
        line-height: 18px;
    }
    .right {
        float: left;
        position: relative;
        width: 488px;
        padding: 48px 0;
    }
    .right_main {
        position: relative;
        width: 360px;
        margin: 0 auto;
    }
    .title {
        font-size: 22px;
        font-weight: 500;
        color: #222;
        line-height: 30px;
        text-align: center;
    }
    .user_name,.student_ID,.name, .password {
        margin-top: 30px;
        position: relative;
        border: 1px solid #d0d2d9;
        height: 48px;
        border-radius: 8px;
        box-sizing: border-box;
        transition: all .2s linear;
        padding: 0 20px;
    }
    .user_name:hover,.student_ID:hover,.name:hover, .password:hover {
        border-color: #2575fc;
    }
    .user_name input,.student_ID input,.name input, .password input {
        border: none;
        outline: none;
        display: block;
        width: 100%;
        font-size: 16px;
        line-height: 46px;
        height: 46px;
        box-sizing: border-box;
        border-radius: 8px;
    }
    .input_btn {
        margin-top: 30px;
    }
    .input_btn button {
        display: block;
        width: 100%;
        background-color: #1E9600;
        border-radius: 20px;
        line-height: 48px;
        font-size: 18px;
        font-weight: bold;
        border: 2px solid transparent;
        cursor: pointer;
        color: #FFFFFF;
        padding: 0;
        transition: all .3s ease;
        background-clip: padding-box;
    }
    .input_btn button:hover {
        background-color: #FFF;
        color: #1E9600;
        background-size: 100%;
        border-radius: 0px;
        border: 2px solid #1E9600;
    }

    .toggleLoginRegister {
        position: absolute;
        right: 20px;
        bottom: -10px;
        display: inline-block;
        padding: 3px 6px;
        font-size: 13px;
        color: #007bff;
        border-radius: 5px;
        cursor: pointer;
        transition: color 0.3s, border-color 0.3s, transform 0.3s;
        border: 2px solid transparent;
    }
    .toggleLoginRegister:before {
        content: "\1F468";
        font-size: 15px;
        margin-right: 1px;
    }
    .toggleLoginRegister:hover {
        font-weight: 700;
        border-color: #0056b3;
        transform: scale(1.05);
    }
</style>
