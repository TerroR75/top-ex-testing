"use strict";

var _reverseString = _interopRequireDefault(require("./reverseString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Returns reversed string', function () {
  expect((0, _reverseString["default"])('test')).toBe('tset');
});
test('Returns reversed string with whitespace', function () {
  expect((0, _reverseString["default"])('test test')).toBe('tset tset');
});
test('Returns string in correct reversed order', function () {
  expect((0, _reverseString["default"])('123456789')).toBe('987654321');
});
test('Returns empty string', function () {
  expect((0, _reverseString["default"])('')).toBe('');
});