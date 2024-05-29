
window.addEventListener("keydown", logKeydown);
window.addEventListener("keyup", logKeyup);

function logKeydown(e) {
  let element = document.querySelector(`#${e.key}`);
  element.style.backgroundColor = "yellow";
  element.style.color = "black";
}

function logKeyup(e){
    let element = document.querySelector(`#${e.key}`);
    element.style.backgroundColor = "black";
    element.style.color = "white";
    element.style = 'box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
}d