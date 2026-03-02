const panels = querySelector(".panel");

panels.addEventListener("click", () => {
    for (panel of panels) {
        panel.classList.remove("selected");
    }
})
