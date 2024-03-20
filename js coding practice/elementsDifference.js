// 3.) Find the element which has the smallest difference from the middle element to the right and highest difference to the left

// Example
// 	Input = 6 7 8 3 5 7 2 1
	
// Explanation : 3 is the middle element
// 			to the left smallest difference is ( 6 - 3) = 3
// 			to the right highest difference is ( 7 - 3) = 4


function findSmallestLargest(arr) {

    let smallestDifference = Math.abs(arr[0] - arr[1]);
    let result = arr[0];
    let leftDifference = 0;
    let rightDifference = 0;

    for (let i = 1; i < arr.length - 1; i++) {

        for (let j = i - 1; j >= 0; j--) {
            leftDifference = Math.abs(arr[j] - arr[i]);
        }

        for (let k = i + 1; k < arr.length; k++) {
            rightDifference = Math.abs(arr[k] - arr[i]);
        }

        if (leftDifference <= smallestDifference && rightDifference > leftDifference) {
            smallestDifference = leftDifference;
            result = arr[i];
        }
    }
    return result;
}

const input = [6, 7, 8, 3, 5, 7, 2, 1];
const result = findSmallestLargest(input);
console.log("Result is :", result);
