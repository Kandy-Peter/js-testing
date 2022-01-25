const { expect } = require('@jest/globals');
const stringLength = require('./stringLength');

test('check string length for string', () => {
    expect(stringLength("kandy")).toBe(5);
});
test('check string length for string', () => {
    expect(stringLength("Joseph is testing his js folders")).toBe('write a string with length between1 and 10');
});
test('check string length for string', () => {
    expect(stringLength("")).toBe('write a string with length between1 and 10');
});



