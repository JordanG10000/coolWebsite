const clickBox = document.querySelector(".click");
const spinBox = document.querySelector(".spin");


clickBox.addEventListener("click", (e) => {
    for (let i = 0; i < 10000; i++){
        console.log("hasdfdflks");
        e.target.style.background = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    }

})

spinBox.addEventListener("click", (e) => {

})
