const container = document.querySelector("#container");
let tiles;
let novaCell;
let cellColor = 'black'
let randomClick = false

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

function clearGrid() { //Estudar melhor a logica disto
    for (let r = container.childNodes.length - 1; r >=0; r--){
        container.removeChild(container.childNodes[r])
    }
}

function newGrid() {
    tiles = prompt("Introduz um número entre 16 e 96");
    if (tiles === null || tiles === "") {
        alert('ERRO, introduza um número válido');
        mouseHover();
        return;
    }
    if (tiles < 16 || tiles > 96) {
        alert('ERRO: Introduz um número entre 16 e 96');
        mouseHover();
        return;
    }
    if (!isNaN(tiles)) {
        clearGrid();
        addGrid(tiles);
    }
    else {
        alert('ERRO: Introduz um número entre 16 e 96');

    }
}

function mouseHover(){

    let hover = document.querySelectorAll('.grid-item');
    hover.forEach((griditem) => {
        griditem.addEventListener('mouseover', () => {
        if (randomClick == false) {
        griditem.style.backgroundColor = cellColor;
        }
        if (randomClick == true) {
        cellColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        griditem.style.backgroundColor = cellColor;    
        }  
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
    mouseHover();
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

let pickw = document.querySelectorAll('.cor');
pickw[0].style.backgroundColor = 'red';
pickw[0].addEventListener('click', () => {
    cellColor = 'red';
    randomClick = false;
    colorPicker();});
pickw[1].style.backgroundColor = 'blue';
pickw[1].addEventListener('click', () => {
    cellColor = 'blue';
    randomClick = false;
    colorPicker();});
pickw[2].style.backgroundColor = 'yellow';
pickw[2].addEventListener('click', () => {
    cellColor = 'yellow';
    randomClick = false;
    colorPicker();});
pickw[3].style.backgroundColor = 'green';
pickw[3].addEventListener('click', () => {
    cellColor = 'green';
    randomClick = false;
    colorPicker();});
pickw[4].style.backgroundColor = 'black';
pickw[4].addEventListener('click', () => {
    cellColor = 'black';
    randomClick = false;
    colorPicker();});

let chp = document.querySelector('.choosepick');
chp.addEventListener('click', () => {
    cellColor = "#"+prompt('Insere o HEXADECIMAL (sem o #)');
    if (cellColor.length == 7 || cellColor.length == 4) {
    randomClick = false;
    colorPicker();}
    else {
        alert('NÃO É UMA COR VALIDA');
        return;
    } 
});

let rnd = document.querySelector('.randommode');
rnd.addEventListener('click', () => {
    randomClick = true
    let ssell = document.querySelector('.selecolor');
    ssell.textContent = "WOOOAH DOUBLE RAINBOW"
    mouseHover();
});

let eras = document.querySelector('.eraser');
eras.addEventListener('click', () => {
    cellColor = 'white';
    randomClick = false;
    colorPicker();});