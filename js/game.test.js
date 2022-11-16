import { generateRows, randomValue, valueCell, drawGrid } from './game.js';

// RandomValue Function
describe('Get a integer random number between 0 and 1', () => {
    const result = randomValue();
    const expected = 0;
    const expected1 = 1;
    test(`The random value function return ${result} and is expected ${expected} or ${expected1}`, () => {
        expect(result).toBeGreaterThanOrEqual(expected);
        expect(result).toBeLessThanOrEqual(expected1);
    });
});

// ValueCell Function
describe('Assign an status cell to random value', () => {
    const result = typeof valueCell();
    const expected = 'string';
    test(`The value cell function return ${result} and is expected ${expected}`, () => {
        expect(result).toBe(expected);
    });
});

// DragGrid Function
describe('Drag a grid with cells', () => {
    const grid = [];
    generateRows(grid);
    const addCells = drawGrid(grid);

    const result = typeof addCells;
    const expected = 'object';
    const result1 = addCells.length * addCells[0].length;
    const expected1 = grid.length * grid[0].length;
    test(`The type of value that return drawGrid function is ${result} and is expected ${expected}`, () => {
        expect(result).toBe(expected);
    });
    test(`The total number of cells in the grid is ${result1} and is expected ${expected1}`, () => {
        expect(result1).toEqual(expected1);
    });
});
