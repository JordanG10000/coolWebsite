const buttons = document.querySelector(".buttons");

for (let i = 0; i < 1000; i++) {
    btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = "Click Me";
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    })
    buttons.appendChild(btn);
}

