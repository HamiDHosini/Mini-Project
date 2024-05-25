window.addEventListener('load' , ShowTasks);
let list = document.querySelector('ul');
let AddBtn = document.querySelector('.AddBtn');
let input = document.querySelector('input');
let Tasks ;
if(!localStorage.getItem('todo')){
  Tasks = [];
}
else{
  Tasks = GetTasks();
}
function CreateTask(text) {
  let li = document.createElement('li');
  li.textContent = text;
  return li;
}
AddBtn.addEventListener('click' , (e)=>{
  if(input.value){
  let text = input.value;
  let task = CreateTask(text);
  task.innerHTML += '<span class="closeBtn"><i class="bi bi-trash"></i></span>';
  list.appendChild(task);
  SaveTask(text);
  input.value = '';
  }
  else{
    alert('لیست نمیتواند خالی باشد');
    e.preventDefault();
  }
});
list.addEventListener('click' , (e)=>{
  if(e.target.nodeName =='I'){
      let Target = e.target.parentElement.parentElement;
      Target.style.display = 'none';
      Tasks.splice(Tasks.indexOf(Target.textContent),1);
      localStorage.setItem('todo' , Tasks);
  }
  if(e.target.nodeName == 'LI'){
    console.log(e.target.nodeName)
    e.target.classList.toggle("Done");
  }
  
});
function SaveTask(text) {
  Tasks.push(text);
  localStorage.setItem('todo' , Tasks);
}
function GetTasks() {
  return localStorage.getItem('todo').split(',');
}
function ShowTasks(text) {
  let myTasks = GetTasks();
  for(let i = 0 ; i<= myTasks.length ; i++){
    let task = CreateTask(myTasks[i]);
    task.innerHTML += '<span class="closeBtn"><i class="bi bi-trash"></i></span>';
    list.appendChild(task);
  }
}