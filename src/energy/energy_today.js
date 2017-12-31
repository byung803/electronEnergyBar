const fs = require("fs");
const today_json = require('../json/energy_today.json');
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
//console.log(today_json[today].noFap);

if(today_json[today] === undefined) {
  today_json[today] = {};

  for (let att of atts) {
    today_json[today][att] = 9;
  }

  fs.writeFile(`${__dirname}/../json/energy_today.json`, JSON.stringify(today_json), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been writed");
  });
}

console.log(today_json);

for (let att of atts) {
  if(today_json[today][att] === 1) {
      document.getElementById(att).style.color = "#fff"
      document.getElementById(att).style.backgroundColor='#5cb85c';
  } else if(today_json[today][att] === 2) {
      document.getElementById(att).style.color = "#fff"
      document.getElementById(att).style.backgroundColor='#f1c40f';
  } else if(today_json[today][att] === 3) {
      document.getElementById(att).style.color = "#fff"
      document.getElementById(att).style.backgroundColor='#c0392b';
  } else if(today_json[today][att] === 9) {
      document.getElementById(att).style.backgroundColor='#f5f5f5';
  } else if(today_json[today][att] === 0) {
      document.getElementById(att).style.color = "#fff"
      document.getElementById(att).style.backgroundColor='#fff';
  } else {
      document.getElementById(att).style.color = ""
      document.getElementById(att).style.backgroundColor=''; //기본
  }
}
