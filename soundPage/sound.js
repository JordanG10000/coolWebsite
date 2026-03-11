const buttons = document.querySelector(".buttons");
const sounds = document.querySelectorAll("audio");



for (let sound of sounds) {
    btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = `${sound.id.toUpperCase()}`;



    btn.addEventListener("click", () => {
        let togge = setInterval(() => {
            btn.classList.toggle("active")
        }, sound.duration * 1000)

        if (!sound.paused) {
            btn.classList.toggle("active");
            sound.pause()
            sound.currentTime = 0;
        }
        else {
            sound.play();
            btn.classList.toggle("active")
        }
        clearInterval(togge);
    })

    buttons.appendChild(btn);
}

