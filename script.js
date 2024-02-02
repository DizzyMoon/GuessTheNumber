"use scrict"

window.addEventListener("DOMContentLoaded", start);

let highestPossibleNumber = 100;
let lowestPossibleNumber = 0;


function start() {
    console.log("Javascript is running");
}


function readyButton() {
    const readyButton = document.querySelector("#ready-button");
    readyButton.classList.add("hide");
    guessNumber();
}

function guessNumber() {

    const guessContainer = document.querySelector("#guess-container");
    var guessWrapper = document.createElement('div');
    guessWrapper.classList.add("guess-wrapper");
    guessContainer.appendChild(guessWrapper);

    var newGuess = document.createElement('p');


    var guessedNumber = Math.floor((highestPossibleNumber + lowestPossibleNumber) / 2);

    newGuess.textContent = `My guess is ${guessedNumber}`

    guessWrapper.appendChild(newGuess);

    var tooHighButton = document.createElement('button');
    tooHighButton.textContent = "Too High";
    tooHighButton.classList.add("button");

    var tooLowButton = document.createElement('button');
    tooLowButton.textContent = "Too Low";
    tooLowButton.classList.add("button");

    var correctButton = document.createElement('button');
    correctButton.textContent = "Correct";
    correctButton.classList.add("button");


    guessWrapper.appendChild(tooHighButton);
    guessWrapper.appendChild(tooLowButton);
    guessWrapper.appendChild(correctButton);

    console.log(highestPossibleNumber)
    console.log(lowestPossibleNumber)


    tooHighButton.addEventListener('click', function () {
        tooHigh(guessedNumber);
    });
    tooLowButton.addEventListener('click', function () {
        tooLow(guessedNumber);
    })
    correctButton.addEventListener('click', function() {
        correct()
    })
}

function tooHigh(guessedNumber){
    highestPossibleNumber = guessedNumber;
    guessNumber();
}

function tooLow(guessedNumber) {
    lowestPossibleNumber = guessedNumber;
    guessNumber();
}

function correct() {
    const gameOver = document.querySelector("#game-over");
    const guessContainer = document.querySelector("#guess-container");
    
    guessContainer.classList.add("hide")

    gameOver.classList.remove("hide");
}

function refresh() {
    location.reload(true);
}