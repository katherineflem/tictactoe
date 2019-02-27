
let currentPlayer = "X"

var cells = document.querySelectorAll(".row > div");// cells is the array of your rows/divs
for (let i = 0; i < cells.length; i++) {
    console.log(cells[i]); { //looping through the array 
        cells[i].addEventListener("click", cellClicked); //cells[i] is each cell in the loop that you are adding a click event to 
    }
}

function cellClicked(event){
    event.target.textContent = "X";
    togglePlayer();
}




//toggle players

function togglePlayer() {
    event.target.textContent = currentPlayer;
if (currentPlayer === "X"){
    currentPlayer = "O"
} else {
    currentPlayer = "X"
}}

