// Given an input integer array of length n that can hold values between 0 to 9, 
// write a program that generates an output array of the same length where the value at each index of the output array is equal to the number of times this index occurred as a value in the input array.

// For example: 
// If Input array is {0,1,1,1,3,0}, 
// then the output array should be {2, 3, 0,1,0,0} in javascript program

let inputArray = [0, 1, 1, 1, 3, 0];
let outputArray = [];

// Initialize the output array with zeroes
for (let i = 0; i < 6; i++) {
    outputArray.push(0);
}

// Count occurrences of each index
for (let i = 0; i < inputArray.length; i++) {
    let index = inputArray[i];
    outputArray[index]++;
}

console.log("{ " + outputArray.join(", ") + " }"); 
// Output: { 2, 3, 0, 1, 0, 0 }
