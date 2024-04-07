function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  let ComputerChoice;
  for (let i = 0; i <= choice.length; i++) {
    if (i == randomChoice) {
      return (ComputerChoice = choice[i]);
    }
  }
}
console.log(getComputerChoice());
console.log(" ");
