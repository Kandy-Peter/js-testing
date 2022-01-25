const capitalize = require('./capitalize');

test('check if the first character of the string is capitalized', () => {
    expect(capitalize("create")).toBe("Create");
})