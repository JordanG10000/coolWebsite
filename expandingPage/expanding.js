const panels = querySelector(".panel");

panels.addEventListener("click", (event) => {
    for (panel of panels) {
        panel.classList.remove("selected")
        panel.classList.add("unselected");
    }
    event.target.classlist.remove("unselected");
    event.target.classList.add("selected");
})
