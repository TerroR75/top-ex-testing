"use strict";

var _caesarCipher = _interopRequireDefault(require("./caesarCipher.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Cipher normal text', function () {
  expect(_caesarCipher["default"].cipher('test')).toBe('uftu');
});
test('Cipher capitalized text', function () {
  expect(_caesarCipher["default"].cipher('Test')).toBe('Uftu');
});
test('Cipher numbers', function () {
  expect(_caesarCipher["default"].cipher('test123')).toBe('uftu234');
});
test('Cipher with whitespace', function () {
  expect(_caesarCipher["default"].cipher('test test')).toBe('uftu uftu');
});