// javascript program to remove the duplicates from the given array 

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const originalArray = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray);

// Output: [1, 2, 3, 4, 5, 6