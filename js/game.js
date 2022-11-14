//let grid = [];
let row1 = [];
let row2 = [];
let row3 = [];
// let aliveCell = 'o';
// let deadCell = 'x';
// let countCells = 0;

// Obtener un valor random entre dos valores enteros
// export const randomValue = () => {
//     let value = Math.floor(Math.random() * 2);
//     return value;
// };

// // Asignar valor inicial a cada célula
// export const valueCell = () => {
//     let valueCell = randomValue();
//     if (valueCell === 1) {
//         valueCell = aliveCell;
//     } else {
//         valueCell = deadCell;
//     }
//     return valueCell;
// };

// // Pintar grid
// export const drawGrid = () => {
//     grid.push(row1, row2, row3);
//     grid.forEach((element) => {
//         element.push(valueCell(), valueCell(), valueCell());
//     });
//     return grid;
// };

// Contar células vivas
// const countCellsAlive = () => {
//     // Recorre todos los elementos del grid
//     grid.forEach((rowItem) => {
//         rowItem.forEach((cellItem) => {
//             if (cellItem === aliveCell) {
//                 countCells++;
//             }
//         });
//     });
//     console.log(countCells);
// };

// comentar condicional primero
// if (rowItem[i - 1] === aliveCell) {
//     countCells++;
// }
// if (rowItem[i + 1] === aliveCell) {
//     countCells++;
// }

// Buscar células contiguas a cada una
const grid = [
    ['x', 'o', 'x'],
    ['x', 'o', 'x'],
    ['o', 'o', 'x'],
];
let aliveCell = 'o';
let deadCell = 'x';
let countCells = 0;

// Ciclo de vida de las células
const lifeCycleCell = (countCells, index, indexCell) => {
    debugger;
    let currentCell = grid[index][indexCell];
    // Estado de la célula
    let isAlive = true;
    if (currentCell === deadCell && countCells === 3) {
        // La célula vive
        isAlive = true;
        grid[index][indexCell] = aliveCell;
    }
    if (
        (currentCell === aliveCell && countCells <= 2) ||
        (currentCell === aliveCell && countCells >= 3)
    ) {
        isAlive = false;
        grid[index][indexCell] = deadCell;
    }
    console.table(grid);
};
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

    debugger;
    console.table(grid);
    for (let i = 0; i < grid.length; i++) {
        for (let z = 0; z < grid[i].length; z++) {
            currentCell = grid[i][z];
            debugger;
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
siblingCells();

export const gameOfLife = () => {
    //drawGrid();
    //Esta función está pendiente de saber si se usa o no
    //countCellsAlive();
    siblingCells();
    //lifeCycleCell();
};

gameOfLife();
