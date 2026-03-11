const buttons = document.querySelector(".buttons");
const sounds = document.querySelectorAll("audio");

for (let i = 0; i < sounds.length; i++) {
    btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = `${sounds[i].id.toUpperCase()}`;

    btn.addEventListener("click", () => {
        if (!sounds[i].paused) {
            sounds[i].pause()
            sounds[i].currentTime = 0;
        }
        else {
            sounds[i].play();
        }
    })

    buttons.appendChild(btn);
}

