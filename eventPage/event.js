const clickBox = document.querySelector(".click");
const spinBox = document.querySelector(".spin");

console.log(Math.floor(Math.random(100,255)*100));

clickBox.addEventListener("click", (e) => {
    e.target.style.background = `rgb(${Math.floor(Math.random(100,255)*100)}, ${Math.random(100,255)*100}, ${Math.random(100,255)*100})`
})

spinBox.addEventListener("click", (e) => {

})
