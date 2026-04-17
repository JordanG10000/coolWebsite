
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

const rPaddel = document.createElement("div");
document.body.appendChild(rPaddel);
let p2PosY = windowHeight / 2 - padHeight / 2;
let p2PosX = windowWidth - pPosX - padWidth;
let p2Up = false;
let p2Down = false;
let p2 = rPaddel.style;
// Ball Variables
const ball = document.createElement("div");
let ballRadius = 30;
let xPos = windowWidth / 2 - ballRadius;
let yPos = windowHeight / 2 - ballRadius;
let xDirection = 1;
let yDirection = 1;
let speed = 5;
let s = ball.style


createPaddels();
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
    console.log(windowWidth);

    if (yPos > (windowHeight - (ballRadius * 2)) || yPos < 0) {
        yDirection *= -1;
    }
    if (xPos > (windowWidth - (ballRadius * 2)) || xPos < 0) {
        xDirection *= -1;
    }


    // Paddle Collisions

    // Left Paddel
    let padTop = pPosY;
    let padBtm = pPosY + padHeight;
    let padRgt = pPosX + padWidth;

    // Right Paddel
    let pad2Top = p2PosY;
    let pad2Btm = p2PosY + padHeight;
    let pad2Lft = p2PosX;

    // Ball
    let ballTop = yPos;
    let ballBtm = yPos + 2 * ballRadius;
    let ballLft = xPos;

    // Left paddel
    if (
        (ballBtm >= padTop) &&
        (ballTop <= padBtm) &&
        (ballLft <= padRgt) &&
        (xDirection == -1)
    ) {
        xDirection *= -1;
    }

    // Right paddel
    if (
        (ballBtm >= pad2Top) &&
        (ballTop <= pad2Btm) &&
        (ballLft >= pad2Lft) &&
        (xDirection == 1)
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

    if (p2Up === true) {
        if (p2PosY >= 0) {
            p2PosY -= padSpeed;
        }
    }
    if (p2Down === true) {
        if (p2PosY <= windowHeight - padHeight) {
            p2PosY += padSpeed;
        }
    }
    p2.top = `${p2PosY}px`;
}

function createPaddels() {
    // Left paddel
    p.height = `${padHeight}px`;
    p.width = `${padWidth}px`;
    p.backgroundColor = 'blue';
    p.position = 'absolute';
    p.left = `${pPosX}px`;
    p.top = `${windowHeight / 2 - padHeight / 2}px`;

    // Right paddel
    p2.height = `${padHeight}px`;
    p2.width = `${padWidth}px`;
    p2.backgroundColor = 'blue';
    p2.position = 'absolute';
    p2.left = `${p2PosX}px`;
    p2.top = `${windowHeight / 2 - padHeight / 2}px`;
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
    // Left paddel
    if (e.key == 'w') {
        if (pPosY >= 0) {
            pUp = true;
        }
    }
    if (e.key == 's') {
        if (pPosY <= windowHeight - padHeight) {
            pDown = true;
        }
    }
    // Right paddel
    if (e.key == 'ArrowUp') {
        if (p2PosY >= 0) {
            p2Up = true;
        }
    }
    if (e.key == 'ArrowDown') {
        if (p2PosY <= windowHeight - padHeight) {
            p2Down = true;
        }
    }
})

document.addEventListener('keyup', (e) => {
    // Left Paddel
    if (e.key == 'w') {
        pUp = false;
    }
    if (e.key == 's') {
        pDown = false;
    }
    // Right paddel
    if (e.key == 'ArrowUp') {
        p2Up = false;
    }
    if (e.key == 'ArrowDown') {
        p2Down = false;
    }
})
