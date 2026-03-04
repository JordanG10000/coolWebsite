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
let upAccel = 0;
let downAccel = 0;
let leftAccel = 0;
let rightAccel = 0;
document.addEventListener("keydown", (event) => {

  if (event.key == "ArrowUp") {
        upAccel++;
        downAccel = 0;
        leftAccel = 0;
        rightAccel = 0;
        y -= 10 + upAccel;
  }
  else if (event.key == "ArrowDown") {
        upAccel = 0;
        downAccel++;
        leftAccel = 0;
        rightAccel = 0;
        y += (10 + downAccel);
  }
  else if (event.key == "ArrowRight") {
        upAccel = 0;
        downAccel = 0;
        leftAccel = 0;
        rightAccel++;
        x += 10;
  }
  else if (event.key == "ArrowLeft") {
        upAccel = 0;
        downAccel = 0;
        leftAccel++;
        rightAccel = 0;
        x -= 10;
  }

  moveBox.style.transform = `translate(${x}px, ${y}px)`;

})
