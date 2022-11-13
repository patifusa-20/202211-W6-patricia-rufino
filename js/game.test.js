import { randomValue, valueCell, drawGrid } from './game.js';

// RandomValue Function
describe('Get a integer random number between 0 and 1', () => {
    const result = randomValue();
    const expected = 0;
    const expected1 = 1;
    test(`The random value function return ${result} and is expected ${expected}`, () => {
        expect(result).toBe(expected || expected1);
    });
});

// ValueCell Function
describe('Assign an status cell to random value', () => {
    const result = valueCell();
    const expected = 'x';
    const expected1 = 'o';
    test(`The value cell function return ${result} and is expected ${expected}`, () => {
        expect(result).toBe(expected || expected1);
    });
});

// DragGrid Function
describe('Drag a grid with cells', () => {
    const result = drawGrid();
    const expected = [[], [], []];
    test(`The value cell function return ${result} and is expected ${expected}`, () => {
        expect(result).toEqual(expected);
    });
});
