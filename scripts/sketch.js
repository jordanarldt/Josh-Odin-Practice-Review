let randomColors = false

function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function handleHoverSquare(element, color = "darkgreen") {
    if(randomColors) {
        element.style.backgroundColor = generateRandomColor()
    } else {
        element.style.backgroundColor = color
    }

}

function handleSubmitBoardSize(bdColor="darkgreen", bgColor="forestgreen") {
    const size = parseInt(document.querySelector("#userInput").value)
    const board = document.querySelector(".board")
    while(board.firstChild){
        board.removeChild(board.firstChild)
    }
    if (isNaN(size) || size <= 0) {
        drawGrid(16, 16, bdColor, bgColor)
    } else if (size > 100) {
        drawGrid(100, 100, bdColor, bgColor)
    } else {
        drawGrid(size, size, bdColor, bgColor)
    }
}

function drawGrid(x, y, bdColor="darkgreen", bgColor="forestgreen") {
    const board = document.querySelector(".board")
    for(let i = 0; i < y; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
        row.id = "row-" + i
        console.log(row.id)
        for(let j = 0; j < x; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            square.style.borderColor = bdColor
            square.style.backgroundColor = bgColor
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

const submitRandomColors = document.querySelector("#submitRandomColors")
submitRandomColors.addEventListener("click", () => {
    randomColors = !randomColors
})
