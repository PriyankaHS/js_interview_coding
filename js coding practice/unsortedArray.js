// 4.) Given an unsorted array arr[] of size N. 
// Rotate the array to the left (counter-clockwise direction) by D steps, where D is a positive integer.

// Example 1:

// Input: 
// N = 5, 
// D = 2 
// arr[] = {1,2,3,4,5} 

// Output: 3 4 5 1 2 
// Explanation: 1 2 3 4 5 when rotated by 2 elements, it becomes 3 4 5 1 2.

function rotateArray(arr, d) {

    const n = arr.length;
    d = d % n;

    return arr.slice(d).concat(arr.slice(0, d));
}

const arr = [1, 2, 3, 4, 5];
const d = 2;
console.log("The rotated array elements are :", rotateArray(arr, d));
