let selectMenu = document.querySelectorAll('select')
let timeBox = document.querySelector('.time')
let setAlarm = document.querySelector('#setAlarm')
let alarmTime , alarmSet = 'noset';  
let content = document.querySelector('.content')

let ring = new Audio('./ringtone.mp3')
for(let i = 23 ; i>=0 ; i--){
  if(i < 10){
    i = '0' + i
  }else{
    i = i
  }
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option)

}
for(let i = 59 ; i>=0 ; i--){
  if(i < 10){
    i = '0' + i
  }else{
    i = i
  }
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML('afterend' , option)

}

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = h < 10 ? '0' + h: h;
  m = m < 10 ? '0' + m: m;
  s = s < 10 ? '0' + s: s;
  timeBox.innerHTML = `${h}:${m}:${s}`;
  if(alarmTime == `${h}:${m}`){
    ring.play()
    ring.loop = true
  }
}, 1000);

setAlarm.addEventListener('click' , ()=>{
  console.log('set')
  alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`
  if(alarmTime.includes('Hour') || alarmTime.includes('Minute')){
    
    return alert('زمان هشدار را به درستی وارد کنید');

  }
  checkSet(alarmSet)

})
function checkSet(set){
  if(set == 'noset'){
    content.classList.add('disable')
    setAlarm.innerText = 'clearAlarm';
    alarmSet = 'set'
  }else{
    content.classList.remove('disable')
    alarmTime = ''
    ring.pause()
    alarmSet = 'noset'
    setAlarm.innerText = 'SetAlarm'
  }
}