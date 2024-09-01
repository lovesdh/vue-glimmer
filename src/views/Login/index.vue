<script setup>
import { ref,computed } from 'vue';
import { useRouter } from 'vue-router'
import { getRegisterCodeAPI } from '../../apis/user'

const username = ref('');
const password = ref('');
const student_ID = ref('');
const name = ref('');
const email = ref('');
const identifyingCode = ref('');
const isEmailFilled = computed(() => email.value.trim() !== '');

var realRegisterCode = ref('');

const router = useRouter();

const login = ref(true);

const checkInputs = () => {
    if(login.value){
        if (username.value !== '' && password.value !== '') {
            return true;
        } else {
            alert("请输入用户名和密码！");
            return false;
        }
    }
    else{
        if (username.value !== '' && student_ID.value !== '' && name.value !== '' && password.value !== '' && email.value !== '') {
            if(identifyingCode.value == ''){
                alert("请输入邮箱验证码！");
            } else{
                return true;
            }
        } else {
            alert("请完善个人注册信息！");
            return false;
        }
    }
};

const dologin = async () => {
    if (checkInputs()) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": username.value,
        "password": password.value
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://www.glimmer.org.cn:25000/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.data.status === 1) {
                localStorage.setItem('token', result.data.message);
                ElMessage({ type: 'success', message: '登录成功' });
                router.push('/upload');
            } else {
                ElMessage({ type: 'error', message: '登录失败，请检查用户名和密码' });
            }
        })
        .catch(error => console.log('error', error));
    }
}

const getRegisterCode = async () => {
    const response = await getRegisterCodeAPI(email.value);
    console.log(response);
    realRegisterCode.value = response.data.message;
};

// const doregister = ()=>{
//     if(checkInputs()){
//         registerAPI({ username,password,student_ID,name,email })
//         if (realRegisterCode.value == identifyingCode.value) {
//             // 1. 提示用户
//             ElMessage({ type: 'success', message: '注册成功' })
//             userStore.getUserInfo({ username, password,student_ID,name,email })

//             // 2. 跳转首页
//             router.push('/upload');
//         }   else{
//             alert('验证码错误');
//         }
//     }
// }


const doregister = ()=>{
    if(checkInputs()){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": username.value,
        "password": password.value,
        "email": email.value,
        "name": name.value,
        "studentid": student_ID.value
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://www.glimmer.org.cn:25000/signup", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        if (realRegisterCode.value == identifyingCode.value) {
            // 1. 提示用户
            ElMessage({ type: 'success', message: '注册成功' })
            // userStore.getUserInfo({ username, password,student_ID,name,email })

            // 2. 重新加载
            window.location.href = '/login';
        }   else{
            alert('验证码错误');
        }
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
    <div id="background"></div>
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
            <strong>招新选题</strong>
            <p>Web前后端，机器学习……</p>
            </li>
            <li>
            <i class="jober_i2"></i>
            <strong>招新范围</strong>
            <p>大一友友</p>
            </li>
        </ul>
        </div>
    </div>
    <div class="right">
        <div class="right_main">
        <h3 v-if="login" class="title">微光账号登录</h3>
        <h3 v-else class="title">微光账号注册</h3>
        <div v-if="!login" class="input_area">
            <div class="registerImformation" style="width: 48%;">
                <input v-model="name" type="text" placeholder="姓名">
            </div>
            <div class="registerImformation" style="width: 47.5%;margin-right: 0%">
                <input v-model="student_ID" type="text" placeholder="学号">
            </div>
            <div class="registerImformation" style="width: 100%;">
                <input v-model="username" type="text" placeholder="用户名">
            </div>
            <div class="registerImformation" style="width: 100%;">
                <input v-model="password" type="password" placeholder="密码">
            </div>
            <div class="registerImformation" style="width: 100%;">
                <input v-model="email" type="text" placeholder="邮箱">
            </div>
            <div class="registerImformation" style="width: 67%;margin-bottom: 20px;">
                <input v-model="identifyingCode" type="text" placeholder="邮箱验证码">
            </div>
            <el-button type="primary" id="getCode" :disabled="!isEmailFilled" @click="getRegisterCode">获取验证码</el-button>
            <div class="input_btn" style="margin-top: 5px;">
                <button @click="doregister">注册</button>
            </div>
        </div>
        <div v-else class="input_area">
            <div class="student_ID">
                <input v-model="username" type="text" placeholder="用户名">
            </div>
            <div class="password">
                <input v-model="password" type="password" placeholder="密码">
            </div>
            <div class="input_btn">
                <button @click="dologin">登录</button>
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

    #background{
        background-size: cover;
        height: 100%;
        width: 100%;
        position: page;
        top:0px;
        left:0px;
        right:0px;
        bottom:0px;
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

    .registerImformation{
        margin-top: 20px;
        margin-right: 15px;
        position: relative;
        border: 1px solid #d0d2d9;
        height: 43px;
        border-radius: 8px;
        box-sizing: border-box;
        transition: all .2s linear;
        padding: 6px 20px;
        float: left;
    }
    .registerImformation:hover {
        border-color: #2575fc;
    }
    .registerImformation input {
        border: none;
        outline: none;
        display: block;
        width: 100%;
        font-size: 18px;
        line-height: 24px;
        height: 28px;
        box-sizing: border-box;
        border-radius: 8px;
    }

    #getCode{
        margin-top: 25px;
        float: left;
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
