// Find the Second Maximum number in array 

function secondMaxNo(arr) {

    // Sort the array in descending order
    arr.sort(function(a,b) {
        return b - a;
    });

    // The second maximum will be at index 1 after sorting
    return arr[1];
}

const nums = [23, 897, 763, 78, 111];
const secondMax = secondMaxNo(nums);
console.log("Second maximum number is :", secondMax);
