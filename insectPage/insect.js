const screens = document.querySelectorAll(".screen");
const insectBtns = document.querySelectorAll(".chooseInsectBtn");
const startBtn = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");



const createInsect = (src, alt) => {
    let insect = document.createElement("img");
    insect.classList.add("insect");
    insect.src = src;
    insect.alt = alt;
    insect.style = `transform: rotate(${Math.random() * 360}deg)`;
    insect.addEventListener("click", () => {
        insect.classList.add("caught")
    })
    gameContainer.append(insect);
}

const game = (src, alt) => {
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

