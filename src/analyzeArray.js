function analyzeArray(array) {
    const sortedArray = mergeSort(array);
    return {
        average: average(sortedArray),
        min: min(sortedArray),
        max: max(sortedArray),
        length: sortedArray.length
    }
}

function average(array) {
    let total = array.reduce((total, number) => {
        return total + number;
    }, 0)

    return Math.floor(total / array.length);
}

function min(array) {
    return array[0];
}

function max(array) {
    return array[array.length - 1];
}

// ARRAY SORTING FUNCTIONS
function mergeSort(array) {
    // If array's length is just 1 => return back the array (nothing to split and sort)
    if (array.length <= 1) {
        return array;
    }

    // Set middle index for the array (odd [1,2,3] and even [1,2,3,4] arrays)
    const middleIndex = Math.floor(array.length / 2);
    // Make copies of left and right array
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
}
function merge(leftArray, rightArray) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        const leftElement = leftArray[leftIndex];
        const rightElement = rightArray[rightIndex];

        if (leftElement < rightElement) {
            mergedArray.push(leftElement);
            leftIndex++;
        }
        else {
            mergedArray.push(rightElement);
            rightIndex++;
        }
    }

    return [...mergedArray, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
}

export default analyzeArray;