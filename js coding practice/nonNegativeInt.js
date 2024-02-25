// Given an array of strings arr[] of length n representing non-negative integers, arrange them in a manner, such that, after concatanating them in order, it results in the largest possible number. Since the result may be very large, return it as a string. 

// Example 1:

// Input: n = 5 arr[] = {"3", "30", "34", "5", "9"} 
// Output: "9534330" 
// Explanation: 
// Given numbers are {"3", "30", "34", "5", "9"}, the arrangement "9534330" gives the largest value.

// Example 2: 

// Input: n = 4 arr[] = {"54", "546", "548", "60"} 
// Output: "6054854654"
// Explanation: Given numbers are {"54", "546", "548", "60"}, the arrangement "6054854654" gives the largest value. 

// Your Task: You don't need to read input or print anything. 
// Your task is to complete the function printLargest() which takes the array of strings arr[] as a parameter and returns a string denoting the answer.

function printLargest(arr) {

    arr.sort((a,b) => {
        
        let ab = a + b;
        let ba = b + a;
        if(ab > ba) {
            return - 1;
        } else if(ab < ba) {
            return 1;
        } else {
            return 0;
        }
    });
    return arr.join('');
}

let arr1 = ["3", "30", "34", "5", "9"];
console.log(printLargest(arr1));
