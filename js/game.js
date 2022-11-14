let grid = [];
const numRows = 9;
const numCols = 9;
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
    if (
        (currentCell === aliveCell && countCells < 2) ||
        (currentCell === aliveCell && countCells > 3)
    ) {
        // La célula muere
        grid[index][indexCell] = deadCell;
    }
    return grid;
};

// Buscar células contiguas a cada una
const siblingCells = () => {
    let currentCell;
    let beforeCell;
    let afterCell;

    let beforeRowBeforeCell;
    let beforeRowOnCell;
    let beforeRowAfterCell;

    let afterRowBeforeCell;
    let afterRowOnCell;
    let afterRowAfterCell;

    console.table(grid);
    for (let i = 0; i < grid.length; i++) {
        for (let z = 0; z < grid[i].length; z++) {
            currentCell = grid[i][z];
            if (i === 0) {
                beforeCell = grid[i][z - 1];
                if (beforeCell === aliveCell) {
                    countCells++;
                }
                afterCell = grid[i][z + 1];
                if (afterCell === aliveCell) {
                    countCells++;
                }
                afterRowBeforeCell = grid[i + 1][z - 1];
                if (afterRowBeforeCell === aliveCell) {
                    countCells++;
                }
                afterRowOnCell = grid[i + 1][z];
                if (afterRowOnCell === aliveCell) {
                    countCells++;
                }
                afterRowAfterCell = grid[i + 1][z + 1];
                if (afterRowAfterCell === aliveCell) {
                    countCells++;
                }
            } else if (i === grid.length - 1) {
                beforeCell = grid[i][z - 1];
                if (beforeCell === aliveCell) {
                    countCells++;
                }
                afterCell = grid[i][z + 1];
                if (afterCell === aliveCell) {
                    countCells++;
                }
                beforeRowBeforeCell = grid[i - 1][z - 1];
                if (beforeRowBeforeCell === aliveCell) {
                    countCells++;
                }
                beforeRowOnCell = grid[i - 1][z];
                if (beforeRowOnCell === aliveCell) {
                    countCells++;
                }
                beforeRowAfterCell = grid[i - 1][z + 1];
                if (beforeRowAfterCell === aliveCell) {
                    countCells++;
                }
            } else {
                beforeCell = grid[i][z - 1];
                if (beforeCell === aliveCell) {
                    countCells++;
                }
                afterCell = grid[i][z + 1];
                if (afterCell === aliveCell) {
                    countCells++;
                }
                beforeRowBeforeCell = grid[i - 1][z - 1];
                if (beforeRowBeforeCell === aliveCell) {
                    countCells++;
                }
                beforeRowOnCell = grid[i - 1][z];
                if (beforeRowOnCell === aliveCell) {
                    countCells++;
                }
                beforeRowAfterCell = grid[i - 1][z + 1];
                if (beforeRowAfterCell === aliveCell) {
                    countCells++;
                }

                afterRowBeforeCell = grid[i + 1][z - 1];
                if (afterRowBeforeCell === aliveCell) {
                    countCells++;
                }
                afterRowOnCell = grid[i + 1][z];
                if (afterRowOnCell === aliveCell) {
                    countCells++;
                }
                afterRowAfterCell = grid[i + 1][z + 1];
                if (afterRowAfterCell === aliveCell) {
                    countCells++;
                }
            }

            lifeCycleCell(countCells, i, z);
            countCells = 0;
        }
    }
    return grid;
};

export const gameOfLife = () => {
    drawGrid();
    //siblingCells();
    setInterval(siblingCells, 100);
};

gameOfLife();
