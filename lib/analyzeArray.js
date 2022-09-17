"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function analyzeArray(array) {
  var sortedArray = mergeSort(array);
  return {
    average: average(sortedArray),
    min: min(sortedArray),
    max: max(sortedArray),
    length: sortedArray.length
  };
}

function average(array) {
  var total = array.reduce(function (total, number) {
    return total + number;
  }, 0);
  return Math.floor(total / array.length);
}

function min(array) {
  return array[0];
}

function max(array) {
  return array[array.length - 1];
} // ARRAY SORTING FUNCTIONS


function mergeSort(array) {
  // If array's length is just 1 => return back the array (nothing to split and sort)
  if (array.length <= 1) {
    return array;
  } // Set middle index for the array (odd [1,2,3] and even [1,2,3,4] arrays)


  var middleIndex = Math.floor(array.length / 2); // Make copies of left and right array

  var leftArray = array.slice(0, middleIndex);
  var rightArray = array.slice(middleIndex);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  var mergedArray = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    var leftElement = leftArray[leftIndex];
    var rightElement = rightArray[rightIndex];

    if (leftElement < rightElement) {
      mergedArray.push(leftElement);
      leftIndex++;
    } else {
      mergedArray.push(rightElement);
      rightIndex++;
    }
  }

  return [].concat(mergedArray, _toConsumableArray(leftArray.slice(leftIndex)), _toConsumableArray(rightArray.slice(rightIndex)));
}

var _default = analyzeArray;
exports["default"] = _default;