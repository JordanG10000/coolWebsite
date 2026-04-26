const lengthIndicator = document.querySelector("h2");
const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");
const generateBtn = document.querySelector(".generateBtn");
const trigger = document.querySelector(".switch");
const slider = document.querySelector(".slider");
let maxSentences = 5;
let maxWords = 10;

// import {words as wordList} from 'javaScript\words\words.js';

// for (let words in wordList) {
//     console.log(words);
// }
// Random list of words and a random list of first and last names

trigger.addEventListener("click", () => {
    slider.classList.toggle("complex");
})

let names = [
    "Jake", "Isaiah", "James", "John", "Bill", "Faridoni", "Jordan", "Huesca", "Austin", "Bowling",
    "Williams", "Goodall", "Ta'rique", "Dunte", "Dixon"];
let simpleWords = ["the", "was", "is", "am", "when", "how", "because", "I", "Jake Faridoni"];
let nouns = [
    "time", "person", "year", "way", "day", "thing", "man", "world", "life", "hand",
    "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government",
    "company", "number", "group", "problem", "fact", "Jake Faridoni", "Ta'rique Dunte Dixon"
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
    getAuthor()
})

const rndm = {
    random() {return simpleWords[Math.floor(Math.random() * simpleWords.length)]},
    conjunction() { return conjunctions[Math.floor(Math.random() * conjunctions.length)] },
    noun() { return nouns[Math.floor(Math.random() * nouns.length)] },
    verb() { return verbs[Math.floor(Math.random() * verbs.length)] }
}

function complexQuote() {

    let text = "";
    let sentences = (Math.floor(Math.random() * maxSentences + 1));
    for (let i = 0; i < sentences; i++) {
        // Format: "Conjunction -> Noun -> Verb -> Noun"
        let randomConjunction = rndm.conjunction();
        let rndmPunctuation = punctuation[Math.floor(Math.random() * punctuation.length)];

        let upperConjunction = randomConjunction.charAt(0).toUpperCase() + randomConjunction.slice(1);
        // ensures there isnt a space at the start of the quote, otherwise adds spaces
        if (i == 0) {
            text += `${upperConjunction} ${rndm.noun()} ${rndm.verb()} ${rndm.noun() + rndmPunctuation}`;
        }
        else {
            text += `  ${upperConjunction} ${rndm.noun()} ${rndm.verb()} ${rndm.noun() + rndmPunctuation}`;
        }
    }
    lengthIndicator.innerText = `Quote Sentences: ${sentences}`;
    quoteText.innerText = text;
}



function simpleQuote() {
    let text = "";
    let quoteLength = (Math.floor(Math.random() * maxWords + 1));
    for (let i = 0; i < quoteLength; i++) {
        // ensures there isnt a space at the start of the quote, otherwise adds spaces
        if (i == 0) {
            text += rndm.random();
        }
        else {
            text += ` ${rndm.random()}`;
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
