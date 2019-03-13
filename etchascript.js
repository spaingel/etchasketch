const container = document.querySelector("#container");
let tiles;
let novaCell;

function addCell(){
    novaCell = document.createElement('div');
    novaCell.setAttribute('class', 'grid-item');
    container.appendChild(novaCell);
}

function addGrid(tiles){
    let i;
    for (i = 0; i < tiles*tiles; i++) {
        addCell();
    }
    let newGrid = "repeat(" + tiles + ", 1fr)";
    container.style.gridTemplateColumns = newGrid;
    container.style.gridTemplateRows = newGrid;
    mouseHover();
}

function clearGrid() { //FUNCIONA!
    for (let r = container.childNodes.length - 1; r >=0; r--){
        container.removeChild(container.childNodes[r])
    }
}

function newGrid() {
    tiles = prompt("Qual o novo tamanho da grelha?");
    if (tiles === null || tiles === "") {
        alert('ERRO, introduza um número válido');
        return;
    }
    if (tiles < 16 || tiles > 120) {
        alert('INTRODUZ UM NUMERO ENTRE 16 E 120');
        return;
    }
    if (!isNaN(tiles)) {
        clearGrid();
        addGrid(tiles);
    }
    else {
        alert('ERRO, introduza um número válido');

    }
}

function mouseHover(){

    let hover = document.querySelectorAll('.grid-item');
    
    hover.forEach((griditem) => {
        griditem.addEventListener('mouseenter', () => {
        griditem.style.backgroundColor = "blue";  
        });
    });
    }

function clearCells(){
    let clearCell = document.querySelectorAll('.grid-item');
    clearCell.forEach((ccell) => {
        ccell.style.backgroundColor = "white";
    })
}
        

addGrid(16);

let btn = document.querySelector('#butt');
btn.addEventListener('click',() => {
    newGrid();
})

let btnclear = document.querySelector('#clear');
btnclear.addEventListener('click',() => {
    clearCells()
});


/*let hoverCells = document.querySelectorAll('.grid.item');

 NAO FUNCIONA?
function mouseHover(){
    let h;
    for (h = 0; h < hoverCells.length; h++){
        hoverCells[h].style.backgroundColor = "blue";
    }
}

hoverCells.addEventListener('mouseover', () => {
    mouseHover()
});*/