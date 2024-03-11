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
            console.log(square.id)
            row.appendChild(square)
        }
        board.appendChild(row)
    }
}

document.addEventListener("DOMContentLoaded", drawGrid(16,16));