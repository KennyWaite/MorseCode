//Accessing the DOM and setting values
const toEnglishBtn = document.getElementById("toEnglish");
const toMorseBtn = document.getElementById("toMorse");
const clear = document.getElementById("clear");
const englishText = document.getElementById("englishText");
const morseText = document.getElementById("morseText");

// accessing text inside inputs
let mVal = morseText.value;
let eVal = englishText.value;

//Object of alphabet to check inputs against
const alphabet1 = {
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

    " ": " ",

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

const alphabet2 = {
    a: ".-",
    c: "-.-.",
    b: "-...",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    j: ".---",
    i: "..",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",

    " ": " ",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    10: "-----",
};

//Function to translate Morsecode input into English
// >>>check if things are string/object/array and edit this
// something
const toEngFunct = (text) => {
    if (mVal && eVal === "") {
        alert("Please input for decoding");

        if (eVal === "string") {
            alert("English Text Side needs to be clear for decoding");
        }

        return text
            .toLowerCase()
            .split("")
            .map((letter) => {
                if (alphabet1[letter]) return letter;
            })
            .join("");
    }

    //Function to clear text inputs
    const toClear = () => {
        mVal = "";
        eVal = "";
    };

    //Function to translate Morsecode input into English
    const toMorseFunct = (text) => {
        if (mVal && eVal === "") {
            alert("Please input for decoding");
        }
    };
    if (mVal === "string") {
        alert("Morse Code side needs to be clear for encoding");
    }
    return text
        .split("")
        .map((code) => {
            if (alphabet2[code]) return code;
        })
        .join("");
};

//Adding event for when Morsecode to English button is clicked
toEnglishBtn.addEventListener("click", (event) => {
    mVal += event.target;
    let result = toEngFunct(mVal);
    return (eVal += result);
});

//Adding event for when English to Morsecode button is clicked
toEnglishBtn.addEventListener("click", (event) => {
    eVal += event.target;
    let result = toMorseFunct(eVal);
    return (mVal += result);
});

//Adding clear all text inputs when clear button is clicked
clear.addEventListener("click", (event) => {
    return toClear();
});
