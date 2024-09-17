<script lang="ts" setup>
import { reactive,ref,nextTick,computed   } from 'vue';
import { useRouter } from 'vue-router'

let token = localStorage.getItem('token');

let direct = 1;

const router = useRouter();

// 获取自己做题情况
var myHeaders = new Headers();
myHeaders.append("token", token);

var requestOptions = {
   method: 'GET',
   headers: myHeaders,
   redirect: 'follow'
};

var data;
var c_scores;
var java_scores;
var web_scores;
var ml_scores;

fetch("http://www.glimmer.org.cn:25000/problem", requestOptions)
   .then(response => response.json())
   .then(result => {
    console.log(result);
    data = result.data;
    c_scores = data['c'];
    java_scores = data['java'];
    web_scores = data['web'];
    ml_scores = data['ml'];
    updateScores()
   })
   .catch(error => console.log('error', error));

// 答题表单
interface User {
  title: number;    // 题目
  score: number;    // 分数
}

const tableRowClassName = ({
  row,
}: {
  row: User;
}) => {
  if (row.score === 0) {
    return 'warning-row'; // 警告行
  } else if (row.score > 0) {
    return 'success-row'; // 成功行
  }
  return '';
}

const tableData = ref([
  {
    title: 1,
    score: -1,
  },
  {
    title: 2,
    score: -1,
  },
  {
    title: 3,
    score: -1,
  },
  {
    title: 4,
    score: -1,
  },
  {
    title: 5,
    score: -1,
  },
  {
    title: 6,
    score: -1,
  },
  {
    title: 7,
    score: -1,
  },
  {
    title: 8,
    score: -1,
  },
  {
    title: 9,
    score: -1,
  },
  {
    title: 10,
    score: -1,
  },
  {
    title: 11,
    score: -1,
  },
  {
    title: 12,
    score: -1,
  },
])

const filteredTableData = computed(() => {
  return tableData.value.filter(item => item.score !== -1);
});

const form = reactive({
  url: '',
  field: '',
  id: ''
});

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


const contentActiveIndex = ref('1')
const selectDetail = () => {
  contentActiveIndex.value = '1'
}
const selectSubmit = () => {
  contentActiveIndex.value = '2'

}

