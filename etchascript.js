const container = document.querySelector("#container");
container.style.gridTemplateColumns = 'repeat(16, auto)';
container.style.gridTemplateRows = 'repeat(16, auto)';
    
function addTiles(tiles){
    
    let i;
    for (i = 0; i < tiles; i++){
        let griddiv = document.createElement('div');
        container.appendChild(griddiv);
        griddiv.setAttribute('class', 'grid-item');
        griddiv.style.border = '1px solid black';
        griddiv.style.padding = '20px';
    }
    
   }
function createGrid(tiles){
    let c;
    for (c = 0; c < tiles; c++){
    addTiles(tiles);
    }
}