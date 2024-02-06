// Write a small code for callback function

// Callbacks - Any function that is passed as an argument in other functions are called as callback functions
// Callbacks are used to delay the execution of the function. Example - Data fetching

// Function that takes two numbers and a callback function
function add(a, b, callback) {

    const result = a + b;

    // Call the callback function with the result
    callback(result);
}

// Callback function to log the result to the console
function logResult(result) {
    console.log(`The result is : ${result}`);
}

// Call the 'add' function with two numbers and the 'logResult' callback
add(17, 30, logResult);

// add function: Takes two numbers (a and b) and a callback function (callback) as parameters.

// Addition: Performs the addition of a and b to get the result.

// Callback Invocation: Calls the provided callback function (callback) with the result as an argument.

// logResult callback function: Logs the result to the console.

// Calling add with callback: Invokes the add function with two numbers (5 and 3) and the logResult callback. The callback will be executed after the addition is complete.

// In this example, the callback (logResult) is a separate function that gets executed after the addition operation inside the add function is completed. Callbacks are commonly used in asynchronous JavaScript, such as handling asynchronous operations like fetching data from a server or responding to user interactions.