// 函数   
const onSubmit = async () => {
  try {
    console.log('提交的数据:', form);
    const raw = JSON.stringify(form);

    var myHeaders = new Headers();
    myHeaders.append("token", token);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    // 提交数据
    const response = await fetch("http://www.glimmer.org.cn:25000/problem", requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    console.log(result);

    // 提交成功后更新分数
    await updateScoresFromServer();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

// 新增函数：从服务器获取并更新分数
const updateScoresFromServer = async () => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("token", token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch("http://www.glimmer.org.cn:25000/problem", requestOptions);
    
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    console.log(result);

    data = result.data;
    c_scores = data['c'];
    java_scores = data['java'];
    web_scores = data['web'];
    ml_scores = data['ml'];

    updateScores();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const torank = ()=>{
  router.push('/rank');
}

const logout = ()=>{
  localStorage.removeItem('token');
  router.push('/login');
}

const cs = ()=>{
  direct = 1;
  updateScores();
}

const frontEnd = ()=>{
  direct = 2;
  updateScores();
}

const rearEnd = ()=>{
  direct = 3;
  updateScores();
}

const ml = ()=>{
  direct = 4;
  updateScores();
}

const toIndex = ()=>{
  window.location.href="https://glimmer.org.cn/";
}

const updateScores = () => {
  if(direct == 1){
      tableData.value = tableData.value.map((item, index) => ({
        ...item,
        score: c_scores[index]
      }));
  } else if(direct == 2){
      tableData.value = tableData.value.map((item, index) => ({
        ...item,
        score: web_scores[index]
      }));
  } else if(direct == 3){
      tableData.value = tableData.value.map((item, index) => ({
        ...item,
        score: java_scores[index]
      }));
  } else if(direct == 4){
      tableData.value = tableData.value.map((item, index) => ({
        ...item,
        score: ml_scores[index]
      }));
  }
};

nextTick(() => {
  console.log('DOM updated');
  fetch("http://www.glimmer.org.cn:25000/problem", requestOptions)
   .then(response => response.json())
   .then(result => {
    console.log(result);
    data = result.data;
    c_scores = data['c'];
    java_scores = data['java'];
    web_scores = data['web'];
    ml_scores = data['ml'];
    updateScores()
   })
   .catch(error => console.log('error', error));
});
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0;z-index: 10;">
        <div style="width: 100%;background-color: white;" class="header-center">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
            style="width: 60%;border-bottom: 0px;"
          >
            <el-menu-item index="0" class="topIndex" @click="toIndex">
              <img
                style="height: 90%;margin-right: 16px;"
                src="../../../public/Glimmer-logo.png"
                alt="Element logo"
              />
              <span class="top-title">微光工作室</span>
            </el-menu-item>
            <el-menu-item index="1" @click="torank" class="menu-item" id="toRank">排行榜</el-menu-item>
            <el-sub-menu index="2" class="menu-sub">
              <template #title>
                <span class="menu-sub-title" id="direct">方向</span>
              </template>
              <el-menu-item index="2-1" @click="cs" class="menu-item">计算机系统</el-menu-item>
              <el-menu-item index="2-2" @click="frontEnd" class="menu-item">前端</el-menu-item>
              <el-menu-item index="2-3" @click="rearEnd" class="menu-item">后端</el-menu-item>
              <el-menu-item index="2-4" @click="ml" class="menu-item">机器学习</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3" @click="logout" class="menu-item">退出登录</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-container style="z-index: 0;">
        <!-- <el-aside width="300px" class="el-aside">
          <div id="submit-tips">
            <strong>提交方式：</strong>
            <br><br>
            <el-text type="primary">Github仓库地址</el-text>
            <br>
            <el-text type="primary">Gitee仓库地址</el-text>
            <br>
            <el-text type="primary">其他仓库地址</el-text>
            <br><br>
            <el-text>仓库格式要求：</el-text><br>
            <el-text>一级文件夹命名为你正在进行的学习方向，如：后端</el-text><br>
            <el-text>二级文件夹命名为你正在进行的题目，如：T4</el-text><br>
            <el-text>仓库命名如下形式:</el-text><br>
            <el-text>glimmer-2024090801001-微光娘</el-text><br>
          </div>
          <div id="contact">
            <el-text type="primary">有任何问题都可以找出题人询问😇</el-text>
          </div>
          <el-card style="max-width: 300px" class="el-card">
            <template #header>加油捏！<br>心有微光，不惧黑暗！</template>
            <img
              src="../../../src/assets/images/glimmerGirl.jpg"
              style="width: 80%"
            />
          </el-card>
        </el-aside> -->
        <el-main style="padding: 0;overflow-y: hidden;">
          <!-- logo页 -->
          <div class="bg-main" style="display: flex; justify-content: center;flex-direction: column;align-items: center;">
            <div style="width: 50%;height: 100%;" class="main-content-bg">
              <div class="main-content-container">
                <div class="main-content-left" style="width: 50%;height: 100%;">
                  <div class="main-left-intro">
                      <div style="font-size: 56px;font-weight: 700" class="intro-bg-color">Glimmer</div>
                      <div style="font-size: 45px;font-weight: 700;color: rgba(60, 60, 67);">2024-微光招新</div>
                      <br/>
                      <div style="font-size: 24px;font-weight: 500;color: rgba(60, 60, 67, .78);">心有微光，不惧黑暗</div>
                  </div>
                </div>
                <div style="width: 50%;height: 100%;" class="main-right-bg">
  
                </div>
              </div>
              <div class="main-button-container" style="display: flex;justify-content: center;">
                <div style="height: 100%; width: 50%;display: flex;justify-content: center;">
                  <el-menu
                    :default-active="contentActiveIndex"
                    mode="horizontal"
                    :ellipsis="false"
                    style="height: 100%;border-bottom: 0"
                  >
                    <el-menu-item index="1" style="margin-right: 0;" @click="selectDetail">已提交题目</el-menu-item>
                    <el-menu-item index="2" @click="selectSubmit">题目提交</el-menu-item>
                  </el-menu>
                </div>
                </div>
            </div>
          </div>
          <!-- 排行榜 -->
          <div style="width: 100%;height: 50vh;display: flex;justify-content: center;" v-if="contentActiveIndex === '1'">
            <el-scrollbar max-height="30vh" style="margin-top: 16px;">
              <el-table
                fixed
                :data="filteredTableData"
                style="width: 50vw;height: 50vh;"
                :row-class-name="tableRowClassName"
              >
                <el-table-column prop="title" label="已提交题目" />
                <el-table-column prop="score" label="分数" />
              </el-table>
  
            </el-scrollbar>
          </div>
          <!-- 提交任务 -->
          <div style="width: 100%;display: flex;justify-content: center;margin-top: 16px;" v-else-if="contentActiveIndex === '2'">
            <el-card style="height: fit-content;">
              <div>
                <strong>提交方式：</strong>
                <br><br>
                <el-text type="primary">Github仓库地址</el-text>
                <br>
                <el-text type="primary">Gitee仓库地址</el-text>
                <br>
                <el-text type="primary">其他仓库地址</el-text>
                <br><br>
                <el-text>仓库格式要求：</el-text><br>
                <el-text>你可以选择一个仓库收纳你的题目</el-text><br>
                <el-text>也可以一个仓库收纳多个题目</el-text><br>
                <el-text>只要你用</el-text><br>
                <el-text>glimmer-2024090801001-微光娘</el-text><br>
              </div>
              <div id="">
                <el-text type="primary">有任何问题都可以找出题人询问😇</el-text>
              </div>
            </el-card>
            <el-card style="width: 25%;height:fit-content;margin-left: 16px;" >
              <el-form :model="form" label-width="auto" id="upload" style="width: 100%;">
                <!-- URL 输入框 -->
                <el-form-item label="URL" prop="url">
                  <el-input v-model="form.url" placeholder="请输入你的仓库地址"></el-input>
                </el-form-item>
    
                <!-- 字段选择框 -->
                <el-form-item label="方向" prop="field">
                  <el-select v-model="form.field" placeholder="请选择你的方向">
                    <el-option label="后端-Java" value="java"></el-option>
                    <el-option label="计算机系统" value="c"></el-option>
                    <el-option label="前端" value="web"></el-option>
                    <el-option label="ML（机器学习）" value="ml"></el-option>
                  </el-select>
                </el-form-item>
    
                <!-- ID 选择框（1 到 12）-->
                <el-form-item label="ID" prop="id">
                  <el-select v-model="form.id" placeholder="请选择你要提交的题号">
                    <el-option
                      v-for="num in 12"
                      :key="num"
                      :label="num"
                      :value="num"
                    ></el-option>
                  </el-select>
                </el-form-item>
    
                <!-- 提交按钮 -->
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
              </el-form>
            </el-card>
            <el-card style="max-width: 300px;margin-left: 16px;">
                <template #header>加油捏！<br>心有微光，不惧黑暗！</template>
                <div>
                  <img
                    src="../../../src/assets/images/GlimmerGirl.png"
                    style="width: 80%;vertical-align: bottom;border: none;"
                    alt=""
                  />
                </div>
            </el-card>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.common-layout{
  background-color: #F4F6F9;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: page;
  top:0px;
  left:0px;
  right:0px;
  bottom:0px;
  overflow-y: hidden;
}

#submit-tips{
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 5px;
  border: solid 2px gainsboro;
  border-radius: 4px;
  background-color: whitesmoke;
}

#contact{
  margin-bottom: 30px;
  padding: 5px;
  border: solid 2px gainsboro;
  border-radius: 4px;
  background-color: white;
}

.header{
  width: 100%;
  padding: 0%;
}

.top-title{
  font-size:x-large;
  /* color: rgb(109, 202, 212); */
  margin-left: 0px;
  font-family: 'Arial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
  /* 发光动画 */
  /* animation: glow 2s ease-in-out infinite alternate;  */
}

@keyframes glow {
  from {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  to {
    text-shadow: 0 0 10px #74a7ee, 0 0 20px #74a7ee, 0 0 30px #74a7ee, 0 0 40px #74a7ee, 0 0 50px #74a7ee, 0 0 60px #74a7ee, 0 0 70px #74a7ee;
  }
}


.scores{
  float: left;
  margin-left: 100px;
  margin-top: 30px;
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

/* 禁用 .topIndex 类的 el-menu-item 悬浮时的默认背景样式 */
.topIndex:hover {
  background-color: transparent !important;  /* 取消悬浮时的背景变化 */
}


.menu-item {
  font-size: 18px;
  font-weight: bold;
  /* color: #a2cad7 !important;   */
  padding: 10px 20px;        
  transition: all 0.3s ease;  /* 添加平滑的过渡效果 */
}

/* 一级菜单项悬停效果 */
.menu-item:hover {
  background-color: rgba(85, 174, 190, 0.1); /* 轻微的背景色变化 */
  color: #00aaff !important; /* 悬停时字体颜色为金黄色 */
  text-shadow: 0 0 10px rgba(255, 204, 0, 0.7); /* 悬停时添加发光效果 */
}

/* 子菜单项标题样式 */
.menu-sub-title {
  font-size: 18px;
  font-weight: bold;
}



/* 子菜单项样式 */
.menu-sub .el-menu-item {
  font-size: 16px;
  font-weight: bold;
  color: #3fa9c99b !important;  /* 子菜单项默认字体颜色 */
  padding: 8px 16px;
  transition: background-color 0.3s ease;  /* 平滑背景色变化 */
}

/* 子菜单项悬停效果，确保背景和字体颜色对比度清晰 */
.menu-sub .el-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.3);  /* 悬停时子菜单项背景色 */
  color: #ffcc00 !important;  /* 悬停时字体颜色为金黄色 */
}

#toRank{
  /* color: #74f2f2  !important; */
}

#direct{
  /* color: #74f2f2  !important; */
}

