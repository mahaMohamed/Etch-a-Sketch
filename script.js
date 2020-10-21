



const sketchingArea = document.querySelector('#sketching-area');
const clearGridButton = document.querySelector('#clear-grid');

/*Dynamically creating the squares of the grid*/
function createGrid(gridSize) {
    /* Prepping the skteching area for drawing a grid*/
    sketchingArea.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
    sketchingArea.style.gridTemplateRows = 'repeat(' + gridSize + ', 1fr)';

    const div = document.createElement('div');
    div.classList.add('squares');
    div.style.borderRight = "0.1px solid black";
    div.style.borderBottom = "0.1px solid black";

    for (let i = 0; i < gridSize * gridSize; i++) {
        sketchingArea.appendChild(div.cloneNode());
    }

    addHoverEffect();
}

/*Setting up the hover effect*/
function addHoverEffect() {
    const squareBlocks = document.querySelectorAll(".squares");

    for (let i = 0; i < squareBlocks.length; i++) {
        squareBlocks[i].addEventListener("mouseenter", colorSquares);
    }

    function colorSquares(e) {
        e.target.style.backgroundColor = "black";
        console.log(e.target);
        console.log("here");
    }
}

createGrid(16);



/*Clearing the grid and prompting the user to add custom size of the grid*/
clearGridButton.addEventListener('click', clearGrid);

function clearGrid() {

    const squareBlocks = document.querySelectorAll(".squares");
    console.log("clear grid")
    for (let i = 0; i < squareBlocks.length; i++) {
        squareBlocks[i].style.backgroundColor = "white";
    }


    let customGridSize = 0; 

    do{
         customGridSize = window.prompt("Enter new grid size, max 100");
    } while (customGridSize > 100);

    for (let i = 0; i < squareBlocks.length; i++) {
        sketchingArea.removeChild(squareBlocks[i]);
    }
    createGrid(customGridSize);


}



