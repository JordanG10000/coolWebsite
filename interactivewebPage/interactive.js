const lengthIndicator = document.querySelector("h2");
const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");
const generateBtn = document.querySelector(".generateBtn");

// Random list of words and a random list of first and last names

let names = ["Jake", "Isaiah", "James", "John", "Bill", "Faridoni", "Jordan", "Huesca", "Austin", "Bowling", "Williams", "Goodall"];
let words = ["the", "was", "is", "am", "when", "how", "because", "I", "Jake Faridoni"];
let punctuation = [".", "!", "?", "...",];

generateBtn.addEventListener("click", () => {
    let text = "";
    // Gets length of quote being generated
    let quoteLength = (Math.floor(Math.random() * words.length));
    for (let i = 0; i < quoteLength; i++)
    {
        // Gets as many words as the length of the quote
        let randomWord = `${words[Math.floor(Math.random() * words.length)]}`
        // ensures there isnt a space at the start of the quote, otherwise adds spaces
        if (i == 0) {
            text += randomWord;
        }
        else {
            text += ` ${randomWord}`;
        }
    }
    let author = "-";
    // grabs 2 names for the author from the name list
    for (let i = 0; i < 2; i++) {
        let randomName = names[Math.floor(Math.random() * names.length)];
        author += ` ${randomName}`;
    }
    // Places generated text into the html to display it to the user.
    let rndmPunctuation = punctuation[Math.floor(Math.random() * punctuation.length)];
    lengthIndicator.innerText = `Quote Length: ${quoteLength}`;
    quoteText.innerText = text + rndmPunctuation;
    authorText.innerText = author;
})
