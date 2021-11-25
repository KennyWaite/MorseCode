//Accessing the DOM and setting values
const toEnglish = document.getElementById("toEnglish");
const toMorse = document.getElementById("toMorse");
const clear = document.getElementById("clear");
const englishText = document.getElementById("englishText");
const morseText = document.getElementById("morseText");

// accessing text inside inputs
let words1 = morseText.innerText;
let words2 = englishText.innerText;

//Adding event for when English to Morsecode button is clicked
toMorse.addEventListener("click", (event) => {
    console.log("1", words1);
    console.log("2", words2);
    englishText.innerText = event.target;
    result = words1toMorseFunct(words2);

    return result;
});

//Adding event for when Morsecode to English button is clicked
toEnglish.addEventListener("click", (event) => {
    // array = [];
    // words += event.target;
    // array.push(toMorseFunct(englishText.innerText));
    return toEngFunct();
});

//Adding clear all text inputs when clear button is clicked
clear.addEventListener("click", (event) => {
    toClear();
    return;
});

//Function to translate Morsecode input into English
// >>>check if things are string/object/array and edit this
// something

const toEngFunct = (text) => {
    return text
        .toLowerCase()
        .split("")
        .map((letter) => {
            if (alphabet[letter]) return letter;
        })
        .join("");
};

//Function to clear text inputs
const toClear = () => {
    words1 = "";
    words2 = "";
};

//Function to translate Morsecode input into English
const toMorseFunct = (textStr) => {
    words2;
    alphabet;
    return;
};

//Object of alphabet to check inputs against
const alphabet = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",

    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};
