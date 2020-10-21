



const sketchingArea = document.querySelector('#sketching-area');


/* Prepping the skteching area for drawing a grid*/ 
sketchingArea.style.gridTemplateColumns = 'repeat(16, 1fr)';
sketchingArea.style.gridTemplateRows = 'repeat (16,1fr)';

/*Dynamically creating the squares of the grid*/
const div = document.createElement('div');
div.classList.add('squares');
div.style.borderRight = "0.1px solid black";
div.style.borderBottom = "0.1px solid black";

for (let i = 0; i < 16 * 16; i++) {
    sketchingArea.appendChild(div.cloneNode());
}

/*Setting up the hover effect*/
const squareBlocks = document.querySelectorAll(".squares"); 

for (let i=0; i<squareBlocks.length; i++){
    squareBlocks[i].addEventListener("mouseenter", colorSquares);
}

function colorSquares(e){
    e.target.style.backgroundColor = "black";
    console.log(e.target);
    console.log("here");
}