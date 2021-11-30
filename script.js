import { alphabetToMorse, morseToAlphabet } from "./morseAlpha.js";

//Accessing the DOM and setting values
const toEnglishBtn = document.getElementById("toEnglish");
const toMorseBtn = document.getElementById("toMorse");
const clear = document.getElementById("clear");
const englishText = document.getElementById("englishText");
const morseText = document.getElementById("morseText");

// accessing text inside inputs
// let morseCode = morseText.value;
// console.log(mVal);
// let engText = englishText.value;

//Object of alphabet to check inputs against

//Function to translate Morsecode input into English
// >>>check if things are string/object/array and edit this
// something

const toEngFunc = (code, object) => {
    if (code === "") {
        alert("Please input for decoding");
        return;
    }

    // if (eVal === "string") {
    //     alert("English Text Side needs to be clear for decoding");
    // }

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
const toMorseFunct = (text) => {
    if (mVal && eVal === "") {
        alert("Please input for decoding");
    }
    if (mVal === "string") {
        alert("Morse Code side needs to be clear for encoding");
    }
    return text
        .split("")
        .map((code) => {
            if (morseToAlphabet[code]) return code;
        })
        .join("");
};

//Adding event for when Morsecode to English button is clicked
toEnglishBtn.addEventListener("click", () => {
    // mVal += event.target;
    let result = toEngFunc(morseText.value, morseToAlphabet);
    return (englishText.value += result);
});

//Adding event for when English to Morsecode button is clicked
toEnglishBtn.addEventListener("click", (event) => {
    englishText.value = toEngFunc(morseText.value, morseToAlphabet);
});

//Adding clear all text inputs when clear button is clicked
clear.addEventListener("click", (event) => {
    return toClear();
});
