let grid = [];
let row1 = [];
let row2 = [];
let row3 = [];
let cell1;
let cell2;
let cell3;
let aliveCell = 'o';
let deadCell = 'x';
let countCells = 0;

// Obtener un valor random entre dos valores enteros
export const randomValue = () => {
    let value = Math.floor(Math.random() * 2);
    return value;
};

// Asignar valor inicial a cada célula
export const valueCell = () => {
    let valueCell = randomValue();
    if (valueCell === 1) {
        valueCell = aliveCell;
    } else {
        valueCell = deadCell;
    }
    return valueCell;
};

// Pintar grid
export const drawGrid = () => {
    grid.push(row1, row2, row3);
    grid.forEach((element) => {
        element.push(valueCell(), valueCell(), valueCell());
    });
    console.table(grid);
    return grid;
};

// Contar células vivas
const countCellsAlive = () => {
    // Recorre todos los elementos del grid
    grid.forEach((rowItem) => {
        rowItem.forEach((cellItem) => {
            if (cellItem === aliveCell) {
                countCells++;
            }
        });
    });
    console.log(countCells);
};

//

// Ciclo de vida de las células
const lifeCycleCell = (countCells) => {
    // Estado de la célula
    let isAlive = true;
    if (!countCells >= 2 || !countCells <= 3) {
        // La célula muere
        isAlive = false;
        row2[1] = deadCell;
        return console.log(row2);
    } else if (countCells === 3) {
        // La célula vive
        isAlive = true;
        row2[1] = aliveCell;
        return console.log(row2);
    }
};

export const gameOfLife = () => {
    drawGrid();
    countCellsAlive();
    lifeCycleCell();
};

gameOfLife();
