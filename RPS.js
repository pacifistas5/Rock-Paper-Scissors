
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose, Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose, Scissors beats Paper";
    }
}

function game () {

}

const playerSelection = "rock";
console.log (playerSelection);
const computerSelection = getComputerChoice();
console.log (computerSelection);
console.log(playRound(playerSelection, computerSelection));