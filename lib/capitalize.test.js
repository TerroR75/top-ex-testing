"use strict";

var _capitalize = _interopRequireDefault(require("./capitalize.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('First letter capitalized', function () {
  expect((0, _capitalize["default"])('test')).toBe('Test');
});