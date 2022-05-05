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

let lettersEl = document.querySelectorAll(".guess-letters span");

// Give the letters Event listeners
lettersEl.forEach((letter, i) => {
    letter.addEventListener("click", function () {
        // TODO Evaluate guess
        // evalGuess(i);

        this.classList.add("used");
    });
});

let secretWord = "";
let state = 0;
let correctGuesses = 0;

printRandomWord();

// Print the secret word
function printRandomWord() {
    // Get the random word
    secretWord = words[Math.trunc(Math.random() * words.length)];

    // Clean the DOM node
    document.querySelector(".secret-word").innerHTML = "";

    // Print the word
    for (letter in secretWord) {
        const SpanEl = document.createElement("span");
        SpanEl.textContent = "_";

        document.querySelector(".secret-word").appendChild(SpanEl);
    }
}

function evalGuess(letter) {
    for (letter in secretWord) {
        // Check if the guess is the letter
        if (guess === secretWord[letter]) {
            // Reveal the letter
            document.querySelectorAll(".secret-word span")[letter].textContent =
                guess;

            // Increase the number of correct guesses
            correctGuesses++;
            // Add the letter to the list of guessed letters
            lettersGuessed.push(guess);
        }
    }

    // TODO Add a check for the word guessed
}

// TODO Mask the hangman image
// TODO Udpate the mask whenever state changes
