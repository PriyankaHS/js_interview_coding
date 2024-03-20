// Write a function that takes an array of numbers and returns a new array with only the unique values, removing any duplicates.

let arr = ["apple", "avacado", "mango", "strawberry", "avacado", "mango"];

// Approach 1 using SET
function removeDuplicates(arr) {

    // Convert the array to a Set to automatically remove duplicates
    // const uniqueSet = new Set(arr);

    // Convert the Set back to an array
    // const uniqueArray = Array.from(uniqueSet);

    // return uniqueArray;

    return [...new Set(arr)];
}

console.log("Unique values are : ", removeDuplicates(arr));


// Approach 2 using filter

// This line uses the filter method on the array arr. 
// The filter method creates a new array with all elements that pass the test implemented by the provided function.

// The provided function (item, index, array) => { ... } takes three parameters:

// item: The current element being processed in the array.
// index: The index of the current element in the array.
// array: The array on which the filter method was called (in this case, the original array arr).

function removeDup(arr) {

    return arr.filter((item, index, array) => {

          // Return true if the current index is the first occurrence of the item
          return array.indexOf(item) === index;
        });
}

console.log(removeDup(arr));
