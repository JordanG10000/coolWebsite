const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");
const generateBtn = document.querySelector(".generateBtn");

// Random list of words and a random list of first and last names

let names = ["Jake", "Isaiah", "James", "John", "Bill", "Faridoni", "Huesca", "Austin", "Bowling", "Williams"];
let words = ["the", "was", "is", "am", "when", "how", "because", "I", "Jake Faridoni"];

let text = "";
generateBtn.addEventListener("click", () => {
    text = "";
    let quoteLength = (Math.floor(Math.random() * words.length));
    console.log(text);
    for (let i = 0; i < quoteLength; i++)
    {
        let randomWord = `${words[Math.floor(Math.random() * words.length)]}`
        text = text + randomWord;
        console.log(randomWord);
    }
    quoteText.style.content = text;
})

// take the list of words and get a random number to represnet how many words will be added into quote

// take 2 names from name list and use as the author

// run when user clicks the button
