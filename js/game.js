let grid = [];
const numRows = 20;
const numCols = 20;
let aliveCell = 'o';
let deadCell = ' ';
let countCells = 0;

// Obtener un valor random entre dos valores enteros
const randomValue = () => {
    let value = Math.floor(Math.random() * 2);
    return value;
};

// // Asignar valor inicial a cada célula
const valueCell = () => {
    let valueCell = randomValue();
    if (valueCell === 1) {
        valueCell = aliveCell;
    } else {
        valueCell = deadCell;
    }
    return valueCell;
};

// // Pintar grid
const drawGrid = () => {
    for (let ro = 0; ro < numRows; ro++) {
        grid.push([]);
    }
    grid.forEach((element) => {
        for (let co = 0; co < numCols; co++) {
            element.push(valueCell());
        }
    });
    return grid;
};

// Ciclo de vida de las células
const lifeCycleCell = (countCells, index, indexCell) => {
    let currentCell = grid[index][indexCell];
    // Estado de la célula
    if (currentCell === deadCell && countCells === 3) {
        // La célula vive
        grid[index][indexCell] = aliveCell;
    }
    let isAlive = currentCell === aliveCell;
    if ((isAlive && countCells < 2) || (isAlive && countCells > 3)) {
        // La célula muere
        grid[index][indexCell] = deadCell;
    }
    return grid;
};

const nextRow = (index, indexCell) => {
    let nextRowPrevCell = grid[index + 1][indexCell - 1];
    if (nextRowPrevCell === aliveCell) {
        countCells++;
    }
    let nextRowOnCell = grid[index + 1][indexCell];
    if (nextRowOnCell === aliveCell) {
        countCells++;
    }
    let nextRowNextCell = grid[index + 1][indexCell + 1];
    if (nextRowNextCell === aliveCell) {
        countCells++;
    }
};

const prevRow = (index, indexCell) => {
    let prevRowPrevCell = grid[index - 1][indexCell - 1];
    if (prevRowPrevCell === aliveCell) {
        countCells++;
    }
    let prevRowOnCell = grid[index - 1][indexCell];
    if (prevRowOnCell === aliveCell) {
        countCells++;
    }
    let prevRownextCell = grid[index - 1][indexCell + 1];
    if (prevRownextCell === aliveCell) {
        countCells++;
    }
};

// Buscar células contiguas a cada una
const siblingCells = () => {
    let prevCell;
    let nextCell;
    console.table(grid);
    for (let i = 0; i < grid.length; i++) {
        for (let z = 0; z < grid[i].length; z++) {
            prevCell = grid[i][z - 1];
            if (prevCell === aliveCell) {
                countCells++;
            }
            nextCell = grid[i][z + 1];
            if (nextCell === aliveCell) {
                countCells++;
            }
            if (i === 0) {
                nextRow(i, z);
            } else if (i === grid.length - 1) {
                prevRow(i, z);
            } else {
                prevRow(i, z);
                nextRow(i, z);
            }

            lifeCycleCell(countCells, i, z);
            countCells = 0;
        }
    }
    return grid;
};

const gameOfLife = () => {
    drawGrid();
    //siblingCells();
    setInterval(siblingCells, 1000);
};

gameOfLife();
