<template>
  <!-- <div id="background"></div> -->
  <img src="./img/Glimmer.png" alt="" id="first_logo">
  <!-- 新增的页眉元素 -->
  <header id="header">
    <a href="https://www.glimmer.org.cn" target="_blank" rel="noopener noreferrer" id="another-link" style="padding-left: 30px; color: #2AA1F2; font-weight: 900;">
      微光工作室24级招新
    </a>
    <nav id="header-nav">
      <!-- 在这里可以添加其他 router-link 元素 -->
      <router-link to="/upload" id="header-router">
        个人界面</router-link>
      <!-- 根据需要添加更多链接 -->
    </nav>
  </header>


<!-- 这段有点太尬了所以隐藏了 -->
 <!-- 这段有点太尬了所以隐藏了 -->
  <img src="./img/wgn.jpg" alt="" id="wgn" style="display: none;">
  <img src="./img/talk.png" alt="" id="dialog" style="display: none;">
  <div id="pressure" style="display: none;">目前有--位小伙伴和微光娘一起参与了招新活动，要一起加油哟！</div>
  <h3 id="name_ofv" style="display: none;">微光娘</h3>
  <!-- 这段有点太尬了所以隐藏了 -->
   <!-- 这段有点太尬了所以隐藏了 -->


  <div id="id_card">
    <img src="./img/ShiroiLogo.png" alt="" id="white_logo">
    <div id="name">Competitor</div>
    <div id="data">
      <div id="place" class="data_elem">
        <h3 class="title">PLACE</h3>
        <p style="display: block;text-align: center;font-size: 25px;color: white;font-weight: 400;" id="card_place">12</p>
      </div>
      <div id="tasks" class="data_elem">
        <h3 class="title">TASKS</h3>
        <p style="display: block;text-align: center;font-size: 25px;color: white;font-weight: 400;" id="card_task">task6</p>
      </div>
      <div id="place" class="data_elem">
        <h3 class="title">POINT</h3>
        <p style="display: block;text-align: center;font-size: 25px;color: white;font-weight: 400;" id="card_point">1200</p>
      </div>
    </div>
    <div id="choice">
      <div id="to_c" class="change_to">计系</div>
      <div id="to_ai" class="change_to">ML</div>
      <div id="to_fr" class="change_to">前端</div>
      <div id="to_ba" class="change_to">后端</div>
    </div>
    <img src="./img/decoration.png" alt="" id="decoration">
  </div>
  <div id="line">
    <h3 id="TOP">TOP10 of Computer System</h3>
  </div>
  <div id="rank_area">
    <div class="inner" id="in_header">
      <p class="inner_name">ID</p>
      <p class="inner_rank">PLACE</p>
      <p class="inner_test">TASK</p>
      <p class="inner_point">POINT</p>
    </div>
    <!-- 其余内容保持不变 -->
    <div class="inner" id="in1"><p class="inner_name">-</p><p class="inner_rank">-</p><p class="inner_test">-</p><p class="inner_point">-</p></div>
    <div class="inner" id="in2"><p class="inner_name">-</p><p class="inner_rank">-</p><p class="inner_test">-</p><p class="inner_point">-</p></div>
    <div class="inner" id="in3"><p class="inner_name">-</p><p class="inner_rank">-</p><p class="inner_test">-</p><p class="inner_point">-</p></div>
    <div class="inner" id="in4"><p class="inner_name">-</p><p class="inner_rank">-</p><p class="inner_test">-</p><p class="inner_point">-</p></div>
    <div class="inner" id="in5"><p class="inner_name">-</p><p class="inner_rank">-</p><p class="inner_test">-</p><p class="inner_point">-</p></div>
    <div class="inner" id="in6"><p class="inner_name">-</p><p class="inner_rank">-</p><p class="inner_test">-</p><p class="inner_point">-</p></div>
    <div class="inner" id="in7"><p class="inner_name">-</p><p class="inner_rank">-</p><p class="inner_test">-</p><p class="inner_point">-</p></div>
    <div class="inner" id="in8"><p class="inner_name">-</p><p class="inner_rank">-</p><p class="inner_test">-</p><p class="inner_point">-</p></div>
    <div class="inner" id="in9"><p class="inner_name">-</p><p class="inner_rank">-</p><p class="inner_test">-</p><p class="inner_point">-</p></div>
    <div class="inner" id="in10"><p class="inner_name">-</p><p class="inner_rank">-</p><p class="inner_test">-</p><p class="inner_point">-</p></div>
  </div>
