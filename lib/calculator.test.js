"use strict";

var _calculator = _interopRequireDefault(require("./calculator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ADD
test('Add two numbers', function () {
  expect(_calculator["default"].add(2, 2)).toBe(4);
});
test('Add one number', function () {
  expect(_calculator["default"].add(1)).toBe(1);
});
test('Add multiple numbers', function () {
  expect(_calculator["default"].add(1, 2, 3, 4, 5, 6, 7)).toBe(28);
});
test('Add decimal numbers', function () {
  expect(_calculator["default"].add(1.2, 1.5, 1.3)).toBe(4);
});
test('Return decimal added number', function () {
  expect(_calculator["default"].add(1.25, 1.25)).toBe(2.5);
}); // SUBTRACT

test('Subtract two numbers', function () {
  expect(_calculator["default"].subtract(2, 2)).toBe(0);
});
test('Subtract one number', function () {
  expect(_calculator["default"].subtract(1)).toBe(-1);
});
test('Subtract multiple numbers', function () {
  expect(_calculator["default"].subtract(1, 2, 3, 4, 5, 6, 7)).toBe(-26);
});
test('Subtract decimal numbers', function () {
  expect(_calculator["default"].subtract(1.2, 1.5, 1.3)).toBe(-1.6);
});
test('Return decimal subtracted number', function () {
  expect(_calculator["default"].subtract(1.25, 1.50)).toBe(-0.25);
}); // DIVIDE

test('Divide two numbers', function () {
  expect(_calculator["default"].divide(2, 2)).toBe(1);
});
test('Divide one number', function () {
  expect(_calculator["default"].divide(1)).toBe('Can\'t divide by 0!');
});
test('Divide multiple numbers', function () {
  expect(_calculator["default"].divide(50, 5, 2)).toBe(5);
});
test('Divide decimal numbers', function () {
  expect(_calculator["default"].divide(2.5, 0.5)).toBe(5);
});
test('Return decimal divided number', function () {
  expect(_calculator["default"].divide(1.3, 0.3)).toBe(4.33);
}); // MULTIPLY

test('Multiply two numbers', function () {
  expect(_calculator["default"].multiply(2, 2)).toBe(4);
});
test('Multiply one number', function () {
  expect(_calculator["default"].multiply(1)).toBe(0);
});
test('Multiply multiple numbers', function () {
  expect(_calculator["default"].multiply(50, 5, 2)).toBe(500);
});
test('Multiply float with integer numbers', function () {
  expect(_calculator["default"].multiply(5, 2.5)).toBe(12.5);
});
test('Return decimal multiplied number', function () {
  expect(_calculator["default"].multiply(1.3, 0.3)).toBe(0.39);
});