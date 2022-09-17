import capitalize from './capitalize.js'

test('First letter capitalized', () => {
    expect(capitalize('test')).toBe('Test');
});