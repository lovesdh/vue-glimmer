<script lang="ts" setup>
import { reactive,ref,onMounted   } from 'vue';
import { useRouter } from 'vue-router'

let token = localStorage.getItem('token');

let direct = 0;

const router = useRouter();


//获取自己做题情况
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
    c_scores = data['c']
    java_scores = data['java']
    web_scores = data['web']
    ml_scores = data['ml']
   })
   .catch(error => console.log('error', error));



//答题表单
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

const tableData: User[] = [
  {
    title: 1,
    score: 0,
  },
  {
    title: 2,
    score: 0,
  },
  {
    title: 3,
    score: 0,
  },
  {
    title: 4,
    score: 0,
  },
  {
    title: 5,
    score: 5,
  },
  {
    title: 6,
    score: 0,
  },
  {
    title: 7,
    score: 0,
  },
  {
    title: 8,
    score: 0,
  },
  {
    title: 9,
    score: 0,
  },
  {
    title: 10,
    score: 0,
  },
  {
    title: 11,
    score: 0,
  },
  {
    title: 12,
    score: 0,
  },
]

const form = reactive({
  url: '',
  field: '',
  id: ''
});

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

//函数   
const onSubmit = () => {
  console.log('提交的数据:', form);
  const raw = JSON.stringify(form);

  var myHeaders = new Headers();
  myHeaders.append("token", token);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow' // 确保 redirect 是 'follow', 'error', 或 'manual' 之一
  };

  fetch("http://www.glimmer.org.cn:25000/problem", requestOptions)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); 
    })
    .then(result => console.log(result))
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
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
  console.log(direct);
  
  console.log(tableData);
}

const frontEnd = ()=>{
  direct = 2;
  console.log(direct);
}

const rearEnd = ()=>{
  direct = 3;
  console.log(direct);
}

const ml = ()=>{
  direct = 4;
  console.log(direct);
}

const updateScores = () => {
  if(direct == 1){
    console.log('ok');
    for(let i=0; i < tableData.length;i++){
      tableData[i].score = c_scores[i];
    }
  } else if(direct == 2){
    console.log('ok');
    for(let i=0; i < tableData.length;i++){
      tableData[i].score = web_scores[i];
    } 
  } else if(direct == 3){
    console.log('ok');
    for(let i=0; i < tableData.length;i++){
      tableData[i].score = java_scores[i];
    } 
  } else if(direct == 4){
    console.log('ok');
    for(let i=0; i < tableData.length;i++){
      tableData[i].score = ml_scores[i];
    } 
  }
  
};

onMounted(() => {
  updateScores();
});

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px">
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
          <el-text>一级文件夹命名为你正在进行的学习方向，如：机器学习</el-text><br>
          <el-text>二级文件夹命名为你正在进行的题目，如：T4</el-text><br>
          <el-text>仓库命名如下形式:</el-text><br>
          <el-text>glimmer-2024090801001-微光娘</el-text><br>
        </div>
        <div id="contact">
          <el-text type="primary">有任何问题都可以找出题人询问😇</el-text>
        </div>
        <el-card style="max-width: 300px">
          <template #header>加油！心有微光，不惧黑暗！</template>
          <img
            src="../../../src/assets/images/glimmerGirl.jpg"
            style="width: 80%"
          />
        </el-card>
      </el-aside>
      <el-container>
        <el-header style="padding-top: 20px;">
          <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0">
            <h1 style="font-size: xx-large;color: skyblue;margin-left: 20px;">微光招新题</h1>
            <img
              style="width: 100px;margin-left: 30px;"
              src="../../../public/logo.png"
              alt="Element logo"
            />
          </el-menu-item>
          <el-menu-item index="1" @click="torank">排行榜</el-menu-item>
          <el-sub-menu index="2">
            <template #title>方向</template>
            <el-menu-item index="2-1" @click="cs">计算机系统</el-menu-item>
            <el-menu-item index="2-2" @click="frontEnd">前端</el-menu-item>
            <el-menu-item index="2-3" @click="rearEnd">后端</el-menu-item>
            <el-menu-item index="2-4" @click="ml">机器学习</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="3" @click="logout">退出登录</el-menu-item>
        </el-menu>
        </el-header>
        <el-main>
          <el-scrollbar max-height="650px" style="float: left;">
            <el-table
            fixed
            :data="tableData"
            style="width: 500px"
            :row-class-name="tableRowClassName"
            class="scores"
          >
            <el-table-column prop="title" label="题目" width="250px" />
            <el-table-column prop="score" label="分数" width="250px" />
          </el-table>
          </el-scrollbar>
          <el-form :model="form" label-width="120px" style="margin-top: 5%;">
            <!-- URL 输入框 -->
            <el-form-item label="URL" prop="url">
              <el-input v-model="form.url" placeholder="请输入你的仓库地址"></el-input>
            </el-form-item>

            <!-- 字段选择框 -->
            <el-form-item label="方向" prop="field">
              <el-select v-model="form.field" placeholder="请选择你的方向">
                <el-option label="后端-Java" value="java"></el-option>
                <el-option label="C" value="c"></el-option>
                <el-option label="前端" value="web"></el-option>
                <el-option label="ML（机器学习）" value="ml"></el-option>
              </el-select>
            </el-form-item>

            <!-- ID 选择框（1 到 20）-->
            <el-form-item label="ID" prop="id">
              <el-select v-model="form.id" placeholder="请选择你要提交的题号">
                <el-option
                  v-for="num in 20"
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
          
        </el-main>
        <el-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
    
</template>

<style>
body{
  overflow-y: hidden;
}
.common-layout{
  background-color: azure;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: page;
  top:0px;
  left:0px;
  right:0px;
  bottom:0px;
}

#submit-tips{
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


</style>