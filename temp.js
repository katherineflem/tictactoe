    event.target.textContent = currentPlayer;
    checkForWinner();
    toggleplayer();

}
// main game logic

//catch if a cell has an X or O
//if there is currenlty something in this div, we dont want to be able to override it
//not empty cells leave as is- empty change to new

function cellclicked() {
    if (event.target.textContent !== "") {
        return; //stops the function here. 
    }
}
//! is called the not operator--this is testing for the opposite of
// another way to write this:

if (event.target.textCenter === "x") || (event.target.textContent === "o")
return;

//check for winner // cells[0]is the top left box 
function checkForWinner() {
    if (cells[0].textContent === "x")&& cell[1].tentContent == "x" && cell[2].textcontent ===
    
}else if (//can copy and paste for each possible scenario oR){}
}

if (cells[0].textContent === cell[1].tentContent == "x" && cell[2].textcontent ===

//have to check that they are not empty as well:
if (cells[0].textContent === cell[1].tentContent && cell[2].textcontent ===
        console.log(curenntPlayer + "is the winner")
gameover = true;
function Checkacombo(a, b, c) {
    if (if (cells[a].textContent === cell[b].tentContent && cell[c].textcontent === && cells[a].textContent !== "")
//8 check combo statements with or statements between them

} function checkForWinner() {
    if (checkAcombo())|| 

}
let gameOver = false
if (gameover) {
    // reset board , reset variables etc
    //resetGame--loops through and clears and resets check for winner toggle player etc
    return;
}

}