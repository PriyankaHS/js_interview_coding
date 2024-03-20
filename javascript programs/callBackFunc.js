// Example using callbacks
// Function that takes two values and a callback to calculate the sum

function calculateSum(a, b, callback) {
    const sum = a + b;
    callback(sum);
}

// Callback function to handle the sum
function handleSum(result) {
    console.log("The sum is :", result);
}
// Using the calculateSum function with a callback
calculateSum(5, 7, handleSum);
