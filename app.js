
let currentPlayer = "X"
let gameOver = false

var cells = document.querySelectorAll(".row > div");// cells is the array of your rows/divs
for (let i = 0; i < cells.length; i++) {
    console.log(cells[i]); { //looping through the array 
        cells[i].addEventListener("click", cellClicked); //cells[i] is each cell in the loop that you are adding a click event to 
    }
}

function cellClicked(event) {
    if (gameOver === true) {
        return;
    }
    if (event.target.textContent === "X" || event.target.textContent === "O") {
        return;
    }
    event.target.textContent = currentPlayer;
    checkWin();
    togglePlayer();

}

//toggle players
function togglePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
}


//check for a winner
function checkWin() {
    if (checkCombo(0, 1, 2) || checkCombo(6, 7, 8) || checkCombo(0, 3, 6) || checkCombo(1, 4, 7) ||
        checkCombo(2, 5, 8) || checkCombo(0, 4, 8) || checkCombo(2, 4, 6)) {
        gameOver = true;
        console.log(currentPlayer + " is the winner!");

    }
}

//check each possible combo of cells for a win
function checkCombo(a, b, c) {
    if (cells[a].textContent === cells[b].textContent || cells[b].textContent === cells[c].textContent && cells[a].textContent !== "") {
        return true
    }
}