.bg-main{ 
  height: 40vh;
  width: 100%;
  background-color: white;
}

.header-center {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dcdfe6;
}

.main-content-container {
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: row;
}

.main-button-container {
  width: 100%;
  height: 10%;
}

.main-content-left {
  display: flex;
  justify-content: center;
}

.main-left-intro {
  height: 100%;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.main-right-bg {
  background: url('../../../public/Glimmer-logo.png') no-repeat center center;
  background-size: 65%;
}

.intro-bg-color {
  background: linear-gradient(135deg, #3C8CE7 10%, #00EAFF 100%);
  background-clip: text;
  
  color: transparent;
}

body {
    font-family: 'Roboto', sans-serif;
  }

  /* 侧边栏样式 */
  .el-aside {
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  /* 提交提示样式 */
  #submit-tips {
    margin-bottom: 20px;
  }

  #submit-tips strong {
    font-size: 18px;
    color: #333;
  }

  #submit-tips .el-text {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
  }

  /* 联系方式样式 */
  #contact .el-text {
    font-size: 16px;
    color: #007bff;
  }

  /* 卡片样式 */
  .el-card {
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .el-card__header {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    padding: 15px;
    /* background-color: #f0f8ff; */
    /* border-bottom: 1px solid #e0e0e0; */
  }

  .el-card img {
    display: block;
    margin: 0 auto;
    border-radius: 10px;
  }


  #upload{
    margin-top: 40px;
  }

</style>