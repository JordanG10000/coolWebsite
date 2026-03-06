const clickBox = document.querySelector(".click");
const spinBox = document.querySelector(".spin");
const moveBox = document.querySelector(".move");
const hoverBox = document.querySelector(".hover");
const dblBox = document.querySelector(".dblclick");


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
let speed = 1;
let upAccel = 0;
let downAccel = 0;
let leftAccel = 0;
let rightAccel = 0;

document.addEventListener("keydown", (event) => {
    console.log(event.key);
  if (event.key == "ArrowUp") {
        upAccel++;
        downAccel = 0;
        leftAccel = 0;
        rightAccel = 0;
        y -= (speed + upAccel);
  }
  else if (event.key == "ArrowDown") {
        upAccel = 0;
        downAccel++;
        leftAccel = 0;
        rightAccel = 0;
        y += (speed + downAccel);
  }
  else if (event.key == "ArrowRight") {
        upAccel = 0;
        downAccel = 0;
        leftAccel = 0;
        rightAccel++;
        x += (speed + rightAccel);
  }
  else if (event.key == "ArrowLeft") {
        upAccel = 0;
        downAccel = 0;
        leftAccel++;
        rightAccel = 0;
        x -= (speed + leftAccel);
  }

  console.log(rightAccel);
  moveBox.style.transform = `translate(${x}px, ${y}px)`;

})

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.width = `${Math.floor(Math.random()*140)}px`;
    hoverBox.style.height = `${Math.floor(Math.random()*70)}px`;
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.width = '200px';
    hoverBox.style.height = '100px';
})


dblBox.addEventListener("dblclick", () => {
    window.open("event.html");

    function closeTab() {
        window.close();
    }
    setInterval(closeTab, 1000);
})
