let count = 0;
let roundPlayed = 0;

// Get Computer Choice
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

// Check Computer Choice and Player Choice
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    count++;
  } else {
    if (count <= 0) {
      count;
    } else {
      count--;
    }
  }

  roundPlayed++;
  if (roundPlayed >= 5) {
    if (count >= 3) {
      document.querySelector(".result").textContent = ` You Win`;
    } else {
      document.querySelector(".result").textContent = ` You Loss`;
    }

    finalCount();
  }
}

// Choice Rock
document.querySelector(".rockBtn").addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound(computerSelection, "rock");
});

// Choice Paper
document.querySelector(".paperBtn").addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound(computerSelection, "paper");
});

// Choice Scissors
document.querySelector(".scissorsBtn").addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound(computerSelection, "scissors");
});

// Play Game Five Time
/*
function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    let playerSelection = prompt("enter chpice");
    playRound(computerSelection, playerSelection);
  }
}
playGame();
*/

// Check If you have  more or equal to 3 count so it can delater you win or lose.
function finalCount() {
  //   if (count >= 3) {
  //     console.log(`Your Final count is: ${count} You Won!`);
  //   } else if (count <= 2) {
  //     console.log(`Your Final count is: ${count} You Lose!`);
  //   }

  switch (count) {
    case 0:
    case 1:
    case 2: {
      document.querySelector(".currentPoint").textContent = ` ${count} `;
      break;
    }

    case 3:
    case 4:
    case 5: {
      document.querySelector(".currentPoint").textContent = ` ${count} `;
      break;
    }
  }

  count = 0;
  roundPlayed = 0;
}
