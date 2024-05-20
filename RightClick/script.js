let contextMenu = document.querySelector(".container");
let share = document.querySelector(".share-list");
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let x = e.offsetX;
  let y = e.offsetY;

  let winWidth = window.innerWidth;
  let cmWidth = contextMenu.offsetWidth;

  let winHeight = window.innerHeight;
  let cmHeight = contextMenu.offsetHeight;

  x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

  if (x > winWidth - cmWidth - share.offsetWidth) {
    share.style.left = "-170px";
  } else {
    share.style.left = "260px";
  }
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});
document.addEventListener("click", () => {
  contextMenu.style.visibility = "hidden";
});