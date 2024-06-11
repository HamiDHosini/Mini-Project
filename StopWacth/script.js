let hor = 0;
let min = 0;
let second = 0;

let getHor = document.querySelector('.hor');
let getMin = document.querySelector('.min');
let getSecond = document.querySelector('.sec');

let StartBtn = document.querySelector('.btn-start');
let StopBtn = document.querySelector('.btn-stop');
let ResetBtn = document.querySelector('.btn-reset');

let Time;

StartBtn.addEventListener('click' , function(){
      Time = setInterval(StartTime , 1000);
      StartBtn.style.display = 'none';
});
StopBtn.addEventListener('click' , function(){
  clearInterval(Time);
  StartBtn.style.display = 'inline';
});
ResetBtn.addEventListener('click' , function(){
  hor = '00';
  min = '00';
  second = '00';

  getHor.innerHTML = hor;
  getMin.innerHTML = min;
  getSecond.innerHTML = second;
});


function StartTime() {
  second++;
  if(second <= 9){
    getSecond.innerHTML = '0' + second;

  }
  else{
    getSecond.innerHTML = second;
  }
  if(second >= 59){
    second = '0';
    min++;
    if(min <= 9){
      getMin.innerHTML = '0' + min;
    }
    else{
      getMin.innerHTML = min;
    }
    if(min > 58){
      min = '0';
      hor++;
      if(hor <= 9){
        getHor.innerHTML = '0' + hor;
      }
      else{
        getHor.innerHTML = hor;
      }
    }
  }
}
