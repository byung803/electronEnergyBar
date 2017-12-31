const today_json = require('../json/energy_today.json');

document.getElementById('energy').addEventListener('click', active);

// document.getElementById('noFap').addEventListener('click', active);
// document.getElementById('exercise').addEventListener('click', active);
// document.getElementById('noGameView').addEventListener('click', active);
// document.getElementById('sleep').addEventListener('click', active);
// document.getElementById('drink').addEventListener('click', active);
//
// document.getElementById('food1').addEventListener('click', active);
// document.getElementById('food2').addEventListener('click', active);
// document.getElementById('food3').addEventListener('click', active);
// document.getElementById('food4').addEventListener('click', active);
// document.getElementById('food5').addEventListener('click', active);
// document.getElementById('food6').addEventListener('click', active);

let d= new Date();
let today = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
let day = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
let atts = ["noFap", "exercise", "noGameView", "sleep", "drink", "food1", "food2", "food3", "food4", "food5", "food6"];

document.getElementById('date').innerHTML = today+' '+day[d.getDay()];
console.log(today_json);
console.log(today_json[today].noFap);

function active(e) {
    if(e.target.style.backgroundColor==='') {
      e.target.style.color = "#fff"
      e.target.style.backgroundColor='#5cb85c'; //초록
    } else if (e.target.style.backgroundColor==='rgb(92, 184, 92)') {
      e.target.style.color = "#fff"
      e.target.style.backgroundColor='#f1c40f'; //노랑
    } else if (e.target.style.backgroundColor==='rgb(241, 196, 15)') {
      e.target.style.color = "#fff"
      e.target.style.backgroundColor='#c0392b'; //빨강
    } else if (e.target.style.backgroundColor==='rgb(192, 57, 43)') {
      e.target.style.color = "#fff"
      e.target.style.backgroundColor='#fff'; //흰색
      e.target.style.borderColor ='#fff';
    } else {
      e.target.style.color = ""
      e.target.style.backgroundColor=''; //기본
      e.target.style.borderColor ='';
    }
    //console.log(e.target.style);
}
