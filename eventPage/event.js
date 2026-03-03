const clickBox = document.querySelector(".click");
const spinBox = document.querySelector(".spin");

clickBox.addEventListener("click", (e) => {
    e.target.style.background = `rgb(${Math.random(100,255)*100}, ${Math.random(100,255)*100}, ${Math.random(100,255)*100})`
})

spinBox.addEventListener("click", (e) => {

})
