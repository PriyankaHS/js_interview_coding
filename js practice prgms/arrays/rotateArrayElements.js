// Problem: Given an array of integers and a rotation factor, rotate the array to the right by the rotation factor.

// Example:
// Input: [1, 2, 3, 4, 5], Rotation factor: 2
// Output: [4, 5, 1, 2, 3]
// Solution: You can achieve this by using array slicing and concatenation or by using array manipulation techniques like swapping elements.


function rotateArray(array, rotationFactor) {

    // Check if the array is empty
    if (array.length === 0) {

        // If empty, return the array as it is
        return array;
    }

    rotationFactor %= array.length; // Ensure rotationFactor is within array length

    // Slice the array into two parts: the part to be moved to the front and the part to remain at the back,then concatenate them in reverse order
    return array.slice(-rotationFactor).concat(array.slice(0, -rotationFactor));
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const rotationFactor = 2;   // Define the rotation factor

// Rotate the inputArray by rotationFactor
const rotatedArray = rotateArray(inputArray, rotationFactor); 
console.log(rotatedArray); 

// Output: [4, 5, 1, 2, 3]
