async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  // function(error) {myDisplayer(error);}
);



// Async function using await with setTimeout
async function delayAndLog() {
  console.log("Start of the async function");
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a 2-second delay
  console.log("End of the async function after delay");
}

// Calling the async function
delayAndLog();

console.log("Program continues to execute...");

// Output:
// Start of the async function
// Program continues to execute...
// (after 2 seconds)
// End of the async function after delay


// Async function using await with setTimeout
async function delayAndLog() {
    console.log("Start of the async function");
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a 2-second delay
    console.log("End of the async function after delay");
  }
  
  // Calling the async function
  delayAndLog();
  
  console.log("Program continues to execute...");
  
  // Output:
  // Start of the async function
  // Program continues to execute...
  // (after 2 seconds)
  // End of the async function after delay
  