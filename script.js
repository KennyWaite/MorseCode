import { alphabetToMorse, morseToAlphabet } from "./morseAlpha.js";

//Accessing the DOM and setting values
const toEnglishBtn = document.getElementById("toEnglish");
const toMorseBtn = document.getElementById("toMorse");
const clear = document.getElementById("clear");
const englishText = document.getElementById("englishText");
const morseText = document.getElementById("morseText");

// Function to turn Morse to English
const toEngFunc = (code, object) => {
    if (code === "") {
        alert("Please input for decoding");
        return;
    }

    return code
        .toLowerCase()
        .split(" ")
        .map((charCode) => {
            if (object.hasOwnProperty(charCode)) {
                return object[charCode];
            } else {
                return charCode;
            }
        })
        .join("");
};

console.log(toEngFunc("...", morseToAlphabet));

//Function to clear text inputs
const toClear = () => {
    morseText.value = "";
    englishText.value = "";
};

//Function to translate Morsecode input into English
const toMorseFunct = (text, object) => {
    return text
        .toLowerCase()
        .split("")
        .map((char) => {
            if (object.hasOwnProperty(char)) {
                return object[char]; // if char = a > object[a] = .-
            } else {
                return char;
            }
        })
        .join(" ");
};

//Adding event for when English to Morsecode button is clicked
toEnglishBtn.addEventListener("click", (event) => {
    englishText.value = toEngFunc(morseText.value, morseToAlphabet);
});

//Adding clear all text inputs when clear button is clicked
clear.addEventListener("click", (event) => {
    return toClear();
});

//Adding event for when English to Morsecode button is clicked
toMorseBtn.addEventListener("click", (event) => {
    morseText.value = toMorseFunct(englishText.value, alphabetToMorse);
});
