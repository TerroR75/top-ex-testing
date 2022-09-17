"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function capitalize(string) {
  if (string === '') return '';
  var firstChar = string.slice(0, 1).toUpperCase();
  var rest = string.slice(1).toLowerCase();
  return firstChar + rest;
} // const newString = capitalize('test');
// console.log(newString);


var _default = capitalize;
exports["default"] = _default;