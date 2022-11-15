let grid = [
    [' ', 'o', ' '],
    [' ', 'o', ' '],
    [' ', 'o', ' '],
];
let newGrid = [[], [], []];
const numRows = 3;
const numCols = 3;
let aliveCell = 'o';
let deadCell = ' ';
let countCells = 0;

// const newGridStructure = () => {
//     for (let ro = 0; ro < numRows; ro++) {
//         newGrid.push([]);
//     }
//     return newGrid;
// };

// // Obtener un valor random entre dos valores enteros
// const randomValue = () => {
//     let value = Math.floor(Math.random() * 2);
//     return value;
// };

// // // Asignar valor inicial a cada célula
// const valueCell = () => {
//     let valueCell = randomValue();
//     if (valueCell === 1) {
//         valueCell = aliveCell;
//     } else {
//         valueCell = deadCell;
//     }
//     return valueCell;
// };

// // // Pintar grid
// const drawGrid = () => {
//     for (let ro = 0; ro < numRows; ro++) {
//         grid.push([]);
//     }
//     grid.forEach((element) => {
//         for (let co = 0; co < numCols; co++) {
//             element.push(valueCell());
//         }
//     });
//     return grid;
// };

// Ciclo de vida de las células
const lifeCycleCell = (countCells, index, indexCell, currentGrid) => {
    let currentCell = currentGrid[index][indexCell];
    // Estado de la célula
    if (currentCell === deadCell && countCells === 3) {
        // La célula vive
        newGrid[index][indexCell] = aliveCell;
        return newGrid;
    }
    let isAlive = currentCell === aliveCell;
    if ((isAlive && countCells < 2) || (isAlive && countCells > 3)) {
        // La célula muere
        newGrid[index][indexCell] = deadCell;
        return newGrid;
    }
    newGrid[index][indexCell] = currentCell;

    return newGrid;
};

const nextRow = (index, indexCell, currentGrid) => {
    let nextRowPrevCell = currentGrid[index + 1][indexCell - 1];
    if (nextRowPrevCell === aliveCell) {
        countCells++;
    }
    let nextRowOnCell = currentGrid[index + 1][indexCell];
    if (nextRowOnCell === aliveCell) {
        countCells++;
    }
    let nextRowNextCell = currentGrid[index + 1][indexCell + 1];
    if (nextRowNextCell === aliveCell) {
        countCells++;
    }
};

const prevRow = (index, indexCell, currentGrid) => {
    let prevRowPrevCell = currentGrid[index - 1][indexCell - 1];
    if (prevRowPrevCell === aliveCell) {
        countCells++;
    }
    let prevRowOnCell = currentGrid[index - 1][indexCell];
    if (prevRowOnCell === aliveCell) {
        countCells++;
    }
    let prevRownextCell = currentGrid[index - 1][indexCell + 1];
    if (prevRownextCell === aliveCell) {
        countCells++;
    }
};

// Buscar células contiguas a cada una
const siblingCells = (currentGrid) => {
    let prevCell;
    let nextCell;

    for (let i = 0; i < currentGrid.length; i++) {
        for (let z = 0; z < currentGrid[i].length; z++) {
            prevCell = currentGrid[i][z - 1];
            if (prevCell === aliveCell) {
                countCells++;
            }
            nextCell = currentGrid[i][z + 1];
            if (nextCell === aliveCell) {
                countCells++;
            }
            if (i === 0) {
                nextRow(i, z, currentGrid);
            } else if (i === currentGrid.length - 1) {
                prevRow(i, z, currentGrid);
            } else {
                prevRow(i, z, currentGrid);
                nextRow(i, z, currentGrid);
            }

            lifeCycleCell(countCells, i, z, currentGrid);
            countCells = 0;
        }
    }
    grid = newGrid;
    newGrid = [[], [], []];
    console.table(grid);
    return grid;
};

const gameOfLife = () => {
    //drawGrid();
    //newGrid = newGridStructure();
    //siblingCells(grid);
    setInterval(function () {
        siblingCells(grid);
    }, 1000);
};

gameOfLife();
