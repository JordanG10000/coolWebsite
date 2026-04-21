let loadText = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");

let load = 0;

const blurring = () => {
        load++;
        loadText.innerText = `${load}%`;
        loadText.style.opacity = 1 - load/100;
        bg.style.filter = `blur(${50 - (load/2)}px)`;

        if (load > 99) {
            clearInterval(int);
        }
}

let int = setInterval(blurring, 300);


