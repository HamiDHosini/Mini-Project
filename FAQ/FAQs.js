let acc = document.querySelectorAll('.open');
let panel;

for(let i = 0; i < acc.length ; i++){

acc[i].addEventListener('click' , function(){
    acc[i].classList.toggle('active');

    let panel = this.nextElementSibling;
    if(panel.style.maxHeight){
        panel.style.maxHeight = null;
    }
    else{
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
});
}