</template>
<style>
#first_logo{
  position: absolute;
  width: 30px;
  top: 5px;
  left: 10px;
}
body{
  background-color: #F0FFFF;
}
body {
  background-color: #F0FFFF;
}

#header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4.5%;
  align-items: center;
  padding: 9px 18px;
  background-color: #333;
  color: white;
  z-index: 10;
}

#header-router {
  font-size: 16.2px;
  color: white;
  text-decoration: none;
}

#header-nav {
  display: flex;
  gap: 9px;
}

#header-nav a {
  color: white;
  text-decoration: none;
}

#header-nav a:hover {
  text-decoration: underline;
}

#router {
  position: absolute;
  width: 9%;
  height: 1.17%;
  background-color: rgb(155, 155, 155);
  left: 4.5%;
  top: 4.5%;
  font-size: 27px;
  font-family: 微软雅黑;
  line-height: 0%;
}

body {
  background-image: src;
}

#pressure {
  width: 630px;
  height: 63px;
  line-height: 63px;
  text-align: center;
  position: absolute;
  top: 108px;
  left: 711px;
  color: rgb(0, 0, 0);
  font-size: 18.9px;
  font-family: 微软雅黑;
  font-weight: bold;
}

#name_ofv {
  position: absolute;
  top: 177px;
  left: 738px;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-family: 微软雅黑;
  font-weight: bold;
}

#dialog {
  position: absolute;
  width: 675px;
  top: 90px;
  left: 684px;
}

#wgn {
  position: absolute;
  left: 1368px;
  top: 17px;
  width: 225px;
  background-color: #83f5dc;
}

.inner:nth-child(even) {
  background-color: #FFFFFF;
}

.inner:nth-child(odd) {
  background-color: #F3F3F3;
}

.inner:hover {
  background-color: #BD94FF;
}

.inner {
  width: 900px;
  height: 49.5px;
}

.inner > p {
  display: inline-block;
  width: 225px;
  height: 49.5px;
  text-align: center;
  color: black;
  font-weight: 450px;
  font-size: 19.8px;
  line-height: 58.5px;
  padding-bottom: 58.5px;
}

#in_header {
  background-color: black;
}

#in_header > p {
  color: white;
}

.title {
  text-align: center;
  display: block;
  user-select: none;
  color: rgb(36, 36, 36);
}

#rank_area {
  position: absolute;
  width: 900px;
  height: 544.5px;
  top: 239px;
  left: 720px;
}

#line > h3 {
  position: relative;
  bottom: 40.5px;
  left: 189px;
  font-size: 36px;
  color: rgb(0, 0, 0);
}

#line {
  position: absolute;
  width: 810px;
  height: 9px;
  left: 540px;
  top: 233px;
  background-color: #00B0FF;
  line-height: 1;
}

#to_c {
  background-color: #ffffff;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}

#to_ai {
  background-color: #dadada;
}

#to_fr {
  background-color: #b8b8b8;
}

#to_ba {
  background-color: #919191;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}

.change_to {
  width: 81px;
  height: 27px;
  display: inline-block;
  text-align: center;
  font-size: 15.3px;
  padding-top: 2.7px;
  color: black;
  font-weight: 90px;
  font-family: 微软雅黑;
  cursor: pointer;
  user-select: none;
}

#choice {
  display: block;
  width: 324px;
  height: 27px;
  margin: auto;
  margin-top: 36px;
  border-radius: 18px;
}

#decoration {
  position: relative;
  left: 67.5%;
  top: 4.5%;
  width: 18%;
}

.data_elem {
  width: 117px;
  height: 90px;
  margin-left: 16.5px;
  margin-right: 16.5px;
  display: inline-block;
}

#data {
  margin-top: 67.5px;
  width: 450px;
  height: 90px;
}

#name {
  text-align: center;
  color: white;
  font-weight: 450;
  font-size: 36px;
  margin-top: 36px;
  user-select: none;
}

#id_card {
  position: absolute;
  width: 450px;
  height: 637.2px;
  top: 147px;
  left: 270px;
  background-color: #00B0FF;
  border-top-right-radius: 27px;
  border-top-left-radius: 27px;
  border-color: white;
  border-style: solid;
  border-width: 4.5px;
  box-sizing: border-box;
  z-index: 1;
}

#white_logo {
  width: 180px;
  margin: auto;
  display: block;
  padding-top: 40.5px;
}

#background {
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #4c64ec url(https://img.bosszhipin.com/static/file/2022/zlqc2m9fao1667185843533.png) bottom / 100% auto no-repeat;
}

