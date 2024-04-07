function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  let computerSelection;
  for (let i = 0; i <= choice.length; i++) {
    if (i === randomChoice) {
      return (computerSelection = choice[i]);
    }
  }
  return computerSelection;
}
function userChoice() {
  return prompt(
    `Enter Your choice b/w "rock", "paper", "scissors`,
    ""
  ).toLowerCase();
}

let computerSelection = getComputerChoice();
console.log(computerSelection);
let playerSelection = userChoice();
let result;

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    return (result = `You and Bot choice are same so it's a tie ${computerSelection}, ${playerSelection}`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return (result = `You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    return (result = `You lose! ${computerSelection} beats ${playerSelection}`);
  }
}

console.log(playRound(computerSelection, playerSelection));
