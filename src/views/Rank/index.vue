<template>
  <div id="wgn"></div>
    <div id="id_card">
        <img src="./img/ShiroiLogo.png" alt="" id="white_logo">
        <div id="name">Competitor</div>
        
        <div id="data">
            <div id="place" class="data_elem">
                <h3 class="title">PLACE</h3>
                <p style="display: block;text-align: center;font-size: 25px;color: white;font-weight: 400;">12</p>
            </div>
            <div id="tasks" class="data_elem">
                <h3 class="title">TASKS</h3>
                <p style="display: block;text-align: center;font-size: 25px;color: white;font-weight: 400;">task6</p>
            </div>
            <div id="place" class="data_elem">
                <h3 class="title">POINT</h3>
                <p style="display: block;text-align: center;font-size: 25px;color: white;font-weight: 400;">1200</p>
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
  #wgn{
    position: absolute;
    right: 30px;
    top: 350px;
    width: 300px;
    height: 400px;
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
    line-height: 55px;
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
    top: 252px;
    left: 500px;
    /* background-color: aquamarine; */
  }
  #line>h3{
    position: relative;
    bottom: 45px;
    left: 10px;
    font-size: 40px;
    color: white;
  }
  #line{
    position: absolute;
    width: 1000px;
    height: 10px;
    left: 500px;
    top: 245px;
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
    top: 150px;
    left: 0px;
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
    const userId = 'your_user_id_here'; // 替换成实际的用户 ID
    const url = 'https://example.com/api/endpoint'; // 替换成实际的 API 端点
    var rank_data;
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ userId: userId }),
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
      let m = rank_data.cs.how_many;
      for(n;n<=m;n++){
        document.getElementById("in"+n).children[0].textContent = rank_data.cs.name[n-1];
        document.getElementById("in"+n).children[1].textContent = n.toString();
        document.getElementById("in"+n).children[2].textContent = rank_data.cs.test[n-1];
        document.getElementById("in"+n).children[3].textContent = rank_data.cs.point[n-1];
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
      let m = rank_data.ai.how_many;
      for(n;n<=m;n++){
        document.getElementById("in"+n).children[0].textContent = rank_data.ai.name[n-1];
        document.getElementById("in"+n).children[1].textContent = n.toString();
        document.getElementById("in"+n).children[2].textContent = rank_data.ai.test[n-1];
        document.getElementById("in"+n).children[3].textContent = rank_data.ai.point[n-1];
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
      let m = rank_data.fr.how_many;
      for(n;n<=m;n++){
        document.getElementById("in"+n).children[0].textContent = rank_data.fr.name[n-1];
        document.getElementById("in"+n).children[1].textContent = n.toString();
        document.getElementById("in"+n).children[2].textContent = rank_data.fr.test[n-1];
        document.getElementById("in"+n).children[3].textContent = rank_data.fr.point[n-1];
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
      let m = rank_data.ba.how_many;
      for(n;n<=10;m++){
        document.getElementById("in"+n).children[0].textContent = rank_data.ba.name[n-1];
        document.getElementById("in"+n).children[1].textContent = n.toString();
        document.getElementById("in"+n).children[2].textContent = rank_data.ba.test[n-1];
        document.getElementById("in"+n).children[3].textContent = rank_data.ba.point[n-1];
      }
      i=4;
    }
  }  
})



</script>