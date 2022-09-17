"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function add() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}

function subtract() {
  var total = arguments.length <= 0 ? undefined : arguments[0];
  if (arguments.length === 1) return total * -1;

  for (var i = 1; i < arguments.length; i++) {
    total -= i < 0 || arguments.length <= i ? undefined : arguments[i];
  }

  return total;
}

function divide() {
  var total = arguments.length <= 0 ? undefined : arguments[0];
  if (arguments.length === 1) return 'Can\'t divide by 0!';

  for (var i = 1; i < arguments.length; i++) {
    total /= i < 0 || arguments.length <= i ? undefined : arguments[i];
  }

  if (total % 1 != 0) return parseFloat(total.toFixed(2));
  return Math.floor(total);
}

function multiply() {
  var total = arguments.length <= 0 ? undefined : arguments[0];
  if (arguments.length === 1) return 0;

  for (var i = 1; i < arguments.length; i++) {
    total *= i < 0 || arguments.length <= i ? undefined : arguments[i];
  }

  if (total % 1 != 0) return parseFloat(total.toFixed(2));
  return Math.floor(total);
}

var calculator = {
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply
};
var _default = calculator;
exports["default"] = _default;