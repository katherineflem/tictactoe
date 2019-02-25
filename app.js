//selected all of the cells in the html doc 
let cells = document.querySelectorAll(".row");
//looped through all cells and made it so when clicked, "X" is displayed
cells.forEach(function (row) {
    row.addEventListener ("click", cellClicked);
});
function cellClicked (e){
    e.target.textContent = "X"
}

var player1= "X"
var player2="O"

