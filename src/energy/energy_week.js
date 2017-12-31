function success() {
  var elem = document.getElementById("sleepBar");
  let width = elem.style.width;
  width = width.replace(/[^\d]/g, '');
  if(width >= 100) {
    width = 100;
  }
  let newWidth = parseInt(width)+10;


  console.log(width);
  elem.style.width = newWidth +'%';
  elem.style.backgroundColor = '#2ecc71';
  console.log(elem);
}

function fail() {
  var elem = document.getElementById("sleepBar");
  elem.style.width= '0%'
  elem.style.width = '100%';
  elem.style.backgroundColor = '#e74c3c';
}
