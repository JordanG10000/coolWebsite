const lengthIndicator = document.querySelector("h2");
const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");
const generateBtn = document.querySelector(".generateBtn");
const trigger = document.querySelector(".switch");
const slider = document.querySelector(".slider");
let maxSentences = 5;

// Random list of words and a random list of first and last names

trigger.addEventListener("click", () => {
    slider.classList.toggle("complex");
})

let names = ["Jake", "Isaiah", "James", "John", "Bill", "Faridoni", "Jordan", "Huesca", "Austin", "Bowling", "Williams", "Goodall"];
let words = ["the", "was", "is", "am", "when", "how", "because", "I", "Jake Faridoni"];
let nouns = [
    "time", "person", "year", "way", "day", "thing", "man", "world", "life", "hand",
    "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government",
    "company", "number", "group", "problem", "fact", "Jake Faridoni"
];
let verbs = [
    "be", "have", "do", "say", "get", "make", "go", "know", "take", "see",
    "come", "think", "look", "want", "give", "use", "find", "tell", "ask", "work",
    "seem", "feel", "try", "leave", "call"
];
let conjunctions = [
    "and", "that", "but", "or", "as", "if", "when", "than", "because", "while",
    "where", "after", "so", "though", "since", "until", "whether", "before", "although", "nor",
    "like", "once", "unless", "now", "except"
];

let punctuation = [".", "!", "?", "...",];

generateBtn.addEventListener("click", () => {
    if (slider.classList.contains("complex")) {
        complexQuote();
    }
    else {
        simpleQuote();
    }
    getAuthor();
})

function complexQuote() {
    let text = "";
    let sentences = (Math.floor(Math.random() * maxSentences + 1));
    for (let i = 0; i < sentences; i++)
    {
        // Format: "Conjunction -> Noun -> Verb -> Noun"
        let randomConjunction = `${conjunctions[Math.floor(Math.random() * conjunctions.length)]}`;
        let randomNoun = `${nouns[Math.floor(Math.random() * nouns.length)]}`;
        let randomNoun2 = `${nouns[Math.floor(Math.random() * nouns.length)]}`;
        let randomVerb = `${verbs[Math.floor(Math.random() * verbs.length)]}`;
        let rndmPunctuation = punctuation[Math.floor(Math.random() * punctuation.length)];

        upperConjunction = randomConjunction.charAt(0).toUpperCase() + randomConjunction.slice(1);
        // ensures there isnt a space at the start of the quote, otherwise adds spaces
        if (i == 0) {
            text += `${upperConjunction} ${randomNoun} ${randomVerb} ${randomNoun2 + rndmPunctuation}`;
        }
        else {
            text += `  ${upperConjunction} ${randomNoun} ${randomVerb} ${randomNoun2 + rndmPunctuation}`;
        }
    }
    lengthIndicator.innerText = `Quote Sentences: ${sentences}`;
    quoteText.innerText = text;
}

function simpleQuote() {
    let text = "";
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
    lengthIndicator.innerText = `Quote Length: ${quoteLength}`;
    let rndmPunctuation = punctuation[Math.floor(Math.random() * punctuation.length)];
    quoteText.innerText = text + rndmPunctuation;


}

function getAuthor() {
     let author = "-";
    // grabs 2 names for the author from the name list
    for (let i = 0; i < 2; i++) {
        let randomName = names[Math.floor(Math.random() * names.length)];
        author += ` ${randomName}`;
    }
    // Places generated text into the html to display it to the user.
    authorText.innerText = author;
}
