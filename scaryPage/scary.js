const body = document.querySelector("body");


function createMessage() {
    let message = document.createElement("h1");
    message.innerText = "SELF-DESTRUCTING";
    message.style.backgroundColor = "red";
    body.append(message);
    window.open("scary.html");
}

setInterval(createMessage(), 1000)
