<script lang="ts" setup>
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
</script>

<template>
    <el-container id="container">
      <el-aside >
        <div id="submit-tips">
          <h2>提交方式：</h2>
          <br>
          <el-text type="primary">Github仓库地址</el-text>
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
        <el-card style="max-width: 460px">
          <template #header>加油！心有微光，不惧黑暗！</template>
          <img
            src="../../../src/assets/images/glimmerGirl.jpg"
            style="width: 80%"
          />
        </el-card>
      </el-aside>
      <el-container>
        <el-header>
          <h1 style="font-size: xx-large;color: skyblue;margin-top: 30px;">微光招新题</h1>
        </el-header>
        <el-main>
          <el-table
            :data="tableData"
            style="width: 480px"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="title" label="题目" width="120" />
            <el-table-column prop="submit" label="提交" width="120" />
            <el-table-column prop="review" label="批改" width="120" />
            <el-table-column prop="score" label="分数" width="120" />
          </el-table>
          <br><br><br><br><br><br>
          <h2>提交</h2>
        </el-main>
      </el-container>
    </el-container>
</template>

<style>
#container{
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
  margin: 20% 10% 10% 10%;
  padding: 5px;
  border: solid 2px gainsboro;
  border-radius: 4px;
  background-color: whitesmoke;
}

#contact{
  margin: 10% 10%;
  padding: 5px;
  border: solid 2px gainsboro;
  border-radius: 4px;
  background-color: white;
}

.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>