const buttons = document.querySelector(".buttons");
const sounds = document.querySelectorAll("audio");

for (let sound of sounds) {
    btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = `${sound.id.toUpperCase()}`;

    btn.addEventListener("click", () => {
        if (!sound.paused) {
            sound.pause()
            sound.currentTime = 0;
        }
        else {
            sound.play();
        }
    })

    buttons.appendChild(btn);
}

