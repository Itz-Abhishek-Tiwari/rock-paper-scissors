function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
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
  return prompt("Enter your choice", "").toLowerCase();
}

let computerSelection = getComputerChoice();
console.log(computerSelection);
let playerSelection = userChoice();

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    alert(`You and Bot choice are same so it's a tie ${computerSelection}`);
  }

  // Player wining case
  else if (playerSelection === "rock" || computerSelection === "scissors") {
    alert(`You Win! ${playerSelection} beats ${computerSelection} `);
  } else if (playerSelection === "paper" || computerSelection === "rock") {
    alert(`You Win! ${playerSelection} beats ${computerSelection} `);
  } else if (playerSelection === "scissors" || computerSelection === "paper") {
    alert(`You Win! ${playerSelection} beats ${computerSelection} `);
  }

  // Player losing case
}

playRound(computerSelection, playerSelection);
