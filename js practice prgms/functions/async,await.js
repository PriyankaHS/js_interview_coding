// async function example

// Function that returns a Promise to add two numbers asynchronously
async function addAsync(a, b) {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
          // Reject the Promise if any of the inputs is not a number
          reject(new Error('Both inputs must be numbers'));
        } else {
          // Resolve the Promise with the sum if both inputs are numbers
          const sum = a + b;
          resolve(sum);
        }
      }, 1000); // Simulating a 1-second delay
    });
}
  
  // Using the async function to add two numbers
async function performAddition() {
    try {
        const result = await addAsync(5, 7);
        console.log('Result of addition is :', result);
    } catch (error) {
        console.error('Error during addition:', error.message);
    }
}
  
  // Calling the function to perform addition
performAddition();


// Using Async/Await -> example
async function asyncFunction() {
    try {
      console.log("Start");
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Resolved");
        }, 2000);
      });
      
const result = await promise;
console.log(result);
console.log("End");
    } catch (error) {
        console.error(error);
    }
}
  
asyncFunction()
  
  // output:
  // Start
  // Resolved
  // End
