// Create a function that accepts a callback and an array of numbers. The function should apply the callback to each element of the array and return a new array with the results.

// Function to apply callback to each element of the array
function arrayCallBack(callback, numbers) {

    // Using Array.map to apply the callback to each element
    const resultArray = numbers.map(callback);
    return resultArray;
}

function doubleNumber(num) {
    return num * 2;
}

const inputArray = [1, 2, 3, 4, 5];

const result = arrayCallBack(doubleNumber, inputArray);

console.log(result);
