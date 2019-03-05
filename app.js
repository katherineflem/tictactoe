
let currentPlayer = "X"
let gameOver = false
let moveCount = 0 //naming a variable for the amt of moves



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
    moveCount++; //each time a cell is clicked, increase the movecount by 1

}

//toggle players-- if the current player is X the other is O or else theyre X
function togglePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
}


//check for a winner-- if all of these combos are have the same content, then gameover = true meaning the cellClicked function will end
function checkWin() {
    if (checkCombo(0, 1, 2) || checkCombo(6, 7, 8) || checkCombo(0, 3, 6) || checkCombo(1, 4, 7) ||
        checkCombo(2, 5, 8) || checkCombo(0, 4, 8) || checkCombo(2, 4, 6)) {
        gameOver = true;
        alert(currentPlayer + " is the winner!");
        resetBoard();
    } else if (moveCount === 9) { //when the movecount =9 (board is full) then it is a draw
        alert("It's a Draw!"); // if there is no winner and the board is full then It is a draw
        resetBoard();
    }
}

//check each possible combo of cells for a win
function checkCombo(a, b, c) {
    if ((cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) && (cells[a].textContent !== "" && cells[b].textContent !== "" && cells[c].textContent !== "")) {
        return true
    }

    let btn = document.querySelector("button");
    btn.addEventListener("click", resetBoard)

    //reset board-- want to make it so this is the result of button click after a winning game or a draw -- make the board clear all text content 
    function resetBoard() {
        gameOver = false;//declare gameover as false
        moveCount = 0; //set movecount back to 0
        for (let i = 0; i < cells.length; i++) {// loop through the cells and log the cells text content as nothing
            console.log(cells[i].textContent = "");
        }
    }
}

