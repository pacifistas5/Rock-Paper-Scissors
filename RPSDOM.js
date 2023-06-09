let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const resultDiv = document.getElementById('result');
  const playerScoreSpan = document.getElementById('playerScore');
  const computerScoreSpan = document.getElementById('computerScore');
  const resetButton = document.getElementById('reset');

  if (playerSelection === computerSelection) {
    resultDiv.textContent = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  playerScoreSpan.textContent = `Player score: ${playerScore}`;
  computerScoreSpan.textContent = `Computer score: ${computerScore}`;

  const finalScoreDiv = document.getElementById('finalScore');
    if (playerScore === 5) {
      finalScoreDiv.textContent = 'Player wins the Game!' 
    } else if (computerScore === 5) {
      finalScoreDiv.textContent = 'Computer wins the Game!'
    }

    if (playerScore === 5 || computerScore === 5) {
      buttons.forEach(button => {
        button.disabled = true;
      });
      resetButton.disabled = false;
    }
}
 
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
  playerScore = 0;
  computerScore = 0;
  buttons.forEach(button => {
    button.disabled = false;
  });
  resetButton.disabled = true;
  document.getElementById('result').textContent = '';
  document.getElementById('playerScore').textContent = 'Player: 0';
  document.getElementById('computerScore').textContent = 'Computer: 0';
});

