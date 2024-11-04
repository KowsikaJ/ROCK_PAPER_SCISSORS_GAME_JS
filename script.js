const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function playGame() {
  let playgame = await askQuestion("Shall we play rock, paper, or scissors? (yes/no): ");
  playgame = playgame.toLowerCase() === "yes";

  while (playgame) {
    const playerchoice = await askQuestion("Please choose rock, paper, or scissors: ");
    const player = playerchoice.trim().toLowerCase();

    if (player === "rock" || player === "scissors" || player === "paper") {
      const arr = ["rock", "paper", "scissors"];
      const computer = arr[Math.floor(Math.random() * 3)];

      const res = player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `Player: ${player}\nComputer: ${computer}\nComputer Wins`
        : player === "paper" && computer === "scissors"
        ? `Player: ${player}\nComputer: ${computer}\nComputer Wins`
        : player === "scissors" && computer === "rock"
        ? `Player: ${player}\nComputer: ${computer}\nComputer Wins`
        : `Player: ${player}\nComputer: ${computer}\nPlayer Wins`;

      console.log(res);

      const playAgain = await askQuestion("Play again? (yes/no): ");
      playgame = playAgain.toLowerCase() === "yes";
      if (!playgame) console.log("Ok, thank you for playing!");
    } else {
      console.log("You didn't enter rock, paper, or scissors.");
    }
  }
  rl.close();
}

playGame();
