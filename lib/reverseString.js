"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function reverseString(string) {
  var reversed = '';

  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

var _default = reverseString;
exports["default"] = _default;