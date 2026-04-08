const container = document.querySelector(".container");
const text = document.querySelector(".text");

let totalTime = 7500;
let breathTime = (totalTime / 5) * 2;
let holdTime = (totalTime / 5)

breathAnim()

function breathAnim() {
    text.innerText = 'Breath in!';
    container.classList.add('grow');

    setTimeout( ()=> {
        text.innerText = 'Hold';

        setTimeout( ()=> {
            text.innerText = 'Breath out!';

            container.classList.remove('grow');
            container.classList.add('shrink');
        }, holdTime);
    }, breathTime);

}
