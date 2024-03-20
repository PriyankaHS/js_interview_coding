// 2. Given an unsorted array, sort it in such a way that 
// the first element is the largest value, 
// the second element is the smallest, 
// the third element is the second largest element and 
// so on. [2, 4, 3, 5, 1] -> [5, 1, 4, 2, 3] 
// Input array = [2, 4, 3, 5, 1] 
// Output= [5,1,4,2,3]


function unsortedArray(arr) {
    
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Create a new array to store the result
    const result = [ ];

    // Traverse the sorted array and rearrange elements
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {

        if(i == j) {

            // If the array length is odd, add the middle element
            result.push(arr[i]);
        } else {

            // Add the larger element first, then the smaller element
            result.push(arr[j]);
            result.push(arr[i]);
        }
    }
    return result;
}
const inputArray = [2, 4, 3, 5, 1];
const outputArray = unsortedArray(inputArray);
console.log("The output array is :", outputArray);
