const sum = require('../src/math');

test('adds 1 + 3 to equal 4', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds -1 + -2 to equal -3', () => {
    expect(sum(-1, -1)).toBe(-2);
});
