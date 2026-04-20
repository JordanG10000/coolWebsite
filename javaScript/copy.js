const div = document.querySelector("div");
let minimum = 40;
let maximum = 300;
let mSeconds = 10;
let pixelRate = 1;
let size = minimum;
let direction = "up";

let int = setInterval(breath, mSeconds);

function breath() {
    if (size > maximum) {
        direction = "down";
    }
    else if (size < minimum){
        direction = "up";
    }

    if (direction == "up") {
        size += pixelRate;
        div.style.width = `${size + Math.random(-600, 100) * 100}px`;
        div.style.height = `${size + Math.random(-100, 600) * 100}px`;
        console.log("grr");
    }
    else {
        size -= pixelRate;
        div.style.width = `${size + Math.random(-600, 100) * 100}px`;
        div.style.height = `${size + Math.random(-100, 600) * 100}px`;
        console.log("yippee");
    }
    div.style.transform = `rotate(${Math.random(-100, 100) * 200}deg)`;
    div.style.background = `rgb(${Math.random(100, 255)*110}, ${Math.random(100, 255)* 110}, ${Math.random(100, 255) * 110})`
}

