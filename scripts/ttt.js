const PLAYER_SYMBOL = "X"
const COMPUTER_SYMBOL = "O"

function updateBoard(symbol, location) {
  const cell = document.querySelector(`#cell-${location}`);
  cell.innerHTML = symbol;
}

function handleClickCell(location) {
    const cell = document.querySelector(`#${location}`)
    if (cell.innerHTML == "") {
        cell.innerHTML = PLAYER_SYMBOL
    }
}

function setupGame() {
  const cells = document.querySelectorAll(".square");
  cells.forEach((div) =>
    div.addEventListener("click", () => handleClickCell(div.id))
  );
}

document.addEventListener("DOMContentLoaded", setupGame);

//

/* playerChoices.forEach((button) =>
  button.addEventListener("click", () =>
    logResultsToDOM(playRound(button.id, getComputerChoice()))
  )
);

square.addEventListener("mouseover", () => handleHoverSquare(square));*/
