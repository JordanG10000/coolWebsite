const clickBox = document.querySelector(".click");
const spinBox = document.querySelector(".spin");
const moveBox = document.querySelector(".move");


clickBox.addEventListener("click", (e) => {
        e.target.style.background = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
})

spinBox.addEventListener("click", (e) => {

})

let y = 0;
let x = 0;
document.addEventListener("keydown", (event) => {
    console.log(event.key);
  if (event.key == "ArrowUp") {
        moveBox.style.transform = `translateY(${y-10}px)`;
  }
  else if (event.key == "ArrowDown") {
        moveBox.style.transform = `translateY(${y+10}px)`;
  }
  else if (event.key == "ArrowRight") {
        moveBox.style.transform = `translateX(${x+10}px)`;

  }
  else if (event.key == "ArrowLeft") {
        moveBox.style.transform = `translate(${x-10}px)`;

  }
})
