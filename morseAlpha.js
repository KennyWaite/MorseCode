export const alphabetToMorse = {
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

    "": " ",
    " ": "/",
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

const reveresedTranslate = (object) => {
    return Object.entries(object).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});
};

export const morseToAlphabet = reveresedTranslate(alphabetToMorse);
