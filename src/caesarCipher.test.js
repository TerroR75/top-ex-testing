import caesarCipher from './caesarCipher.js';


test('Cipher normal text', () => {
    expect(caesarCipher.cipher('test')).toBe('uftu');
});
test('Cipher capitalized text', () => {
    expect(caesarCipher.cipher('Test')).toBe('Uftu');
});
test('Cipher numbers', () => {
    expect(caesarCipher.cipher('test123')).toBe('uftu234');
});
test('Cipher with whitespace', () => {
    expect(caesarCipher.cipher('test test')).toBe('uftu uftu');
});
