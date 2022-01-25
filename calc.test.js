const { describe, expect } = require('@jest/globals');
const newCalc = require('./calculator');

describe ('calculate the result of two numbers', () => {
    test('find the sum of 1 + 2', () => {
        expect(newCalc.sum(1, 2)).toBe(3);
    })
    test('find the sum of 50 + 54', () => {
        expect(newCalc.sum(50, 54)).toBe(104);
    })
    test('find the sum of 123 + 200', () => {
        expect(newCalc.sum(123, 200)).toBe(323);
    })
})
describe ('calculate the substraction of two numbers', () => {
    test('find the substr of 1 - 2', () => {
        expect(newCalc.substr(1, 2)).toBe(-1);
    })
    test('find the substr of 23 - 3', () => {
        expect(newCalc.substr(0.3, 1.4)).toBeCloseTo(-1.1);
    })
    test('find the substr of 11 - 200', () => {
        expect(newCalc.substr(11, 11)).toBe(0);
    })
})
describe ('calculate the multiplication of two numbers', () => {
    test('find the multi of 1 * 2', () => {
        expect(newCalc.multi(1, 2)).toBe(2);
    })
    test('find the multi of 5 * 20', () => {
        expect(newCalc.multi(5, 20)).toBe(100);
    })
    test('find the multi of 100 * 0', () => {
        expect(newCalc.multi(100, 0)).toBe(0);
    })
})
describe ('calculate the rest of two numbers', () => {
    test('find the div of 2/2', () => {
        expect(newCalc.div(2, 2)).toBe(1);
    })
    test('find the div of 50/2', () => {
        expect(newCalc.div(50, 2)).toBe(25);
    })
    test('find the div of 22/11', () => {
        expect(newCalc.div(22, 0)).toBe('error, cannot divide by zero');
    })
})