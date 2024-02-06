// Write a function that takes an array of numbers and returns a new array with only the unique values, removing any duplicates.


function getUniqueValues(arr) {

    // Use Set to store unique values
    let uniqueSet = new Set(arr);

    // Convert Set back to array
    let uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}

let inputArray = [1, 2, 2, 3, 4, 4, 5];
let resultArray = getUniqueValues(inputArray);
console.log(resultArray);


// const array1 = [2,2,4,5,5,1]
// const uniquearray = arrayunique(array1,(callbacks)=>{
//     console.log(callbacks)
// })
// //console.log(uniquearray)

// function arrayunique(array,callbacks){

//     setTimeout(()=>{
//     const data = Array.from(new Set(array))
//   // return data;
//   callbacks(data)
// },1000);
// }

// // Apply callbacks for above program
// // Implement stack operation [Push,Pop]

// const array = [2,2,4,5,5,1];
//  array.push(5)
// console.log(array)
// array.pop()
// console.log(array)
// array.unshift(4)
// console.log(array)


// // * Find the Unique element from the given array

// function maxLengthUniqueSubstring(str) {
//     let maxLength = 0;
//     let startIndex = 0;
//     let charIndexMap = {};

//     for (let i = 0; i < str.length; i++) {
//         let currentChar = str[i];

//         if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= startIndex) {
//             startIndex = charIndexMap[currentChar] + 1;
//         }

//         charIndexMap[currentChar] = i;

//         maxLength = Math.max(maxLength, i - startIndex + 1);
//     }

//     return maxLength;
// }

// // Example usage:
// let inputString = "abcabcbb";
// let result = maxLengthUniqueSubstring(inputString);
// console.log(result);

