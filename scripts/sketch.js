function handleHoverSquare(element, color = "darkgreen") {
    element.style.backgroundColor = color
}

function handleSubmitBoardSize() {
    const size = parseInt(document.querySelector("#userInput").value)
    const board = document.querySelector(".board")
    while(board.firstChild){
        board.removeChild(board.firstChild)
    }
    size > 100 ? drawGrid(100, 100) : drawGrid(size, size)
}

function drawGrid(x, y) {
    const board = document.querySelector(".board")
    for(let i = 0; i < y; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
        row.id = "row-" + i
        console.log(row.id)
        for(let j = 0; j < x; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            square.id = "square-" + j + "-" + i
            square.addEventListener("mouseover", () => handleHoverSquare(square))
            console.log(square.id)
            row.appendChild(square)
        }
        board.appendChild(row)
    }
}

document.addEventListener("DOMContentLoaded", drawGrid(16,16));

const submitBoardSize = document.querySelector("#submitBoardSize")
submitBoardSize.addEventListener("click", () => handleSubmitBoardSize())