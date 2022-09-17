import capitalize from './capitalize.js'

test('First letter capitalized', () => {
    expect(capitalize('test')).toBe('Test');
});

test('First letter is number', () => {
    expect(capitalize('1test')).toBe('1test');
});

test('First letter is a special character', () => {
    expect(capitalize('%test')).toBe('%test');
});

test('Empty string', () => {
    expect(capitalize('')).toBe('');
});