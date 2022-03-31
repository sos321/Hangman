const words = [
    "mine",
    "raw",
    "stumble",
    "railroad",
    "dealer",
    "space",
    "magnetic",
    "fluctuation",
    "arrest",
    "behavior",
    "funeral",
    "tape",
    "dry",
    "invasion",
    "landscape",
    "seller",
    "bride",
    "common",
    "iron",
    "end",
    "community",
    "depression",
    "gregarious",
    "composer",
    "quit",
    "environmental",
    "chalk",
    "responsible",
    "family",
    "craft",
    "hilarious",
    "motif",
    "fisherman",
    "hurl",
    "commitment",
    "continental",
    "presidency",
    "object",
    "ask",
    "mourning",
    "fear",
    "brand",
    "displace",
    "revolutionary",
    "appoint",
    "blame",
    "representative",
    "directory",
    "nonremittal",
    "self",
];

getRandomWord();
let lastWord;

function getRandomWord() {
    const secretWord = words[Math.trunc(Math.random() * words.length)];

    for (letter in secretWord) {
        const SpanEl = document.createElement("span");
        SpanEl.textContent = "_";

        document.querySelector(".secret-word-holder").appendChild(SpanEl);
    }

    lastWord = secretWord;
}

const newWordBtn = document.querySelector(".btn-new");
newWordBtn.addEventListener("click", () => {
    getRandomWord();
});
