const clickBox = document.querySelector(".click");
const spinBox = document.querySelector(".spin");


clickBox.addEventListener("click", (e) => {
    e.target.style.background = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
})

spinBox.addEventListener("click", (e) => {

})
