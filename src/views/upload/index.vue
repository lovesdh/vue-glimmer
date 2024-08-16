<script lang="ts" setup>
import { reactive  } from 'vue';
interface User {
  title: string;    // 题目
  submit: string;    // 提交
  review: string;    // 批改
  score: number;    // 分数
}

const tableRowClassName = ({
  row,
}: {
  row: User;
}) => {
  if (row.review === '批改中') {
    return 'warning-row'; // 警告行
  } else if (row.score !== 0) {
    return 'success-row'; // 成功行
  }
  return '';
}

const tableData: User[] = [
  {
    title: '前端T1',
    submit: '✔️',
    review: '批改中',
    score: 90,
  },
  {
    title: '前端T2',
    submit: '⚪',
    review: '⚪',
    score: 0,
  },
  {
    title: '前端T3',
    submit: '✔️',
    review: '批改中',
    score: 0,
  },
  {
    title: '前端T4',
    submit: '✔️',
    review: '✔️',
    score: 80,
  },
]

const form = reactive({
  url: '',
  field: '',
  id: ''
});

const onSubmit = () => {
  console.log('提交的数据:', form);
  // 在这里处理表单提交逻辑，例如调用API
};
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
          <h1 style="font-size: xx-large;color: skyblue;">微光招新题</h1>
        </el-header>
        <el-main>
          <el-scrollbar height="200px" style="float: left;">
            <el-table
            :data="tableData"
            style="width: 480px"
            :row-class-name="tableRowClassName"
            class="scores"
          >
            <el-table-column prop="title" label="题目" width="120" />
            <el-table-column prop="submit" label="提交" width="120" />
            <el-table-column prop="review" label="批改" width="120" />
            <el-table-column prop="score" label="分数" width="120" />
          </el-table>
          </el-scrollbar>
          <el-scrollbar height="200px" style="float: left;">
            <el-table
            :data="tableData"
            style="width: 480px"
            :row-class-name="tableRowClassName"
            class="scores"
          >
            <el-table-column prop="title" label="题目" width="120" />
            <el-table-column prop="submit" label="提交" width="120" />
            <el-table-column prop="review" label="批改" width="120" />
            <el-table-column prop="score" label="分数" width="120" />
          </el-table>
          </el-scrollbar>
          <el-scrollbar height="200px" style="float: left;">
            <el-table
            :data="tableData"
            style="width: 480px"
            :row-class-name="tableRowClassName"
            class="scores"
          >
            <el-table-column prop="title" label="题目" width="120" />
            <el-table-column prop="submit" label="提交" width="120" />
            <el-table-column prop="review" label="批改" width="120" />
            <el-table-column prop="score" label="分数" width="120" />
          </el-table>
          </el-scrollbar>
          <el-scrollbar height="200px" style="float: left;">
            <el-table
            :data="tableData"
            style="width: 480px"
            :row-class-name="tableRowClassName"
            class="scores"
          >
            <el-table-column prop="title" label="题目" width="120" />
            <el-table-column prop="submit" label="提交" width="120" />
            <el-table-column prop="review" label="批改" width="120" />
            <el-table-column prop="score" label="分数" width="120" />
          </el-table>
          </el-scrollbar>

          

        </el-main>
        <el-footer>
          <el-form :model="form" label-width="120px">
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
        </el-footer>
      </el-container>
    </el-container>
  </div>
    
</template>

<style>
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


</style>