</style>
<script>
  // 交互拿数据----------------------------------------
  // 交互拿数据----------------------------------------
  export default {
  data() {
    return {
      rank_data: null,
    };
  },
  mounted() {
    // 组件挂载后执行的代码
    this.fetchData()

    // document.addEventListener('DOMContentLoaded', function() {
var i = 1;
document.getElementById("to_c").onclick = function(){
  if(i != 1){
    i=1;
    document.getElementById("id_card").style.backgroundColor = "#00B0FF";
    document.getElementById("line").style.backgroundColor = "#00B0FF";
    document.getElementById("TOP").textContent = "TOP10 of Computer System";
    let n = 1;
    let m = rank_data.data.cs.how_many;
    for(n;n<=m;n++){
      document.getElementById("in"+n).children[0].textContent = rank_data.data.cs.name[n-1];
      document.getElementById("in"+n).children[1].textContent = n.toString();
      if (rank_data.data.cs.test[n-1] == -1){
        document.getElementById("in"+n).children[2].textContent = "未完成"
      }else{
        document.getElementById("in"+n).children[2].textContent = rank_data.data.cs.test[n-1];
      }
      document.getElementById("in"+n).children[3].textContent = rank_data.data.cs.point[n-1];
    }
    document.getElementById("card_place").textContent = rank_data.data.self.place[0];
    if (rank_data.data.self.test[0] == -1){
      document.getElementById("card_task").textContent = "未完成"
      }else{
        document.getElementById("card_task").textContent = rank_data.data.self.test[0];
      }
    document.getElementById("card_point").textContent = rank_data.data.self.point[0];
    if(rank_data.data.self.place[3]== 1){
       document.getElementById("pressure").textContent = "目前在计系方向排行第一呢，微光娘好崇拜你呀！"
    }else{
          document.getElementById("pressure").textContent = "目前有"+rank_data.data.cs.amount+"位小伙伴和微光娘一起参与了招新活动，要一起加油哟！"
    }
  }
} 
document.getElementById("to_ai").onclick = function(){
  if(i != 2){
    i=2;
    document.getElementById("id_card").style.backgroundColor = "#6bb381";
    document.getElementById("line").style.backgroundColor = "#6bb381";
    document.getElementById("TOP").textContent = "TOP10 of Machine Learning";
    let n = 1;
    let m = rank_data.data.ai.how_many;
    for(n;n<=m;n++){
      document.getElementById("in"+n).children[0].textContent = rank_data.data.ai.name[n-1];
      document.getElementById("in"+n).children[1].textContent = n.toString();
      if (rank_data.data.ai.test[n-1] == -1){
        document.getElementById("in"+n).children[2].textContent = "未完成"
      }else{
        document.getElementById("in"+n).children[2].textContent = rank_data.data.ai.test[n-1];
      }
      document.getElementById("in"+n).children[3].textContent = rank_data.data.ai.point[n-1];
    }
    document.getElementById("card_place").textContent = rank_data.data.self.place[1];
    if (rank_data.data.self.test[1] == -1){
      document.getElementById("card_task").textContent = "未完成"
      }else{
        document.getElementById("card_task").textContent = rank_data.data.self.test[1];
      }
    document.getElementById("card_point").textContent = rank_data.data.self.point[1];
    if(rank_data.data.self.place[3]== 1){
       document.getElementById("pressure").textContent = "目前在ML方向排行第一呢，微光娘好崇拜你呀！"
    }else{
          document.getElementById("pressure").textContent = "目前有"+rank_data.data.ai.amount+"位小伙伴和微光娘一起参与了招新活动，要一起加油哟！"
    }
  }
} 
document.getElementById("to_fr").onclick = function(){
  if(i != 3){
    i=3;
    document.getElementById("id_card").style.backgroundColor = "#936bb3";
    document.getElementById("line").style.backgroundColor = "#936bb3";
    document.getElementById("TOP").textContent = "TOP10 of Front-end";
    let n = 1;
    let m = rank_data.data.fr.how_many;
    for(n;n<=m;n++){
      document.getElementById("in"+n).children[0].textContent = rank_data.data.fr.name[n-1];
      document.getElementById("in"+n).children[1].textContent = n.toString();
      if (rank_data.data.fr.test[n-1] == -1){
        document.getElementById("in"+n).children[2].textContent = "未完成"
      }else{
        document.getElementById("in"+n).children[2].textContent = rank_data.data.fr.test[n-1];
      }
      document.getElementById("in"+n).children[3].textContent = rank_data.data.fr.point[n-1];
    }
    document.getElementById("card_place").textContent = rank_data.data.self.place[2];
    if (rank_data.data.self.test[2] == -1){
      document.getElementById("card_task").textContent = "未完成"
      }else{
        document.getElementById("card_task").textContent = rank_data.data.self.test[2];
      }
    document.getElementById("card_point").textContent = rank_data.data.self.point[2];
    if(rank_data.data.self.place[3]== 1){
       document.getElementById("pressure").textContent = "目前在前端方向排行第一呢，微光娘好崇拜你呀！"
    }else{
          document.getElementById("pressure").textContent = "目前有"+rank_data.data.fr.amount+"位小伙伴和微光娘一起参与了招新活动，要一起加油哟！"

    }
  }
}

document.getElementById("to_ba").onclick = function(){
  if(i != 4){
    i=4;
    document.getElementById("id_card").style.backgroundColor = "#585858";
    document.getElementById("line").style.backgroundColor = "#585858";
    document.getElementById("TOP").textContent = "TOP10 of Back-end";
    let n = 1;
    let m = rank_data.data.ba.how_many;
    for(n;n<=m;n++){
      document.getElementById("in"+n).children[0].textContent = rank_data.data.ba.name[n-1];
      document.getElementById("in"+n).children[1].textContent = n.toString();
      if (rank_data.data.ba.test[n-1] == -1){
        document.getElementById("in"+n).children[2].textContent = "未完成"
      }else{
        document.getElementById("in"+n).children[2].textContent = rank_data.data.ba.test[n-1];
      }
      document.getElementById("in"+n).children[3].textContent = rank_data.data.ba.point[n-1];
    }
    document.getElementById("card_place").textContent = rank_data.data.self.place[3];
    if (rank_data.data.self.test[3] == -1){
      document.getElementById("card_task").textContent = "未完成"
      }else{
        document.getElementById("card_task").textContent = rank_data.data.self.test[3];
      }
    document.getElementById("card_point").textContent = rank_data.data.self.point[3];
    if(rank_data.data.self.place[3]== 1){
       document.getElementById("pressure").textContent = "目前在后端方向排行第一呢，微光娘好崇拜你呀！"
    }else{
       document.getElementById("pressure").textContent = "目前有"+rank_data.data.ba.amount+"位小伙伴和微光娘一起参与了招新活动，要一起加油哟！"
    }
  }
}  

// })
  },
  methods: {
    fetchData() {
      const userId = 'hhh'; // 替换成实际的用户 ID
      const token = localStorage.getItem('token');
      const url = 'http://www.glimmer.org.cn:25000/rank'; // 替换成实际的 API 端点

      const formData = new FormData();
      formData.append('userId', userId);

      fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'token': token
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('网络响应不是 OK');
        }
        return response.json();
      })
      .then(data => {
        console.log('成功获取的数据:', data);
        window.rank_data = data;
        this.rank_data = data;
        this.updateDOM();
      })
      .catch(error => {
        console.error('请求失败:', error);
      });
    },
    updateDOM() {
      if (!this.rank_data) return;

      let n = 1;
      let m = this.rank_data.data.cs.how_many;
      for (n; n <= m; n++) {
        document.getElementById("in" + n).children[0].textContent = this.rank_data.data.cs.name[n - 1];
        document.getElementById("in" + n).children[1].textContent = n.toString();
        if (this.rank_data.data.self.place[3] == 1) {
          document.getElementById("pressure").textContent = "目前在计系方向排行第一呢，微光娘好崇拜你呀！";
        } else {
          document.getElementById("pressure").textContent = "目前有" + this.rank_data.data.cs.amount + "位小伙伴和微光娘一起参与了招新活动，要一起加油哟！";
        }
        document.getElementById("in" + n).children[3].textContent = this.rank_data.data.cs.point[n - 1];
      }
      document.getElementById("name").textContent = this.rank_data.data.self.name;
      document.getElementById("card_place").textContent = this.rank_data.data.self.place[0];
      document.getElementById("card_task").textContent = this.rank_data.data.self.test[0] == -1 ? "未完成" : this.rank_data.data.self.test[0];
      document.getElementById("card_point").textContent = this.rank_data.data.self.point[0];
      document.getElementById("pressure").textContent = "目前有" + this.rank_data.data.cs.amount + "位小伙伴和微光娘一起参与了招新活动，要一起加油哟！";
    }
  }
};
// 交互拿数据----------------------------------------
// 交互拿数据----------------------------------------


</script>