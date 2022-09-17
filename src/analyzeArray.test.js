import analyzeArray from "./analyzeArray.js";

const testedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('Analyze array', () => {
    expect(analyzeArray(testedArray)).toEqual({
        average: 5,
        min: 1,
        max: 10,
        length: 10
    })
});