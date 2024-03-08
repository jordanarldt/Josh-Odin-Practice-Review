// Get DOM elements
const submitNumberRounds = document.querySelector("#submitNumberRounds");
const submitUnlimitedRounds = document.querySelector("#submitUnlimitedRounds");
const pageButtons = document.querySelectorAll("button");
const playerChoices = document.querySelectorAll("#gamePieces button");
const gameOutPut = document.querySelector("#gameOutPut");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const goalScore = document.querySelector("#goalScore");

// Game mechanics
function getComputerChoice(range = 3) {
  let choice = Math.floor(Math.random() * range);
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return "RocK";
  }
}

function gameResultString(winner = 2, player1Choice, player2Choice) {
  switch (winner) {
    case -1:
      return {
        result: -1,
        message: `You Tied! ${player1Choice} is ${player2Choice}!`,
      };
    case 0:
      return {
        result: 0,
        message: `You Win! ${player1Choice} beats ${player2Choice}!`,
      };
    case 1:
      return {
        result: 1,
        message: `You Lose! ${player2Choice} beats ${player1Choice}!`,
      };
    default:
      return {
        result: -1,
        message: `You Broke Something! I don't know how ${player1Choice} interacts with ${player2Choice}!`,
      };
  }
}

function playRound(player1Choice, player2Choice) {
  // Fix case
  let opps = [player1Choice.toLowerCase(), player2Choice.toLowerCase()];

  // Take care of Ties early
  if (opps[0] == opps[1]) {
    return gameResultString(-1, player1Choice, player2Choice);
  }

  // Game logic
  switch (opps[0]) {
    case "rock":
      if (opps[1] == "paper") {
        return gameResultString(1, player1Choice, player2Choice);
      } else if (opps[1] == "scissors") {
        return gameResultString(0, player1Choice, player2Choice);
      }
    case "paper":
      if (opps[1] == "scissors") {
        return gameResultString(1, player1Choice, player2Choice);
      } else if (opps[1] == "rock") {
        return gameResultString(0, player1Choice, player2Choice);
      }
    case "scissors":
      if (opps[1] == "rock") {
        return gameResultString(1, player1Choice, player2Choice);
      } else if (opps[1] == "paper") {
        return gameResultString(0, player1Choice, player2Choice);
      }
    default:
      return gameResultString(player1Choice, player2Choice);
  }
}

// DOM Manipulation

function endGame() {
  playerScore.innerHTML = 0
  computerScore.innerHTML = 0
  goalScore.innerHTML = 0
  while(gameOutPut.firstChild) {
    gameOutPut.removeChild(gameOutPut.firstChild)
  }
  //const pageButtons = document.querySelectorAll("button");
  pageButtons.forEach((button) => {
    button.disabled = false;
  });
  //const playerChoices = document.querySelectorAll("#gamePieces button");
  playerChoices.forEach((button) => {
    button.disabled = true;
  });
}

function startGame(numberRounds) {
  endGame()
  //let goalScore = document.querySelector("#goalScore");
  if (numberRounds != undefined) {
    goalScore.innerHTML = numberRounds;
  } else {
    goalScore.innerHTML = document.querySelector("#userInput").value;
  }
  //const pageButtons = document.querySelectorAll("button");
  pageButtons.forEach((button) => {
    button.disabled = true;
  });
  //const playerChoices = document.querySelectorAll("#gamePieces button");
  playerChoices.forEach((button) => {
    button.disabled = false;
  });
}

function writeGameOut(gameInfo) {
  let output = document.createElement("p");
  output.textContent = gameInfo.message;
  if (gameInfo.result == 0) {
    output.classList.add("win");
  } else if (gameInfo.result == 1) {
    output.classList.add("lose");
  }
  gameOutPut.insertBefore(output, gameOutPut.firstChild);
}

function logResultsToDOM(resultArray) {
  if (resultArray.result == 1) {
    computerScore.innerHTML = Number(computerScore.innerHTML) + 1
  } else if (resultArray.result == 0){
    playerScore.innerHTML = Number(playerScore.innerHTML) + 1
  }
  writeGameOut(resultArray)
  if((Number(computerScore.innerHTML) == Number(goalScore.innerHTML)) || (Number(playerScore.innerHTML) == Number(goalScore.innerHTML))) {
    endGame()
    writeGameOut(
      {result: resultArray.result,
      message: (resultArray.result ? "Computer Wins!" : "Player Wins!")}
    )
  }
}

// Event Listeners

submitNumberRounds.addEventListener("click", () => startGame());
submitUnlimitedRounds.addEventListener("click", () => startGame(Infinity));
playerChoices.forEach(button => button.addEventListener("click", () => logResultsToDOM(playRound(button.id, "Rock"))));
