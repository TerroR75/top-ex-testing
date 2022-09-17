import reverseString from './reverseString.js'

test('Returns reversed string', () => {
    expect(reverseString('test')).toBe('tset');
});

test('Returns reversed string with whitespace', () => {
    expect(reverseString('test test')).toBe('tset tset');
});

test('Returns string in correct reversed order', () => {
    expect(reverseString('123456789')).toBe('987654321');
});

test('Returns empty string', () => {
    expect(reverseString('')).toBe('');
});