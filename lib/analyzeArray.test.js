"use strict";

var _analyzeArray = _interopRequireDefault(require("./analyzeArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var testedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test('Analyze array', function () {
  expect((0, _analyzeArray["default"])(testedArray)).toEqual({
    average: 5,
    min: 1,
    max: 10,
    length: 10
  });
});