// This seems like an easier way to keep track of what wins and what doesn't
const choices = {
  rock: {
    beats: "scissors",
  },
  paper: {
    beats: "rock",
  },
  scissors: {
    beats: "paper",
  },
};

// Returns an array of the keys of the object [rock, paper, scissors]
const choiceCount = Object.keys(choices).length;

function playRound(playerInput) {
  const playerChoice = playerInput.toLowerCase();

  if (!choices[playerChoice]) {
    addGameLog(`What is ${playerInput}? You can't do that! That's cheating!`);
    return;
  }

  // Use Math.floor to round down to the nearest whole number.
  // If we use Math.ceil, the array index could possibly be 3, which is out of bounds.
  const computerChoice =
    Object.keys(choices)[Math.floor(Math.random() * choiceCount)];

  if (playerChoice === computerChoice) {
    addGameLog(`You Tied! ${playerChoice} is ${computerChoice}!`);
    return;
  }

  const isPlayerWinner = choices[playerChoice].beats === computerChoice;
  const resultPhrase = isPlayerWinner ? "You Win!" : "You Lose!";
  const resultReason = isPlayerWinner ? "beats" : "loses to";
  const resultString = `${resultPhrase} ${playerChoice} ${resultReason} ${computerChoice}!`;

  updateScores(isPlayerWinner);
  addGameLog(resultString);
}

function updateScores(isPlayerWinner) {
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");

  // Convert the innerHTML to a number so that we can perform math ops on it
  const playerScore = Number(playerScoreElement.innerHTML);
  const computerScore = Number(computerScoreElement.innerHTML);

  if (isPlayerWinner) {
    playerScoreElement.innerHTML = playerScore + 1;
    return;
  }

  computerScoreElement.innerHTML = computerScore + 1;
}

function addGameLog(resultString) {
  const logsContainer = document.getElementById("game-logs");
  const element = document.createElement("span");
  element.style = "display: block;"; // make sure each log has its own line
  element.innerText = resultString;

  logsContainer.appendChild(element);
}

function handleSubmitMove() {
  const playerChoice = document.getElementById("user-input").value;
  playRound(playerChoice);
}

function gameSetup() {
  // Find the submit button by ID
  const submitButton = document.getElementById("submit-move-btn");

  // Create a click event listener for the button
  submitButton.addEventListener("click", handleSubmitMove);
}

// Add event listener to call gameSetup when the DOM is loaded
document.addEventListener("DOMContentLoaded", gameSetup);
