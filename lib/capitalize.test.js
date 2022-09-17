"use strict";

var _capitalize = _interopRequireDefault(require("./capitalize.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('First letter capitalized', function () {
  expect((0, _capitalize["default"])('test')).toBe('Test');
});
test('First letter is number', function () {
  expect((0, _capitalize["default"])('1test')).toBe('1test');
});
test('First letter is a special character', function () {
  expect((0, _capitalize["default"])('%test')).toBe('%test');
});
test('Empty string', function () {
  expect((0, _capitalize["default"])('')).toBe('');
});