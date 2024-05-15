let copyBTN = document.querySelector('button');
let textarea = document.querySelector('textarea');

copyBTN.addEventListener('click',function(){
    textarea.select();
    let textValue = textarea.value;
    console.log(textValue);
    navigator.clipboard.writeText(textValue);
    copyBTN.innerText = 'کپی شد';
    

    setTimeout(() => {
    copyBTN.innerText = 'کپی کن';
    copyBTN.style.backgroundColor = '#03A9f4'
    }, 1500);
});f




