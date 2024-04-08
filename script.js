function getComputerChoice() {
  let randomChoice = parseInt(Math.random() * 3);
  let choice = ["rock", "paper", "scissors"];
  let computerSelection;
  for (let i = 0; i < choice.length; i++) {
    if (randomChoice === i) {
      computerSelection = choice[i];
    }
  }
  return computerSelection;
}

let result;
let count = 0;
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    result;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    count++;
    result;
  } else {
    if (count <= 0) {
      count;
    } else {
      count--;
    }
    result;
  }
  return result;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    let playerSelection = prompt("enter chpice");
    let playerData = playRound(computerSelection, playerSelection);
  }
}

playGame();
function finalCount() {
  if (count >= 3) {
    alert(`Your Final count is: ${count} You Won!`);
  } else {
    alert(`Your Final count is: ${count} You Lose!`);
  }
}
finalCount();
