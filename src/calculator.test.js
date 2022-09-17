import calculator from './calculator.js'

// ADD
test('Add two numbers', () => {
    expect(calculator.add(2, 2)).toBe(4);
});
test('Add one number', () => {
    expect(calculator.add(1)).toBe(1);
});
test('Add multiple numbers', () => {
    expect(calculator.add(1, 2, 3, 4, 5, 6, 7)).toBe(28);
});
test('Add decimal numbers', () => {
    expect(calculator.add(1.2, 1.5, 1.3)).toBe(4);
});
test('Return decimal added number', () => {
    expect(calculator.add(1.25, 1.25)).toBe(2.5);
});

// SUBTRACT
test('Subtract two numbers', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
});
test('Subtract one number', () => {
    expect(calculator.subtract(1)).toBe(-1);
});
test('Subtract multiple numbers', () => {
    expect(calculator.subtract(1, 2, 3, 4, 5, 6, 7)).toBe(-26);
});
test('Subtract decimal numbers', () => {
    expect(calculator.subtract(1.2, 1.5, 1.3)).toBe(-1.6);
});
test('Return decimal subtracted number', () => {
    expect(calculator.subtract(1.25, 1.50)).toBe(-0.25);
});

// DIVIDE
test('Divide two numbers', () => {
    expect(calculator.divide(2, 2)).toBe(1);
});
test('Divide one number', () => {
    expect(calculator.divide(1)).toBe('Can\'t divide by 0!');
});
test('Divide multiple numbers', () => {
    expect(calculator.divide(50, 5, 2)).toBe(5);
});
test('Divide decimal numbers', () => {
    expect(calculator.divide(2.5, 0.5)).toBe(5);
});
test('Return decimal divided number', () => {
    expect(calculator.divide(1.3, 0.3)).toBe(4.33);
});

// MULTIPLY
test('Multiply two numbers', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});
test('Multiply one number', () => {
    expect(calculator.multiply(1)).toBe(0);
});
test('Multiply multiple numbers', () => {
    expect(calculator.multiply(50, 5, 2)).toBe(500);
});
test('Multiply float with integer numbers', () => {
    expect(calculator.multiply(5, 2.5)).toBe(12.5);
});
test('Return decimal multiplied number', () => {
    expect(calculator.multiply(1.3, 0.3)).toBe(0.39);
});