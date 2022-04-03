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

const newWordBtn = document.querySelector(".btn-new");
const guessBtn = document.querySelector(".btn-guess");
const numOfTriesEl = document.querySelector(".score-value");
const recordEl = document.querySelector(".record-value");

let score = 0;
let record = 0;

let secretWord;
let correctGuesses = 0;
let lettersGuessed = [];

let gameOver = false;

printRandomWord();

// Initialize the guessed letters with none
const noneTxt = document.createElement("span");
noneTxt.textContent = "None";
document.querySelector(".guessed-letters").appendChild(noneTxt);

newWordBtn.addEventListener("click", () => {
    document.querySelector(".guessed-letters").innerHTML = "";
    const noneTxt = document.createElement("span");
    noneTxt.textContent = "None";
    document.querySelector(".guessed-letters").appendChild(noneTxt);

    printRandomWord();
});
guessBtn.addEventListener("click", () => {
    if (!gameOver) {
        evalGuess();
    }
});

function printRandomWord() {
    // Clear values
    endGame();

    // Get a random word
    secretWord = words[Math.trunc(Math.random() * words.length)];

    // Clean the DOM node
    document.querySelector(".secret-word").innerHTML = "";

    // Print the word
    for (letter in secretWord) {
        const SpanEl = document.createElement("span");
        SpanEl.textContent = "_";

        document.querySelector(".secret-word").appendChild(SpanEl);
    }

    // Enable the game
    gameOver = false;
}

function evalGuess() {
    // Get the guess value from the input field and clear it
    const guess = document.querySelector(".input-char").value;
    document.querySelector(".input-char").value = "";

    // Check if the guess is a letter
    if (!isLetter(guess)) {
        alert("Please enter a letter");
        document.querySelector(".input-char").value = "";

        return;
    }

    // Check if the letter was already guessed
    if (lettersGuessed.includes(guess)) {
        alert("You already guessed this letter");
        document.querySelector(".input-char").value = "";

        return;
    }

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
        } else {
            if (!secretWord.includes(guess)) {
                if (!lettersGuessed.includes(guess)) {
                    // Clear the 'None' text if it's the first letter
                    if (lettersGuessed.length - correctGuesses === 0) {
                        document.querySelector(".guessed-letters").innerHTML =
                            "";
                    }
                    // Add the letter to the already guessed letters
                    const triesEl = document.createElement("span");
                    triesEl.textContent = guess;
                    document
                        .querySelector(".guessed-letters")
                        .appendChild(triesEl);

                    lettersGuessed.push(guess);

                    // Update the score
                    score++;
                    numOfTriesEl.textContent = score;
                }
            }
        }
    }

    // Check if the word is guessed
    if (correctGuesses === secretWord.length) {
        // Disable the score
        gameOver = true;
        // Update the record
        record = record > score || record === 0 ? score : record;
        recordEl.textContent = record;

        // Clear the values
        endGame();
    }
}

// Checks if the input is a letter
function isLetter(char) {
    // Is it a string
    if (typeof char !== "string") return false;

    // Can it be converted to lowercase and uppercase
    return char.toLowerCase() !== char.toUpperCase();
}

// Ends the game and clears all values
function endGame() {
    numOfTriesEl.textContent = "0";
    document.querySelector(".input-char").value = "";
    score = 0;
    correctGuesses = 0;
    lettersGuessed = [];
}
