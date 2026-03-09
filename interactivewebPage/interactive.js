const lengthIndicator = document.querySelector("h2");
const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");
const generateBtn = document.querySelector(".generateBtn");

// Random list of words and a random list of first and last names

let names = ["Jake", "Isaiah", "James", "John", "Bill", "Faridoni", "Jordan", "Huesca", "Austin", "Bowling", "Williams"];
let words = ["the", "was", "is", "am", "when", "how", "because", "I", "Jake Faridoni"];
let punctuation = [".", "!", "?", "...",];

generateBtn.addEventListener("click", () => {
    let text = "";
    let quoteLength = (Math.floor(Math.random() * words.length));
    for (let i = 0; i < quoteLength; i++)
    {
        let randomWord = `${words[Math.floor(Math.random() * words.length)]}`
        if (i == 0) {
            text += randomWord;
        }
        else {
            text += ` ${randomWord}`;
        }
    }
    let author = "-";
    for (let i = 0; i < 2; i++) {
        let randomName = names[Math.floor(Math.random() * names.length)];
        author += ` ${randomName}`;
    }
    let rndmPunctuation = punctuation[Math.floor(Math.random() * punctuation.length)];
    lengthIndicator.innerText = `Quote Length: ${quoteLength}`;
    quoteText.innerText = text + rndmPunctuation;
    authorText.innerText = author;
})

// take the list of words and get a random number to represnet how many words will be added into quote

// take 2 names from name list and use as the author

// run when user clicks the button
