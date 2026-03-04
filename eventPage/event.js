const clickBox = document.querySelector(".click");
const spinBox = document.querySelector(".spin");
const moveBox = document.querySelector(".move");


clickBox.addEventListener("click", (e) => {
        e.target.style.background = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
})

spinBox.addEventListener("click", (e) => {
    if (spinBox.style.animationPlayState === "paused") {
        spinBox.style.animationPlayState = "running"
    }
    else {
        spinBox.style.animationPlayState = "paused";
    }
})

let y = 0;
let x = 0;
document.addEventListener("keydown", (event) => {

  if (event.key == "ArrowUp") {
        y -= 10;
        moveBox.style.transform = `translate(${x}px, ${y}px)`;
  }
  else if (event.key == "ArrowDown") {
        y += 10;
        moveBox.style.transform = `translate(${x}px, ${y}px)`;
  }
  else if (event.key == "ArrowRight") {
        x += 10;
        moveBox.style.transform = `translate(${x}px, ${y}px)`;
  }
  else if (event.key == "ArrowLeft") {
        x -= 10;
        moveBox.style.transform = `translate(${x}px, ${y}px)`;
  }
})
