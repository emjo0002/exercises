/* 

Hvis spiller1 vinder har sten og spiller 2 har sten, så er det uafgjort
Hvis spiller1 vinder har sten og spiller 2 har papir, så vinder spiller 2
Hvis spiller1 vinder har sten og spiller 2 har saks, så vinder spiller 1

Hvis spiller1 vinder har papir og spiller 2 har sten så vinder spiller 1
Hvis spiller1 vinder har papir og spiller 2 har papir så er det uafgjort
Hvis spiller1 vinder har papir og spiller 2 har saks så vinder spiller 2

Hvis spiller1 vinder har saks og spiller 2 har sten så vinder spiller 2
Hvis spiller1 vinder har saks og spiller 2 har papir så er det spiller 1 
Hvis spiller1 vinder har saks og spiller 2 har saks så er det uafgjort

*/

"use strict";

let userGuess;
let computerGuess;
let result;

const rock = document.querySelector(".rock");
const papir = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("mousedown", rockSelected);
papir.addEventListener("mousedown", papirSelected);
scissors.addEventListener("mousedown", scissorsSelected);

function rockSelected() {
    //console.log("jeg har klikket på sten");
    userGuess = "rock";
    computerGuesses();
}

function papirSelected() {
    //console.log("jeg har klikket på papir");
    userGuess = "paper";
    computerGuesses();
}

function scissorsSelected() {
    //console.log("jeg har klikket på saks");
    userGuess = "scissors";
    computerGuesses();
}

function computerGuesses() {
    const choices = ["rock", "paper", "scissors"];
    computerGuess = choices[Math.floor(Math.random() * choices.length)];
    detErMinWinner();
}

function detErMinWinner() {
    if (userGuess === computerGuess) {
        result = "draw";
    } else if (
        (userGuess === "rock" && computerGuess === "scissors") ||
        (userGuess === "paper" && computerGuess === "rock") ||
        (userGuess === "scissors" && computerGuess === "paper")
    ) {
        result = "win";
    } else {
        result = "lose";
    }

    console.log("result", result);
}
