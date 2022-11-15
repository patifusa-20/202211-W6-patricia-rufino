import { randomValue, valueCell, drawGrid } from './game.js';

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
    const result = typeof drawGrid();
    const expected = 'object';
    test(`The value cell function return ${result} and is expected ${expected}`, () => {
        expect(result).toEqual(expected);
    });
});
