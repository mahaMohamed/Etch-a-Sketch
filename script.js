const sketchingArea = document.querySelector('#sketching-area');
sketchingArea.style.gridTemplateColumns = 'repeat(16, 1fr)';
sketchingArea.style.gridTemplateRows = 'repeat (16,1fr)';

// const squareBlocks = document.querySelector(".squares")

const div = document.createElement('div');                     
div.classList.add('squares');
div.style.borderRight = "0.1px solid black"; 
div.style.borderBottom = "0.1px solid black"; 




for (let i=0; i<16*16; i++){
    sketchingArea.appendChild(div.cloneNode());
    console.log(i);
}

