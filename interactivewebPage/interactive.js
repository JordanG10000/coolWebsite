const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");
const generateBtn = document.querySelector(".generateBtn");

// Random list of words and a random list of first and last names

let names = ["Jake", "Isaiah", "James", "John", "Bill", "Faridoni", "Huesca", "Austin", "Bowling", "Williams"];
let words = ["the", "was", "is", "am", "when", "how", "because", "I", "Jake Faridoni"];

generateBtn.addEventListener(() => {
    let text = "";
    let quoteLength = (Math.floor(Math.random() * words.length));
    for (let i = 0; i < quoteLength; i++)
    {
        let text += `${words[Math.random() * words.length]}`
    }
})

// take the list of words and get a random number to represnet how many words will be added into quote

// take 2 names from name list and use as the author

// run when user clicks the button
