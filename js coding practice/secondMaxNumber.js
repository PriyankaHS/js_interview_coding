// Find the Second Maximum number in array 

function findSecondMaximum(arr) {

    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    
    // Return the second element
    return arr[1];
}

const array = [10, 5, 8, 20, 15];
const secondMax = findSecondMaximum(array);
console.log("Second maximum number :", secondMax);
