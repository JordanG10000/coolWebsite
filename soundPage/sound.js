const buttons = document.querySelector(".buttons");
const sounds = document.querySelectorAll("audio");

        setInterval(() => {
            btn.classList.toggle("active")
        }, sound.duration * 1000)

for (let sound of sounds) {
    btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = `${sound.id.toUpperCase()}`;

    btn.addEventListener("click", () => {
        if (!sound.paused) {
            btn.classList.toggle("active");
            sound.pause()
            sound.currentTime = 0;
            clearInterval()
        }
        else {
            sound.play();
            btn.classList.toggle("active")
        }
    })

    buttons.appendChild(btn);
}

