function getComputerChoice(range = 3) {
  let choice = Math.ceil(Math.random() * range);
  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      return "RocK";
  }
}

function gameResultString(winner = 2, player1Choice, player2Choice) {
    switch (winner) {
        case -1:
            return {result:-1, message:`You Tied! ${player1Choice} is ${player2Choice}!`}
        case 0:
            return {result:0, message:`You Win! ${player1Choice} beats ${player2Choice}!`}
        case 1:
            return {result:1, message:`You Lose! ${player2Choice} beats ${player1Choice}!`}
        default:
            return {result:-1, message:`You Broke Something! I don't know how ${player1Choice} interacts with ${player2Choice}!`}
    }
}

function playRound(player1Choice, player2Choice) {
  // Fix case
  let opps = [player1Choice.toLowerCase(), player2Choice.toLowerCase()];

    // Take care of Ties early
    if(opps[0] == opps[1]) {
        return gameResultString(-1, player1Choice, player2Choice)
    }

    // Game logic
    switch (opps[0]) {
        case "rock":
            if(opps[1] == "paper") {
                return gameResultString(1, player1Choice, player2Choice)
            }
            else if(opps[1] == "scissors") {
                return gameResultString(0, player1Choice, player2Choice)
            }
        case "paper":
            if(opps[1] == "scissors") {
                return gameResultString(1, player1Choice, player2Choice)
            }
            else if(opps[1] == "rock") {
                return gameResultString(0, player1Choice, player2Choice)
            }
        case "scissors":
            if(opps[1] == "rock") {
                return gameResultString(1, player1Choice, player2Choice)
            }
            else if(opps[1] == "paper") {
                return gameResultString(0, player1Choice, player2Choice)
            }
        default:
            return gameResultString(player1Choice, player2Choice)
    }
}

function playGame(goal = 3) {
  // stats
  let player1Wins = 0;
  let player2Wins = 0;

  // while loop until someone wins
  while (player1Wins < goal && player2Wins < goal) {
    let player1Choice = prompt("Rock, Paper, or Scissors?");
    let player2Choice = getComputerChoice();
    let result = playRound(player1Choice, player2Choice);
    console.log(result);

    // I know this is clunky, but I fully intend to fix this when I know beter
    if (result.at(4) == "W") {
      player1Wins++;
    } else if (result.at(4) == "L") {
      player2Wins++;
    }
  }
  if (player1Wins > player2Wins) {
    console.log("You win!");
  } else {
    console.log("They win!");
  }
  console.log(`${player1Wins} to ${player2Wins}`);
}

const gameOutPut = document.querySelector('#gameOutPut')
function writeGameOut(gameInfo) {
    let output = document.createElement('p')
    output.textContent = gameInfo.message
    if (gameInfo.result == 0) {
        output.classList.add('win')
    }
    else if (gameInfo.result == 1) {
        output.classList.add('lose')
    }
    return output
}

const playerChoices = document.querySelectorAll('button')
playerChoices.forEach(button => {
    button.addEventListener('click', () => {
        let gameInfo = playRound(button.id, 'Rock')
        let gamePackage = writeGameOut(gameInfo)
        gameOutPut.appendChild(gamePackage)
    })
})