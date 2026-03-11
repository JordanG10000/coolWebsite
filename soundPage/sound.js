const buttons = document.querySelector(".buttons");
const sounds = document.querySelector("audio");

for (let i = 0; i < sounds.length; i++) {
    btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = "Click Me";

    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    })

    buttons.appendChild(btn);
}

