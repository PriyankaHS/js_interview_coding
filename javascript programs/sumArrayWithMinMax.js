function sumArrayWithMinMax(arr) {
    if (arr.length === 0) {
        return 0; // Return 0 for an empty array
    }

    let max = arr[0];
    let min = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);
    }

    // Subtract the maximum and minimum values from the sum
    sum -= max + min;
    return sum;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const result = sumArrayWithMinMax(array);
console.log("Sum of array excluding max and min:", result);
