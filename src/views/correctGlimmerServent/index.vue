<template>
  <div v-if="data">
    <el-input
      v-model="searchQuery"
      placeholder="请输入学生ID或姓名"
      style="margin-bottom: 20px;"
    ></el-input>
    <el-select v-model="selectedSubject" placeholder="请选择科目" style="margin-bottom: 20px;">
      <el-option v-for="subject in subjects" :key="subject" :label="subject" :value="subject"></el-option>
    </el-select>
    <el-switch
      v-model="showUngradedOnly"
      active-text="只显示未评分学生"
      inactive-text="显示所有学生"
      style="margin-bottom: 20px;"
    ></el-switch>
    <el-table :data="filteredData" border style="width: 100%">
      <el-table-column prop="studenid" label="学生ID" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column v-if="selectedSubject" :label="selectedSubject">
        <template #default="scope">
          <ul>
            <li v-for="(score, i) in scope.row[selectedSubject]" :key="i">
              <span> 题{{ i + 1 }}: </span>
              <br/>
              <span v-if="score.score === -1">未提交</span>
              <span v-else>
                仓库链接：
                <a :href="score.url" target="_blank" style="color: red;">{{ score.url }}</a>
              </span>
              <br/>
              <span v-if="score.score > 0" style="color: green;">分数：{{ score.score }}</span>
              <div style="display: flex; align-items: center; margin-top: 10px;">
                <el-input v-model="score.newScore" placeholder="输入分数" style="width: 100px;"></el-input>
                <el-button @click="submitScore(scope.row.studenid, selectedSubject, i, score.newScore)" type="primary" style="margin-left: 10px;">提交</el-button>
              </div>
            </li>
          </ul>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div v-else>
    <p>加载中...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { ElTable, ElTableColumn, ElInput, ElSelect, ElOption, ElButton, ElSwitch } from 'element-plus';

let token = localStorage.getItem('token');
const data = ref(null);
const subjects = ['c', 'java', 'web', 'ml'];
const searchQuery = ref('');
const selectedSubject = ref('');
const showUngradedOnly = ref(false);

var myHeaders = new Headers();
myHeaders.append("token", token);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://www.glimmer.org.cn:24999/all", requestOptions)
  .then(response => response.json())
  .then(result => {
    data.value = result.data;
    console.log(result);
  })
  .catch(error => console.log('error', error));

const filteredData = computed(() => {
  if (!data.value || !selectedSubject.value) return [];
  return data.value.filter(student => {
    const matchesSearch = student.studenid.includes(searchQuery.value) || student.name.includes(searchQuery.value);
    if (showUngradedOnly.value) {
      return matchesSearch && student[selectedSubject.value].some(score => score.score === 0 && score.url);
    } else {
      return matchesSearch;
    }
  });
});

const submitScore = (studentid, field, id, score) => {
  var raw = JSON.stringify({
    "studentid": studentid,
    "field": field,
    "id": id + 1, // Assuming id starts from 1
    "score": parseInt(score)
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://www.glimmer.org.cn:24999/grade", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      // Update the score in the data
      const student = data.value.find(s => s.studenid === studentid);
      if (student) {
        student[field][id].score = parseInt(score);
      }
    })
    .catch(error => console.log('error', error));
};
</script>