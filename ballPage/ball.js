
// Window Variables
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

// Paddel Variables
const lPaddel = document.createElement("div");
document.body.appendChild(lPaddel);
let padWidth = 20;
let padHeight = 150;
let pPosY = windowHeight / 2 - padHeight / 2;
let pPosX = 30;
let pUp = false;
let pDown = false;
let padSpeed = 10;
let p = lPaddel.style;

let padTop = pPosY;
let padBtm = pPosY + padHeight;
let padRgt = pPosX + padWidth;

// Ball Variables
const ball = document.createElement("div");
let ballRadius = 30;
let xPos = windowWidth / 2 - ballRadius;
let yPos = windowHeight / 2 - ballRadius;
let xDirection = 1;
let yDirection = 1;
let speed = 5;
let s = ball.style

let ballTop = yPos;
let ballBtm = yPos + 2 * ballRadius;
let ballLft = xPos;


createLPaddel();
createBall();


// setInterval(moveBall, 10);

function animate() {
    moveBall();
    requestAnimationFrame(animate);
}

animate();

function moveBall() {
    xPos += xDirection * speed;
    yPos += yDirection * speed;
    s.left = `${xPos}px`;
    s.top = `${yPos}px`;
    if (yPos > (windowHeight - (ballRadius * 2)) || yPos < 0) {
        yDirection *= -1;
    }
    if (xPos > (windowWidth - (ballRadius * 2)) || xPos < 0) {
        xDirection *= -1;
    }


    // Paddle Collisions

    let padTop = pPosY;
    let padBtm = pPosY + padHeight;
    let padRgt = pPosX + padWidth;
    let ballTop = yPos;
    let ballBtm = yPos + 2 * ballRadius;
    let ballLft = xPos;

    if (
        (ballBtm >= padTop) &&
        (ballTop <= padBtm) &&
        (ballLft <= padRgt) &&
        (xDirection == -1)
    ) {
        xDirection *= -1;
    }


    // Movement Handler
    if (pUp === true) {
        if (pPosY >= 0) {
            pPosY -= padSpeed;
        }
    }
    if (pDown === true) {
        if (pPosY <= windowHeight - padHeight) {
            pPosY += padSpeed;
        }
    }
    p.top = `${pPosY}px`;
}

function createLPaddel() {
    p.height = `${padHeight}px`;
    p.width = `${padWidth}px`;
    p.backgroundColor = 'blue';
    p.position = 'absolute';
    p.left = `${pPosX}px`;
    p.top = `${windowHeight / 2 - padHeight / 2}px`;
}

function createBall() {
    document.body.appendChild(ball);
    s.height = `${2 * ballRadius}px`;
    s.width = `${2 * ballRadius}px`;
    s.borderRadius = '50%';
    s.backgroundColor = 'red';
    s.position = 'absolute';
    s.top = `${windowHeight / 2 - ballRadius}px`;
    s.left = `${windowWidth / 2 - ballRadius}px`;
}

window.addEventListener('resize', () => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'w' || e.key == 'ArrowUp') {
        if (pPosY >= 0) {
            pUp = true;
        }
    }
    if (e.key == 's' || e.key == 'ArrowDown') {
        if (pPosY <= windowHeight - padHeight) {
            pDown = true;
        }
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key == 'w' || e.key == 'ArrowUp') {
        pUp = false;
    }
    if (e.key == 's' || e.key == 'ArrowDown') {
        pDown = false;
    }
})
