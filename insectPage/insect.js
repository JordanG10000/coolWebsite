const screens = document.querySelectorAll(".screen");
const insectBtns = document.querySelectorAll(".chooseInsectBtn");
const startBtn = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const scoreCount = document.getElementById("score");
const timer = document.getElementById("time");
let score = 0;
let seconds = 0;

const createInsect = (src, alt) => {
    let insect = document.createElement("img");
    insect.classList.add("insect");
    insect.src = src;
    insect.alt = alt;
    insect.style.transform = `rotate(${Math.random() * 360}deg)`;
    let { x, y } = randomLocation()
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.addEventListener("click", (e) => {
        catchInsect(e.target);
        createInsect(src, alt)
    })
    gameContainer.append(insect);
}

const game = (src, alt) => {
    setInterval(updateTimer, 1000);
    setTimeout(createInsect(src, alt), 1000);
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
        game(src, alt);
    })
}

function randomLocation() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let x = Math.random() * (width - 200) + 100;
    let y = Math.random() * (height - 200) + 100;
    return { x, y }
}

function catchInsect(insect) {
    insect.classList.add("caught");
    increaseScore()
    setTimeout(() => insect.remove(), 2000);
}

function increaseScore() {
    score++;
    scoreCount.innerText = `Score: ${score}`
}

function updateTimer() {
    seconds++
    let m = Math.floor(seconds/60);
    let s = seconds % 60

    if (m < 10) {
        m = `0${m}`
    }

    if (s < 10) {
        s = `0${s}`
    }

    timer.innerText = `Time: ${m}:${s}`
}
