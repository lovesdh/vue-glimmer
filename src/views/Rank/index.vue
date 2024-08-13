<template>
    <img src="./img/wgn.jpg" alt="" id="wgn">
    <img src="./img/talk.png" alt="" id="dialog">
    <div id="pressure">目前有--位小伙伴和微光娘一起参与了招新活动，要一起加油哟！</div>
    <h3 id="name_ofv">微光娘</h3>
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
    <div id="line"><h3 id="TOP">TOP10 of Computer System</h3></div>
    <div id="rank_area">
      <div class="inner" id="in_header"><p class="inner_name">ID</p><p class="inner_rank">PLACE</p><p class="inner_test">TASK</p><p class="inner_point">POINT</p></div>
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
    #pressure{
      width: 700px;
      height: 70px;
      line-height: 70px;
      text-align: center;
    position: absolute;
    top: 120px;
    left: 690px;
    color: rgb(0, 0, 0);
    font-size: 21px;
    font-family: 微软雅黑;
    font-weight: bold;
    /* background-color: #00B0FF; */
  }
  #name_ofv{
    position: absolute;
    top: 197px;
    left: 720px;
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-family: 微软雅黑;
    font-weight: bold;
  }
  #dialog{
    position: absolute;
    width: 750px;
    top: 100px;
    left: 660px;
  }
  #wgn{
    position: absolute;
    left: 1420px;
    top: 19px;
    width: 250px;
    background-color: #83f5dc;
  }
  .inner:nth-child(even){
    background-color: #FFFFFF;
  }
  .inner:nth-child(odd){
    background-color: #F3F3F3;
  }
  .inner:hover{
    background-color: #BD94FF;
  }
  .inner{
    width: 1000px;
    height: 55px;
  }
  .inner>p{
    display: inline-block;
    width: 250px;
    height: 55px;
    text-align: center;
    color: black;
    font-weight: 500px;
    font-size: 22px;
    line-height: 65px;
    padding-bottom: 65px;
  }
  #in_header{
    background-color: black;
  }
  #in_header>p{
    color: white;
  }
  .title{
    text-align: center;
    display: block;
    user-select: none;
    color: rgb(36, 36, 36);
  }
  #rank_area{
    position: absolute;
    width: 1000px;
    height: 605px;
    top: 332px;
    left:700px;
    /* background-color: aquamarine; */
  }
  #line>h3{
    position: relative;
    bottom: 45px;
    left: 210px;
    font-size: 40px;
    color: white;
  }
  #line{
    position: absolute;
    width: 900px;
    height: 10px;
    left: 500px;
    top: 325px;
    background-color: #00B0FF;
    line-height: 1;
  }
  #to_c{
    background-color: #ffffff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  #to_ai{
    background-color: #dadada;
  }
  #to_fr{
    background-color: #b8b8b8;
  }
  #to_ba{
    background-color: #919191;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .change_to{
    width: 90px;
    height: 30px;
    display: inline-block;
    text-align: center;
    font-size: 17px;
    padding-top: 3px;
    color: black;
    font-weight: 100px;
    font-family: 微软雅黑;
    cursor: pointer;
  }
  #choice{
    display: block;
    width: 360px;
    height: 30px;
    /* background-color: aquamarine; */
    margin: auto;
    margin-top: 40px;
    border-radius: 20px;
  }
  #decoration{
    position: relative;
    left: 75%;
    top: 5%;
    width: 20%;
  }
  .data_elem{
    width: 130px;
    height: 100px;
    /* background-color: bisque; */
    margin-left: 18.33px;
    margin-right: 18.33px;
    display: inline-block;
  }
  #data{
    margin-top: 75px;
    width:500px;
    height: 100px;
    /* background-color: aliceblue; */
  }
  #name{
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 40px;
    margin-top: 40px;
    user-select: none
  }
  #id_card{
    position: absolute;
    width: 500px;
    height: 708px;
    top: 230px;
    left: 200px;
    background-color: #00B0FF;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    border-color: white;
    border-style: solid;
    border-width: 5px;
    box-sizing: border-box;
    z-index: 1;
  }
  #white_logo{
    width: 200px;
    margin: auto;
    display: block;
    padding-top: 45px;
  }
  </style>
  <script>
  document.addEventListener('DOMContentLoaded', function() {

    // 交互拿数据----------------------------------------
    // 交互拿数据----------------------------------------
    const userId = 'hhh'; // 替换成实际的用户 ID
    const url = 'https://65804b84.r10.vip.cpolar.cn/rank'; // 替换成实际的 API 端点
    var rank_data;
    const formData = new FormData();
formData.append('userId', userId);
fetch(url, {
  method: 'POST',
  body: formData,
})
  .then(response => {
    if (!response.ok) {
      throw new Error('网络响应不是 OK');
    }
    return response.json();
  })
  .then(data => {
    console.log('成功获取的数据:', data);
    rank_data = data;
    console.log(rank_data);
    let n = 1;
    let m = rank_data.data.cs.how_many;
    for (n; n <= m; n++) {
      document.getElementById("in" + n).children[0].textContent = rank_data.data.cs.name[n - 1];
      document.getElementById("in" + n).children[1].textContent = n.toString();
      document.getElementById("in" + n).children[2].textContent = rank_data.data.cs.test[n - 1];
      document.getElementById("in" + n).children[3].textContent = rank_data.data.cs.point[n - 1];
    }
    document.getElementById("card_place").textContent = rank_data.data.self.place[0];
    document.getElementById("card_task").textContent = rank_data.data.self.test[0];
    document.getElementById("card_place").textContent = rank_data.data.self.point[0];
    document.getElementById("pressure").textContent = "目前有" + rank_data.data.cs.amount + "位小伙伴和微光娘一起参与了计系招新活动，要一起加油哟！"
  })
  .catch(error => {
    console.error('请求失败:', error);
  });
  // 交互拿数据----------------------------------------
  // 交互拿数据----------------------------------------


  var i = 1;
  document.getElementById("to_c").onclick = function(){
    if(i != 1){
      document.getElementById("id_card").style.backgroundColor = "#00B0FF";
      document.getElementById("line").style.backgroundColor = "#00B0FF";
      document.getElementById("TOP").textContent = "TOP10 of Computer System";
      let n = 1;
      let m = rank_data.data.cs.how_many;
      for(n;n<=m;n++){
        document.getElementById("in"+n).children[0].textContent = rank_data.data.cs.name[n-1];
        document.getElementById("in"+n).children[1].textContent = n.toString();
        document.getElementById("in"+n).children[2].textContent = rank_data.data.cs.test[n-1];
        document.getElementById("in"+n).children[3].textContent = rank_data.data.cs.point[n-1];
      }
      document.getElementById("card_place").textContent = rank_data.data.self.place[0];
      document.getElementById("card_task").textContent = rank_data.data.self.test[0];
      document.getElementById("card_point").textContent = rank_data.data.self.point[0];
      if(rank_data.data.self.place[3]== 1){
         document.getElementById("pressure").textContent = "目前在计系方向排行第一呢，微光娘好崇拜你呀！"
      }else{
            document.getElementById("pressure").textContent = "目前有"+rank_data.data.cs.amount+"位小伙伴和微光娘一起参与了计系招新活动，要一起加油哟！"
      }
      i=1;
    }
  } 
  document.getElementById("to_ai").onclick = function(){
    if(i != 2){
      document.getElementById("id_card").style.backgroundColor = "#6bb381";
      document.getElementById("line").style.backgroundColor = "#6bb381";
      document.getElementById("TOP").textContent = "TOP10 of Machine Learning";
      let n = 1;
      let m = rank_data.data.ai.how_many;
      for(n;n<=m;n++){
        document.getElementById("in"+n).children[0].textContent = rank_data.data.ai.name[n-1];
        document.getElementById("in"+n).children[1].textContent = n.toString();
        document.getElementById("in"+n).children[2].textContent = rank_data.data.ai.test[n-1];
        document.getElementById("in"+n).children[3].textContent = rank_data.data.ai.point[n-1];
      }
      document.getElementById("card_place").textContent = rank_data.data.self.place[1];
      document.getElementById("card_task").textContent = rank_data.data.self.test[1];
      document.getElementById("card_point").textContent = rank_data.data.self.point[1];
      if(rank_data.data.self.place[3]== 1){
         document.getElementById("pressure").textContent = "目前在ML方向排行第一呢，微光娘好崇拜你呀！"
      }else{
            document.getElementById("pressure").textContent = "目前有"+rank_data.data.ai.amount+"位小伙伴和微光娘一起参与了ML招新活动，要一起加油哟！"
      }
      i=2;
    }
  } 
  document.getElementById("to_fr").onclick = function(){
    if(i != 3){
      document.getElementById("id_card").style.backgroundColor = "#936bb3";
      document.getElementById("line").style.backgroundColor = "#936bb3";
      document.getElementById("TOP").textContent = "TOP10 of Front-end";
      let n = 1;
      let m = rank_data.data.fr.how_many;
      for(n;n<=m;n++){
        document.getElementById("in"+n).children[0].textContent = rank_data.data.fr.name[n-1];
        document.getElementById("in"+n).children[1].textContent = n.toString();
        document.getElementById("in"+n).children[2].textContent = rank_data.data.fr.test[n-1];
        document.getElementById("in"+n).children[3].textContent = rank_data.data.fr.point[n-1];
      }
      document.getElementById("card_place").textContent = rank_data.data.self.place[2];
      document.getElementById("card_task").textContent = rank_data.data.self.test[2];
      document.getElementById("card_point").textContent = rank_data.data.self.point[2];
      if(rank_data.data.self.place[3]== 1){
         document.getElementById("pressure").textContent = "目前在前端方向排行第一呢，微光娘好崇拜你呀！"
      }else{
            document.getElementById("pressure").textContent = "目前有"+rank_data.data.fr.amount+"位小伙伴和微光娘一起参与了前端招新活动，要一起加油哟！"

      }
      i=3;
    }
  }

  document.getElementById("to_ba").onclick = function(){
    if(i != 4){
      document.getElementById("id_card").style.backgroundColor = "#585858";
      document.getElementById("line").style.backgroundColor = "#585858";
      document.getElementById("TOP").textContent = "TOP10 of Back-end";
      let n = 1;
      let m = rank_data.data.ba.how_many;
      for(n;n<=10;m++){
        document.getElementById("in"+n).children[0].textContent = rank_data.data.ba.name[n-1];
        document.getElementById("in"+n).children[1].textContent = n.toString();
        document.getElementById("in"+n).children[2].textContent = rank_data.data.ba.test[n-1];
        document.getElementById("in"+n).children[3].textContent = rank_data.data.ba.point[n-1];
      }
      alert(i);
      document.getElementById("card_place").textContent = rank_data.data.self.place[3];
      document.getElementById("card_task").textContent = rank_data.data.self.test[3];
      document.getElementById("card_point").textContent = rank_data.data.self.point[3];
      if(rank_data.data.self.place[3]== 1){
         document.getElementById("pressure").textContent = "目前在后端方向排行第一呢，微光娘好崇拜你呀！"
      }else{
         document.getElementById("pressure").textContent = "目前有"+rank_data.data.ba.amount+"位小伙伴和微光娘一起参与了后端招新活动，要一起加油哟！"
      }
      i=4;
    }
  }  
})



</script>