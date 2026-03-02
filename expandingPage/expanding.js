const panels = querySelector(".panel");

panels.addEventListener("click", (event) => {
    for (panel of panels) {
        panel.classList.remove("selected");
    }

})
