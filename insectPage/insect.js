const screens = document.querySelectorAll(".screen");
const insectBtns = document.querySelectorAll(".chooseInsectBtn");
const startBtn = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
let src;
let alt;


const createInsect = () => {
    let insect = document.createElement("img");
    insect.src = src;
    insect.alt = alt;
    gameContainer.append(insect);
}

const game = () => {
    setTimeout(createInsect, 1000);
}

startBtn.addEventListener('click', () => {
    screens[0].classList.toggle("hide");
    screens[1].classList.toggle("hide");
})

for (let btn of insectBtns) {
    btn.addEventListener('click', () => {
        screens[1].classList.toggle("hide");
        screens[2].classList.toggle("hide");
        let img = btn.querySelector("img");
        src = img.getAttribute("src");
        alt = img.getAttribute("alt");
        game();
    })
}

