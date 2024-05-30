let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');
let deg = 6;

setInterval(()=>{

        let d = new Date();
        let s = d.getSeconds() * deg;
        let m = d.getMinutes() * deg;
        let h = d.getHours() * 30;
    
        hour.style.transform = `rotateZ(${h + (m/12)}deg)`;
        sec.style.transform = `rotateZ(${s}deg)`;
        min.style.transform =`rotateZ(${m}deg)`;
} , 1000);

