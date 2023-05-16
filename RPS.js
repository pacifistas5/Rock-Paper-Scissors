function getComputerChoice () {
  let computerChoice = Math.floor (Math.random() * 3);
      if (computerChoice === 0) {
          return "rock";
      } else if (computerChoice === 1) {
          return "paper";
      } else {
          return "scissors";
      }
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection === computerSelection) {
      return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
      return "You lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return "You lose! Scissors beats Paper";
  }
}

function game () {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 1; i <= 5; i++) {
      let playerSelection = prompt("What do you want?");
      let computerSelection = getComputerChoice();

      console.log (playerSelection);
      console.log (computerSelection);

      let result = playRound (playerSelection,computerSelection);

      if (result === "You win! Rock beats scissors") {
          playerScore++;
      } else if (result === "You win! Scissors beats Paper") {
          playerScore++;
      } else if (result === "You win! Paper beats Rock") {
          playerScore++;
      } else if (result === "You lose! Paper beats Rock") {
          computerScore++;
      } else if (result === "You lose! Rock beats Scissors") {
          computerScore++;
      } else if (result === "You lose! Scissors beats Paper") {
          computerScore++;
      }

      console.log (result);
  }

  console.log ("Player's final score is " + playerScore + " while Computer's final score is " + computerScore)

  if (playerScore > computerScore) {
      console.log ("Player wins the Game!");
  } else if (playerScore < computerScore) {
      console.log ("Computer wins the Game!");
  } else  {
      console.log ("The Game is tie!");
  }
}   

game ()