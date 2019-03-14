const container = document.querySelector("#container");
let tiles;
let novaCell;
let cellColor = 'black'

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
    tiles = prompt("Introduz um número entre 16 e 120");
    if (tiles === null || tiles === "") {
        alert('ERRO, introduza um número válido');
        mouseHover();
        return;
    }
    if (tiles < 16 || tiles > 120) {
        alert('ERRO: Introduz um número entre 16 e 120');
        mouseHover();
        return;
    }
    if (!isNaN(tiles)) {
        clearGrid();
        addGrid(tiles);
    }
    else {
        alert('ERRO: Introduz um número entre 16 e 120');

    }
}

function mouseHover(){

    let hover = document.querySelectorAll('.grid-item');
    
    hover.forEach((griditem) => {
        griditem.addEventListener('mouseenter', () => {
        griditem.style.backgroundColor = cellColor;  
        });
    });
    }

function clearCells(){
    let clearCell = document.querySelectorAll('.grid-item');
    clearCell.forEach((ccell) => {
        ccell.style.backgroundColor = "white";
    })
}

function colorPicker() {
    let ssell = document.querySelector('.selecolor');
    ssell.textContent = "Seleccionaste a cor "+ cellColor;
    }
        

addGrid(16);

let btn = document.querySelector('#butt');
btn.addEventListener('click',() => {
    newGrid();
});

let btnclear = document.querySelector('#clear');
btnclear.addEventListener('click',() => {
    clearCells()
});

let rp = document.querySelector('.redpick');
rp.addEventListener('click', () => {
    cellColor = 'red';
    colorPicker();
});
let bp = document.querySelector('.bluepick');
bp.addEventListener('click', () => {
    cellColor = 'blue';
    colorPicker();
});
let yp = document.querySelector('.yellowpick');
yp.addEventListener('click', () => {
    cellColor = 'yellow';
    colorPicker();
});
let gp = document.querySelector('.greenpick');
gp.addEventListener('click', () => {
    cellColor = 'green';
    colorPicker();
});
let blp = document.querySelector('.blackpick');
blp.addEventListener('click', () => {
    cellColor = 'black';
    lcolorPicker();
});
let chp = document.querySelector('.choosepick');
chp.addEventListener('click', () => {
    cellColor = "#"+prompt('Insere o HEXADECIMAL (sem o #)');
    if (cellColor.length == 7) {
    colorPicker();}
    else {
        alert('NÃO É UMA COR VALIDA');
        mouseHover();
        return;
    }
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