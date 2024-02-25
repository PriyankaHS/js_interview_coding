// Given an array A of positive integers. 
// Your task is to find the leaders in the array. 
// An element of array is a leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader.

// Example 1:

// Input: n = 6 A[] = {16,17,4,3,5,2} 
// Output: 17 5 2 
// Explanation: The first leader is 17 as it is greater than all the elements to its right. Similarly, the next leader is 5. 
// The right most element is always a leader so it is also included.

function arrayLeaders(arr) {
    
    const n = arr.length;
    let rightArray = arr[n - 1];
    const leaders = [rightArray];

    for(let i=n-2; i>=0 ; i--) {

        if(arr[i] >= rightArray) {
            rightArray = arr[i];
            leaders.unshift(rightArray);
        }
    }
    return leaders;
}

const arrayInput = [16,17,4,3,5,2];
const leaders = arrayLeaders(arrayInput);
console.log(leaders);
