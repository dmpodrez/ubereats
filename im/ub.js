let btn = document.querySelector(':hover');
function handlerColor(){
    btn.color = 'red';  
  }
  btn.addEventListener('mouseover', handlerColor);